import Logo from './logo.png';

class SearchBar extends HTMLElement {
  connectedCallbak() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
<div class="my-logo">
  <img class="img-fluid" src="${Logo}" alt="Movies Apps">
</div>
<div class="d-flex form-control py-3">
  <input class="form-control me-2" id="searchElement" type="search" placeholder="Judul Movie" aria-label="Search">
  <button class="btn btn-outline-secondary my-btn px-md-5" id="searchButtonElement" type="submit">Pencarian</button>
</div>
    `;

    this.querySelector('#searchButtonElement')
        .addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
