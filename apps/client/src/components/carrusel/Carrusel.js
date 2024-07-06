class Carrusel extends HTMLElement {
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
        *,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ece1d5;
  text-align: center;
}

.slider-box {
  width: 50em;
  margin: 3em auto 0;
  height: auto;
  overflow: hidden;
}

.slider-box ul {
  display: flex;
  padding: 0;
  width: 1700%;
  animation: slide 119s infinite;
}

.slider-box ul li {
  list-style: none;
  width: 100%;
  position: relative;
  transition: all 7s alternate ease-in-out;
}

.slider-box img {
  width: 100%;
}

@keyframes slide {
  0%,
  5% {
    margin-left: 0;
  }

  6%,
  11% {
    margin-left: -100%;
  }

  12%,
  18% {
    margin-left: -200%;
  }

  19%,
  24% {
    margin-left: -300%;
  }

  25%,
  29% {
    margin-left: -400%;
  }

  30%,
  35% {
    margin-left: -500%;
  }

  36%,
  41% {
    margin-left: -600%;
  }

  42%,
  47% {
    margin-left: -700%;
  }

  48%,
  53% {
    margin-left: -800%;
  }

  54%,
  59% {
    margin-left: -900%;
  }

  60%,
  65% {
    margin-left: -1000%;
  }

  66%,
  71% {
    margin-left: -1100%;
  }

  72%,
  77% {
    margin-left: -1200%;
  }

  78%,
  83% {
    margin-left: -1300%;
  }

  84%,
  88% {
    margin-left: -1400%;
  }

  89%,
  94% {
    margin-left: -1500%;
  }

  95%,
  100% {
    margin-left: -1600%;
  }
}

@media (max-width: 768px) {
  body {
    padding: 2em;
    text-align: center;
  }

  .slider-box {
    width: 100%;
  }
}

      </style>

        <div class="slider-box">
        <ul>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/1.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/2.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/3.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/4.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/5.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/6.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/7.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/8.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/9.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/10.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/11.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/12.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/13.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/14.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/15.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/16.png"
            />
          </li>
          <li>
            <img
              alt="Ods_foto"
              src="/apps/client/src/pages/carrusel/img/17.png"
            />
          </li>
        </ul>
      </div>

    `;
  }
}

customElements.define('carrusel-component', Carrusel);
