class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
<nav class="navbar navbar-expand-lg my-bgcolor">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Find my Movie Apps</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-light"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="https://github.com/rhyman18/movie-api">Github</a>
        <a class="nav-link" href="https://www.linkedin.com/in/rhyman18/">Linkedin</a>
      </div>
    </div>
  </div>
</nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
