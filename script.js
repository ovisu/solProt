const bgconteudo = document.querySelector(".bg-conteudo");
const conteudo = document.querySelector(".conteudo");
const btn = document.querySelector(".slider-btn-container");
const regras = document.querySelector(".regras");

function fotos() {
  btn.classList.remove("esconde");
  bgconteudo.classList.add("esconde");
  regras.classList.add("esconde");
}
function home() {
  conteudo.classList.remove("esconde");
  bgconteudo.classList.remove("esconde");
  btn.classList.add("esconde");
  regras.classList.add("esconde");
}
function regra() {
  regras.classList.remove("esconde");
  bgconteudo.classList.remove("esconde");
  conteudo.classList.add("esconde");
  btn.classList.add("esconde");
}

const slide = document.querySelector(".slide");
const slideArray = 6;
let slideIndex = 1;
moveSlide();

function moveSlide() {
  //impedindo q clicar mt rapido aumente o index alem do esperado e quebre o carousel
  if (slideIndex > slideArray || slideIndex < 0) {
    slideIndex = 1;
  }
  slide.style.transform = `translateX(-${slideIndex * 100}%)`;
}
function moveHandler(direction) {
  slide.style.transition = `transform 450ms ease-in-out`;
  direction !== "right" ? (slideIndex -= 1) : (slideIndex += 1);
  moveSlide();
}

document.querySelector(".slider-btn-right").addEventListener("click", () => {
  moveHandler("right");
  console.log(slideArray);
});
document.querySelector(".slider-btn-left").addEventListener("click", () => {
  moveHandler();
  console.log(slideArray);
});

slide.addEventListener("transitionend", () => {
  if (slideIndex === 0) {
    slide.style.transition = "none";
    slideIndex = slideArray - 2;
    moveSlide();
  }
  if (slideIndex === slideArray - 1) {
    slideIndex = 1;
    slide.style.transition = "none";
    moveSlide();
  }
});

imagens = document.querySelector(
  ".slide"
).innerHTML = `<img src="./img/sol4.jfif" alt="">
<img src="./img/sol.jfif" alt="">
<img src="./img/sol2.jfif" alt="">
<img src="./img/sol3.jfif" alt="">
<img src="./img/sol4.jfif" alt="">
<img src="./img/sol.jfif" alt="">`;
