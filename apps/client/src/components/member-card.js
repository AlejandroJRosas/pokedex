class MemberCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.image = this.getAttribute('image');
    this.name = this.getAttribute('name');
    this.description = this.getAttribute('description');
  }

  static get styles() {
    return /* css */ `
      :host {}
      .card {
        width: 300px;
        margin: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
      }

      .card-image img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .card-description {
        padding: 10px;
      }

      .card-description h3 {
        font-size: 20px;
        margin-bottom: 5px;
      }

      .card-description p {
        font-size: 16px;
        line-height: 1.5;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${MemberCard.styles}</style>
      <div class="card">
        <div class="card-image">
          <img
            src="${this.image}"
            alt="${this.name}"
          />
        </div>
        <div class="card-description">
          <h3>${this.name}</h3>
          <p>${this.description}</p>
        </div>
      </div>`;
  }
}

customElements.define('member-card', MemberCard);
