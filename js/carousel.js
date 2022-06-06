const sliderContainers = document.querySelectorAll(".slider");
const nextBtns = document.querySelectorAll(".section__nav--next");
const prevBtns = document.querySelectorAll(".section__nav--prev");
for (let nextBtn of nextBtns) {
  nextBtn.addEventListener("click", function () {
    next();
  });
}
for (let prevBtn of prevBtns) {
  prevBtn.addEventListener("click", function () {
    prev();
  });
}
for (let sliderContainer of sliderContainers) {
  const sliderInner = sliderContainer.querySelector(".slider--inner");
  const sliderItems = sliderInner.querySelectorAll(".slider-item");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const sliderItemCount = sliderItems.length;
  sliderContainer.style.width = `${sliderItemWidth * sliderItemCount}px`;
  let index = 0;
  function next() {
    if (index < sliderItemCount - 1) {
      index++;
    } else {
      index = 0;
    }
    sliderInner.style.transform = `translateX(-${index * sliderItemWidth}px)`;
  }
  function prev() {
    if (index === 0) {
      index = sliderItemCount - 1;
    } else {
      index--;
    }
    sliderInner.style.transform = `translateX(-${index * sliderItemWidth}px)`;
  }

  setInterval(() => {
    next();
  }, 3 * 1000);
}
