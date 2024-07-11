class DetailStats extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.hp = this.getAttribute('hp');
    this.attack = this.getAttribute('attack');
    this.defense = this.getAttribute('defense');
    this.specialAttack = this.getAttribute('specialAttack');
    this.specialDefense = this.getAttribute('specialDefense');
    this.speed = this.getAttribute('speed');
  }

  static get styles() {
    return /* css */ `
      :host {}
      .pokemon-stats-container {
        position: relative;
        width: 30em;
        background: #00000022;
        padding: 0 1em;
        margin: 3em auto;
        font-size: 1.3em;
        border-radius: 5%;
      }

      .pokemon-stats-container .skill {
        margin: 2em 0;
      }

      .pokemon-stats-container .skill p {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      .pokemon-stats-container .skill .progress {
        position: relative;
        width: 100%;
        height: 0.8em;
        background: #999999;
        border-radius: 0.5em;
        overflow: hidden;
        margin: 0.5em 0;
      }

      .pokemon-stats-container .skill .progress::before {
        content: '';
        position: absolute;
        width: var(--wth);
        height: 100%;
        background: #04e762;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>${DetailStats.styles}</style>
    <section class="pokemon-stats-container">
      <div class="skill">
        <p>PS<span>${this.hp}</span></p>
        <div class="progress" style="--wth: ${this.hp}%"></div>
      </div>
      <div class="skill">
        <p>ATTACK<span>${this.attack}</span></p>
        <div class="progress" style="--wth: ${this.attack}%"></div>
      </div>
      <div class="skill">
        <p>SPECIAL ATTACK<span>${this.specialAttack}</span></p>
        <div class="progress" style="--wth: ${this.specialAttack}%"></div>
      </div>
      <div class="skill">
        <p>DEFENSE<span>${this.defense}</span></p>
        <div class="progress" style="--wth: ${this.defense}%"></div>
      </div>
      <div class="skill">
        <p>SPECIAL DEFENSE<span>${this.specialDefense}</span></p>
        <div class="progress" style="--wth: ${this.specialDefense}%"></div>
      </div>
      <div class="skill">
        <p>SPEED<span>${this.speed}</span></p>
        <div class="progress" style="--wth: ${this.speed}%"></div>
      </div>
    </section>`;
  }
}

customElements.define('detail-stats', DetailStats);
