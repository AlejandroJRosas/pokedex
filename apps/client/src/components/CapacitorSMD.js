class CapacitorSMD extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /* css */ `
      .container {
        --color: blue;
        --pin-color: red;
        background: var(--color, #e5c2a2);
        border-top: 3px solid var(--pin-color);
        border-bottom: 3px solid var(--pin-color);
        width: 15vw;
        height: 20vh;
        display: flex;
        align-items: center;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${CapacitorSMD.styles}</style>
    <div class="container">
      <h1>Custom Component</h1>
    </div>`;
  }
}

customElements.define('capacitor-smd', CapacitorSMD);
