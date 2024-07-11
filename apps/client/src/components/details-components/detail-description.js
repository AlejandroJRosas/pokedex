class DetailDescription extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.description = this.getAttribute('description');
    this.weight = this.getAttribute('weight');
    this.height = this.getAttribute('height');
    this.type1 = this.getAttribute('type1');
    this.type2 = this.getAttribute('type2');
    this.image = this.getAttribute('image')
  }

  static get styles() {
    return /* css */ `
      :host {}
      .pokemon-info-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 4em;
        width: 40em;
        background: #00000022;
        padding: 2em 1em;
        margin: auto;
        text-align: center;
        border-radius: 5%;
      }

      .pokemon-info-container h3 {
        padding-bottom: 15px;
        padding-top: 15px;
      }

      .pokemon-info-container ul {
        list-style: none;
      }

      .pokemon-evolution-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .pokemon-evolution-container img {
        width: 100px;
        height: 100px;
        border: 1px solid black;
      }

      #flecha {
        font-size: 20px;
        color: red;
      }

      #flecha2 {
        font-size: 20px;
        color: red;
      }

      .pokemon-evolution-container img {
        width: 150px;
        height: 150px;
        border: 2px solid #333;
        border-radius: 50%;
        margin: 10px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      }


    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${DetailDescription.styles}</style>
    <section class="pokemon-info-container">
      <div>
        <h3>Descripción</h3>
        <p>
          ${this.description}
        </p>
      </div>

      <div>
        <h3>Tipos</h3>
        <ul>
          <li>${this.type1}</li>
          ${this.type2 ? `<li>${this.type2}</li>` : ''}
        </ul>
      </div>
      <!-- <div> -->
        <div>
          <h3>Altura</h3>
          <p>${this.height} m</p>
        </div>
        <div>
          <h3>Peso</h3>
          <p>${this.weight} kg</p>
        </div>
    </section>
    <section class="pokemon-evolution-container">
      <img
        alt="Bullbasaur"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
      />
      <i id="flecha2" class="fa-solid fa-arrow-left">&nbsp;</i>
      <img
        src="${this.image}" alt="Bullbasaur"
      />
    </section>`;
  }
}

customElements.define('detail-description', DetailDescription);
