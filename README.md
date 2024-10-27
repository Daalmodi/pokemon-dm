# @bbva-web-components/pokemon-dm

## Package info

### Package installation

Installation using NPM

```bash
npm install @bbva-web-components/pokemon-dm
```

### Entry points & exports

- (Default entry point)
  - PokemonDm (Class)
- pokemon-dm.js
  - pokemon-dm (Custom Element)


## PokemonDm (Class) pokemon-dm (Custom Element) 

### Extends from

LitElement (lit-element package)

### Usage

Import and extend the class:

```js
import { PokemonDm } from '@bbva-web-components/pokemon-dm';

class ExampleElement extends PokemonDm {
  ...
}
```

Use the custom element (defined globally):

```js
import '@bbva-web-components/pokemon-dm/pokemon-dm.js';
```

```html
<pokemon-dm ...>
  ...
</pokemon-dm>
```

### Description

![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

Este componente DM, se utiliza en un proyecto de Framework cells de BBVA en  el cual enlista varios pokemones Y sus evoluciones.Este comoponente se encarga del manejo de datos y extracción de datos de la API  de pokemones. Este esta directamiente viculado con dos componentes Ui uno para enlistar pokemones y otro para traer  las evoluciones de los pokemones seleccionados.

Example:

```html
  <pokemon-dm></pokemon-dm>
```

### Properties

- **name**: string = "Cells" (attribute: name)
    Description for property
