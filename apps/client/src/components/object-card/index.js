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
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 20px;
      padding: 25px;
      margin: 10px;
      display: inline-block;
      background-color: #f9f9f9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .img-container {
      text-align: center;
    }

    .object-card img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
      border: 5px solid #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .object-info {
      text-align: center;
    }

    .numero_objeto {
      font-weight: bold;
      color: #333;
      font-size: 18px;
    }

    @media (max-width: 600px) {
      .object-card {
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
