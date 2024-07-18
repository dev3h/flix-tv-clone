import { films } from "../data/index.js";

class FilmCard extends HTMLElement {
   
    // map the films and add them to innerHTML
    async connectedCallback() {
      const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '348fa93ebamsh5392cfeb2a8990dp1188c3jsnb722fd52dfd8',
          'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      };
      const getAllFilms = async () => {
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          return result
        } catch (error) {
          console.error(error);
        }
      }
      let filmsData = await getAllFilms();
      if(filmsData?.message) {
        filmsData = films
      }
      const film = filmsData?.map((film) => {
          return `
          <div
                class="catalog__item"
                data-filmGenre=${film?.genre}
                data-FilmYear=${film?.year}
              >
                <div class="card">
                  <a href="./detail.html?id=${film?.id}" class="card__cover">
                    <img src=${film?.image} alt="" loading="lazy" />
                    <i class="fal fa-play-circle"></i>
                  </a>
                  <button type="button" class="card__add">
                    <i class="fal fa-bookmark"></i>
                  </button>
                  <button type="button" class="card__rating">
                    <i class="fal fa-star"></i>
                    ${film?.rating}
                  </button>
                  <h3 class="card__title">
                    <a href="#">${film?.title}</a>
                  </h3>
                  <ul class="card__list">
                    <li>Free</li>
                    <li>${film?.genre?.[0]}</li>
                    <li>${film?.year}</li>
                  </ul>
                </div>
              </div>
          `;
      });
      this.innerHTML = film.join("");
    }
}

customElements.define("film-card", FilmCard);