class PokemonCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.pokemon = JSON.parse(this.getAttribute('pokemon'));
  }

  static get styles() {
    return /* css */ `
    .card {
      width: 300px;
      background-color: #f5f5f5;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      padding: 20px;
      text-align: center;
      position: relative;
    }

    .card img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      margin-bottom: 10px;
    }

    .card .pokedex-number {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 14px;
      color: #888;
    }

    .card h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .card p {
      font-size: 16px;
      color: #888;
      margin-bottom: 10px;
    }

    .card .type {
      display: inline-block;
      padding: 5px 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
      font-size: 14px;
      color: #555;
      margin-bottom: 10px;
    }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>${PokemonCard.styles}</style>

      <div class="card">
        <img class="image" src="${this.pokemon.image}" alt="${this.pokemon.name}">
        <h2>${this.pokemon.name}</h2>
        <p>Número de Pokédex: ${this.pokemon.pokedexNumber}</p>
        <div class="type">Tipo: ${this.pokemon.type[1]}</div>
      </div>
    `;
  }
}

customElements.define('pokemon-card', PokemonCard);
