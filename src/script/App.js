import './component/SearchBar.js';
import './component/Movie.js';
import data from './data/DataApi.js';

const app = () => {
  const searchElement = document.querySelector('search-bar');
  const movieElement = document.querySelector('movie-container');

  const onButtonSearchClicked = async () => {
    try {
      await renderLoading();

      const result = await data.searchMovie(searchElement.value);

      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (hasil) => {
    movieElement.movies = hasil;
  };

  const renderLoading = () => {
    movieElement.renderLoading();
  };

  const fallbackResult = (pesan) => {
    movieElement.renderError(pesan);
  };

  const debounce = (func, delay) => {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  // menambah event input
  searchElement.inputEvent = debounce(onButtonSearchClicked, 1300);
  searchElement.clickEvent = onButtonSearchClicked;
};

export default app;
