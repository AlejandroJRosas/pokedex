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
      border: 1px solid #ccc;
      border-radius: 20px;
      padding: 25px;
      margin: 10px;
      display: inline-block;
      background-color: #f9f9f9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .card-image {
      text-align: center;
    }

    .card-image img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
      border: 5px solid #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .card-description {
      text-align: center;
    }

    .card-description h3 {
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      margin-top: 10px;
      color: #fff;
      text-decoration: none;
      background-color: #E17DC4;
      padding: 10px;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .card-description p {
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }

    @media (max-width: 600px) {
      .card {
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
