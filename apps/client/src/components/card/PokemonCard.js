class PokemonCard extends HTMLElement {
  BASE_URL = 'http://127.0.0.1:5500/apps/client/src/pages/detail-page/index.html'

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.pokemon = JSON.parse(this.getAttribute('pokemon'));
  }

  static get styles() {
    return /* css */ `
    .pokemon-card {
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 20px;
      padding: 25px;
      margin: 10px;
      display: inline-block;
      background-color: #f2f2f2;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .img-container {
      text-align: center;
    }

    .image {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
      border: 5px solid #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .pokemon-info {
      text-align: center;
    }

    .numero_pokemon {
      font-weight: bold;
      color: #333;
      font-size: 18px;
    }

    .tipos {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }

    .tipos p {
      margin: 5px;
      padding: 5px;
      background-color: #81F4E1;
      color: #333;
      border-radius: 5px;
    }

    a {
      display: block;
      text-align: center;
      margin-top: 10px;
      color: #fff;
      text-decoration: none;
      background-color: #56CBF9;
      padding: 10px;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    a:hover {
      background-color: #56CBF9;
    }

    @media (max-width: 600px) {
      .pokemon-card {
        width: 100%;
      }
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
            <a href="${this.BASE_URL}?id=${this.pokemon.id}" target="_blank">Ir a detalle</a>
          </div>
        </div>
    `;
  }
}

customElements.define('pokemon-card', PokemonCard);
