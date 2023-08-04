const conteudo = document.querySelector(".bg-conteudo");
const btn = document.querySelector(".slider-btn-container");

function esconde() {
  conteudo.classList.toggle("esconde");
  btn.classList.toggle("esconde");
}

const slide = document.querySelector(".slide");
const slideArray = document.querySelectorAll(".slide img");
let slideIndex = 1;
moveSlide();

function moveSlide() {
  slide.style.transform = `translateX(-${slideIndex * 100}%)`;
}
function moveHandler(direction) {
  slide.style.transition = `transform 450ms ease-in-out`;
  direction !== "right" ? (slideIndex -= 1) : (slideIndex += 1);
  moveSlide();
}

document.querySelector(".slider-btn-right").addEventListener("click", () => {
  moveHandler("right");
});
document.querySelector(".slider-btn-left").addEventListener("click", () => {
  moveHandler();
  console.log(slideIndex);
});

slide.addEventListener("transitionend", () => {
  if (slideIndex === 0) {
    slide.style.transition = "none";
    slideIndex = slideArray.length - 2;
    moveSlide();
  }
  if (slideIndex === slideArray.length - 1) {
    slideIndex = 1;
    slide.style.transition = "none";
    moveSlide();
  }
});
console.log("vaitomarnocu");
