import './MovieList.js';

class Movie extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
<div class="col">
  <div class="card text-center">
    <div class="card-header">Selamat Datang</div>
    <div class="card-body">
      <h5 class="card-title">Find my Movie Apps</h5>
      <p class="card-text">Adalah Aplikasi yang dibuat untuk mencari Info lengkap Movie yang anda suka, dibangun dengan menggukanan Api dari Maze TV.<br>
      Untuk menggunakan aplikasi ini, langsung saja ketik Judul movie yang ingin di cari di atas.</p>
    </div>
  </div>
</div>
    `;
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = '';

    this._movies.forEach((movie) => {
      if (movie.show.image) {
        const movieList = document.createElement('movie-list');
        movieList.classList = 'col-lg-6 animate__animated animate__backInUp';
        movieList.movie = movie;
        this.appendChild(movieList);
      }
    });
  }

  renderError(message) {
    this.innerHTML = `
<div class="col animate__animated animate__shakeX">
  <div class="card text-center">
    <div class="card-body py-4">
      <h5 class="card-title mb-3">Peringatan</h5>
      <p class="card-text">${message}</p>
    </div>
  </div>
</div>
    `;
  }

  // add render loadings
  renderLoading() {
    this.innerHTML = `
<div class="col">
  <div class="card text-center">
    <div class="card-body py-4">
      <h5 class="card-title mb-3">Fetching data</h5>
      <p class="card-text d-flex justify-content-center">
        <div class="spinner-grow text-secondary" style="width: 4rem; height: 4rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </p>
    </div>
  </div>
</div>
    `;
  }
}

customElements.define('movie-container', Movie);
