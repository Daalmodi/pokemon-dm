import { LitElement} from 'lit-element';

export class PokemonDm extends LitElement {
  static get properties() {
    return {
      pokemonData: {type:Array},
      evolutioData:{type:Array},
      pokemonId: { type: Number },
    };
  }

  constructor() {
    super();
    this.pokemonData = [];
    this.evolutioData = [];
    this.pokemonId = 1;
  }

   async makeRequest() {

    const promises = [];

    for (let index = 1; index <= 20; index++) {
      promises.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
          .then((response) => response.json())
          .catch((error) => console.error('Error:', error))
      );
    }

    const pokemonData = await Promise.all(promises);
    this.pokemonData = pokemonData.sort((a, b) => a.id - b.id);
  }

  async fetchPokemonSpecies(pokemonId) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al traer la especie del pokemon', error);
    }
  }

  async fetchEvolutionChain(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al traer la url de la cadena', error);
    }
  }

  async fetchEvolutions(chain) {
    const queue = [chain];
    const evolutions = [];

    while (queue.length > 0) {
      const species = queue.shift();
      const urlParts = species.species.url.split('/');
      const id = parseInt(urlParts[urlParts.length - 2]);
      const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemonData = await pokemonResponse.json();

      evolutions.push(pokemonData);

      if (species.evolves_to) {
        queue.push(...species.evolves_to);
      }
    }

    return evolutions;
  }
  async fetchPokemonData(pokemonId) {
    try {
      const speciesData = await this.fetchPokemonSpecies(pokemonId);
      const evolutionChainData = await this.fetchEvolutionChain(speciesData.evolution_chain.url);
      const evolutions = await this.fetchEvolutions(evolutionChainData.chain);

      this.evolutioData = evolutions;
    } catch (error) {
      console.error('Error  al traer la evolucion', error);
    }
  }

}