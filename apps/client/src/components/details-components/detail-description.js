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
      <section class="pokemon-container">
        <img
          alt="Imagen del Pokemon"
          src="${this.image}"
        />
        <div class="name-container">
          <span>${this.name}</span>
          <span>Numero: ${this.id}</span>
        </div>
        <audio controls>
          <source
            type="audio/mp3"
            src="${this.cry}"
          />
        </audio>
      </section>`;
  }
}

customElements.define('detail-heading', DetailHeading);
