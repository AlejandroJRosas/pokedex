import './index.css';
import javascriptLogo from './assets/javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './services/counter.js';
import './components/CapacitorSMD';

document.querySelector('#app').innerHTML = `
  <div>
    <capacitor-smd></capacitor-smd>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
