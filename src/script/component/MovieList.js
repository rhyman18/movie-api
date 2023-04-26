class MovieList extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  stripHtml(dirtyString) {
    const doc = new DOMParser().parseFromString(dirtyString, 'text/html');
    return doc.body.textContent || '';
  }

  render() {
    const desc = (this._movie.show.summary != null) ? this._movie.show.summary : 'Lupa ditulis.';
    const rate = (this._movie.show.rating.average != null) ? this._movie.show.rating.average : 'No Rating';
    const tamat = (this._movie.show.ended != null) ? `| Tamat : ${this._movie.show.ended}` : '';
    const genres = (this._movie.show.genres.length) ? this._movie.show.genres : 'Movie';

    this.innerHTML = `
<div class="card mb-3 text-md-start text-center">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${this._movie.show.image.medium}" class="img-fluid rounded-start" alt="${this._movie.show.name}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${this._movie.show.name}</h5>
        <p class="card-text my-text mb-1">${this.stripHtml(desc)}</p>
        <p class="card-text">
          <small class="text-muted d-flex flex-column">
            <span>Status: ${this._movie.show.status}</span>
            <span>Rating: ${rate}</span>
            <span>Language: ${this._movie.show.language}</span>
            <span>Genre: ${genres}</span>
            <span>Rilis : ${this._movie.show.premiered} ${tamat}</span>
          </small>
        </p>
        <a href="${this._movie.show.url}" class="btn btn-primary">Lihat Detail</a>
      </div>
    </div>
  </div>
</div>
    `;
  }
}

customElements.define('movie-list', MovieList);
