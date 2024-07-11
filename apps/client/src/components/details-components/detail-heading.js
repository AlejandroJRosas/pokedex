class DetailHeading extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.image = this.getAttribute('image');
    this.name = this.getAttribute('name');
    this.id = this.getAttribute('id');
    this.cry = this.getAttribute('cry');
  }

  static get styles() {
    return /* css */ `
      :host {}
      .pokemon-container {
        display: flex;
        flex-direction: column;
        border: 2px solid #000000;
        margin-left: 2em;
        align-items: center;
        border-radius: 5%;
        background-color: white;
      }

      .pokemon-container img {
        padding: 1em;
        width: 20em;
        margin: 1em 0 1em 0;
      }

      .pokemon-container audio {
        margin: 1em;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${DetailHeading.styles}</style>
    <section class="pokemon-info-container">
      <div>
        <h3>Descripción</h3>
        <p>${this.description}</p>
      </div>

      <div>
        <h3>Tipos</h3>
        <ul>
          <li>${this.type[0]}</li>
          <li>${this.type[1]}</li>
        </ul>
      </div>
      <div>
        <h3>Altura</h3>
        <p>${this.height}</p>
        <h3>Peso</h3>
        <p>${this.weigth}</p>
      </div>
      <div>
        <h3>Debilidades</h3>
        <ul>
          <li>Fuego</li>
          <li>Psíquico</li>
        </ul>
      </div>
    </section>`;
  }
}

customElements.define('detail-heading', DetailHeading);
