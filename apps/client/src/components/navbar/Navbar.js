class Navbar extends HTMLElement {
  BASE_URL = 'http://127.0.0.1:5500';

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
          align-items: center;
          justify-content: space-around;
          background-color: #333;
          margin: 0;
          top: 0;
          left: 0;
          width: 100vw;
          z-index: 1000;
          position: relative;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px 20px;
        }

        .social-media {
          display: flex;
          align-items: center;
          gap: 2.5em;
          padding-right: 2.5em;
        }

        .social-media .social-icon {
          color: white;
          font-size: 24px;
          text-decoration: none;
          transition: color 0.3s;
        }

        .social-media .social-icon:hover {
          color: #f55d3e;
        }

        .navbar-logo img {
          height: 40px;
          margin-right: 20px;
        }

        .navbar-menu {
          list-style: none;
          display: flex;
          align-items: center;
          margin: 0;
          padding: 0;
        }

        .navbar-menu li {
          margin-right: 10px;
        }

        .navbar-menu a {
          text-decoration: none;
          color: white;
          padding: 8px 16px;
          border-radius: 4px;
          transition: background-color 0.3s;
          transition: color 0.3s;
        }

        .navbar-menu a:hover {
          background-color: #575757;
          color: #f55d3e;
        }
      </style>

      <header>
      <nav class="navbar">
        <div class="navbar-container">
          <a class="navbar-logo" href="https://pokeapi.co/" target="_blank">
            <img alt="Logo" src="../../components/navbar/imagenes/logo.png" />
          </a>
          <ul class="navbar-menu">
            <li><a href="${this.BASE_URL}/apps/client/src/pages/catalogo-page">Home</a></li>
            <li><a href="${this.BASE_URL}/apps/client/src/pages/objects-page">Objetos</a></li>
            <li>
              <a href="${this.BASE_URL}/apps/client/src/pages/integrantes-page">Integrantes</a>
            </li>
            <li>
              <a href="${this.BASE_URL}/apps/client/src/pages/form-page">Contacto</a>
            </li>
          </ul>
        </div>
        <div class="social-media">
          <a class="social-icon" href="https://www.youtube.com" target="_blank">
            <i class="fab fa-youtube"></i>
          </a>
          <a
            class="social-icon"
            href="https://www.facebook.com"
            target="_blank"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a class="social-icon" href="https://www.twitter.com" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a
            class="social-icon"
            href="https://www.instagram.com"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </nav>
    </header>

    `;
  }
}

customElements.define('navbar-component', Navbar);
