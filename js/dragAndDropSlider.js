let sliders = document.querySelectorAll(".slider");
/* keep track of user's mouse down and up */
let isPressedDown = false;
// x horizontal space of cursor from inner slider
let cursorXSpace;
for (let slider of sliders) {
    let innerSlider = slider.querySelector(".slider--inner");
    
  slider.addEventListener("mousedown", (e) => {
    isPressedDown = true;
    cursorXSpace = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "grabbing";
  });
  slider.addEventListener("mouseenter", () => {
    slider.style.cursor = "grab";
  });
  slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
  });
  window.addEventListener("mouseup", () => {
    isPressedDown = false;
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isPressedDown) return;
    e.preventDefault();
    innerSlider.style.left = `${e.offsetX - cursorXSpace}px`;
    console.log(`xspace: ${cursorXSpace}, style: ${e.offsetX - cursorXSpace}`);
    checkBoundary();
  });
  function checkBoundary() {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();
    if (parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = 0;
    } else if (inner.right < outer.right) {
      innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
  }
}


