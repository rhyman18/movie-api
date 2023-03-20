import './component/SearchBar.js';
import './component/Movie.js';
import data from './data/DataApi.js';

const app = () => {
  const searchElement = document.querySelector('search-bar');
  const movieElement = document.querySelector('movie-container');

  const onButtonSearchClicked = async () => {
    try {
      const result = await data.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (hasil) => {
    movieElement.movies = hasil;
  };

  const fallbackResult = (pesan) => {
    movieElement.renderError(pesan);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default app;
