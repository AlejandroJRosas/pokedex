class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>
        .navbar {
          display: flex;
          justify-content: space-between;
          background-color: #dde0ff;
          padding: 1rem;
          border-radius: 5px;
        }

        .navbar-item {
          margin-right: 1rem;
        }
      </style>
      <nav class="navbar">
        <div class="navbar-item">Home</div>
        <div class="navbar-item">Test</div>
        <div class="navbar-item">About</div>
      </nav>
    `;
  }
}

customElements.define('navbar-component', Navbar);
