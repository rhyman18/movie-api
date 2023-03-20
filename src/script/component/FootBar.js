class FootBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="container-fluid d-flex justify-content-center py-3 my-bgcolor">Dibuat Oleh: Ari Budiman | 2023</div>`;
  }
}

customElements.define('foot-bar', FootBar);
