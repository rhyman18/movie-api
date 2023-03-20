/* eslint-disable prefer-promise-reject-errors */
class data {
  static searchMovie(key) {
    const filter = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;
    if (!key.length) {
      return Promise.reject(`Harap masukan judul terlebih dahulu.`);
    } else if (!key.match(filter)) {
      return fetch(`https://api.tvmaze.com/search/shows?q=${key}`)
          .then((res) => {
            return res.json();
          })
          .then((resJson) => {
            if (resJson.length) {
              return Promise.resolve(resJson);
            } else {
              return Promise.reject(`Kata kunci : ${key}<br>Tidak dapat ditemukan.`);
            }
          });
    } else {
      return Promise.reject(`Dilarang menggunakan simbol.`);
    }
  }
}

export default data;
