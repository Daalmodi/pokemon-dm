import { LitElement} from 'lit-element';

export class PokemonDm extends LitElement {
  static get properties() {
    return {
      data: {type:Array},
    };
  }

  constructor() {
    super();
    this.data = [];
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

    const data = await Promise.all(promises);
    this.data = data.sort((a, b) => a.id - b.id);
  }


}