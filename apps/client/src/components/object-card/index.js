class ObjectCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.item = JSON.parse(this.getAttribute('item'));
  }

  static get styles() {
    return /* css */ `
      :host {}

      .object-card {
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
      
      .object-card img {
        object-fit: cover;
        width: 200px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        align-self: center;
        padding: 10px;
      }
      
      .object-info {
        padding: 0 1em 0.5em 1em;
      }
      
      .numero_objeto {
        margin-bottom: 1em;
        color: rgb(0, 0, 0, 0.4);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${ObjectCard.styles}</style>
    <div class="object-card">
      <div class="img-container">
        <img alt="object-card" src="${this.item.image}" />
      </div>
      <div class="object-info">
        <p class="numero_objeto">${this.item.id}</p>
        <p>${this.item.name}</p>
        <p>${this.item.category}</p>
      </div>
    </div>`;
  }
}

customElements.define('object-card', ObjectCard);
