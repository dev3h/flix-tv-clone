import { films } from "../data/index.js";

class FilmCard extends HTMLElement {
   
    // map the films and add them to innerHTML
    connectedCallback() {
        const film = films.map((film) => {
            return `
            <div
                  class="catalog__item"
                  data-filmGenre=${film?.category}
                  data-FilmYear=${film?.year}
                >
                  <div class="card">
                    <a href="./detail.html" class="card__cover">
                      <img src="./assets/images/catalog/catalog1.jpg" alt="" />
                      <i class="fal fa-play-circle"></i>
                    </a>
                    <button type="button" class="card__add">
                      <i class="fal fa-bookmark"></i>
                    </button>
                    <button type="button" class="card__rating">
                      <i class="fal fa-star"></i>
                      9.1
                    </button>
                    <h3 class="card__title">
                      <a href="#">${film?.title}</a>
                    </h3>
                    <ul class="card__list">
                      <li>Free</li>
                      <li>Action</li>
                      <li>2021</li>
                    </ul>
                  </div>
                </div>
            `;
        });
        this.innerHTML = film.join("");
    }
}

customElements.define("film-card", FilmCard);