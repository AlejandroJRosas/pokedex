class PokemonCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.pokemon = JSON.parse(this.getAttribute('pokemon'));
  }

  static get styles() {
    return /* css */ `
    .catalogo-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3em 1em;
      padding: 1em;
      margin: 2em;
    }

    .pokemon-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .img-container {
      display: flex;
      justify-content: center;
      background: #dfdfdf;
      margin-bottom: 0.5em;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .pokemon-card img {
      width: 200px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      align-self: center;
      padding: 10px;
    }

    .numero_pokemon {
      margin-bottom: 1em;
      color: rgb(0, 0, 0, 0.4);
    }

    .pokemon-info {
      padding: 1em;
    }

    .tipos {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 0.5em;
    }

    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${PokemonCard.styles}</style>
        <div class="pokemon-card">
          <div class="img-container">
            <img class="image" src="${this.pokemon.image}" alt="${this.pokemon.name}">
          </div>
          <div class="pokemon-info">
            <p class="numero_pokemon">${this.pokemon.id}</p>
            <p>${this.pokemon.name}</p>
            <div class="tipos">
              <p>${this.pokemon.type[0]}</p>
              <p>${this.pokemon.type[1]}</p>
            </div>
          </div>
        </div>
    `;
  }
}

customElements.define('pokemon-card', PokemonCard);
