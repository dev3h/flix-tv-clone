const filmName = document.querySelectorAll("catalog__item card card__title a");
const filmCard = document.querySelectorAll(".catalog__item");
const filmSelect = document.querySelector(".catalog__select");
const filmOptions = filmSelect.options;
const filmRadio = document.querySelectorAll(".catalog-radio > span");
const searchItem = document.getElementById("header__form-input");
// filter
Array.from(filmRadio).forEach((element) => {
  element.addEventListener("click", function (e) {
    for (let i = 0; i < filmRadio.length; i++) {
      filmRadio[i].classList.remove("active");
    }
    this.classList.add("active");
  });
});
filmSelect.addEventListener("change", filmFilter);
function filmFilter() {
  let name_filter = filmOptions[filmSelect.selectedIndex].dataset.filter;

  Array.from(filmCard).forEach(function (element) {
    if (element.dataset.filmgenre === name_filter || name_filter === "all") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
// search
searchItem.addEventListener("keyup", searchFilm);
function searchFilm() {
  let valueItem = searchItem.value.toLowerCase();
  Array.from(filmCard).forEach((element) => {
    let nameFilm = element
      .querySelector(".card__title")
      .firstElementChild.textContent.toLowerCase();
    if (nameFilm.indexOf(valueItem) !== -1) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
  checkEmpty(filmCard);
}
function checkEmpty(element) {
  let count = 0;
  for (let i = 0; i < element.length; i++) {
    if (element[i].style.display === "block") {
      count++;
    }
  }
  if (count === 0) {
    document.querySelector(".not-found-film").textContent = "can not found";
  } else {
    document.querySelector(".not-found-film").textContent = "";
  }
}
