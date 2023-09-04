const bgconteudo = document.querySelector(".bg-conteudo");
const conteudo = document.querySelector(".conteudo");
const btn = document.querySelector(".slider-btn-container");
const regras = document.querySelector(".regras");
const regrasCheck = document.querySelector(".regras-check");
const checkBtn = document.querySelector(".check-btn");
const regrasCond = document.querySelector(".regras-cond");
const condBtn = document.querySelector(".cond-btn");
const fotoText = document.getElementById("fotos");
const homeText = document.getElementById("home");
const regraText = document.getElementById("regras");
console.log(fotoText);
function fotos() {
  btn.classList.remove("esconde");
  bgconteudo.classList.add("esconde");
  regras.classList.add("esconde");

  fotoText.classList.add("header-ativo");
  homeText.classList.remove("header-ativo");
  regraText.classList.remove("header-ativo");
}
function home() {
  conteudo.classList.remove("esconde");
  bgconteudo.classList.remove("esconde");
  btn.classList.add("esconde");
  regras.classList.add("esconde");

  fotoText.classList.remove("header-ativo");
  homeText.classList.add("header-ativo");
  regraText.classList.remove("header-ativo");
}
function regra() {
  regras.classList.remove("esconde");
  bgconteudo.classList.remove("esconde");
  conteudo.classList.add("esconde");
  btn.classList.add("esconde");

  fotoText.classList.remove("header-ativo");
  homeText.classList.remove("header-ativo");
  regraText.classList.add("header-ativo");
}

function regrasCheckIn() {
  regrasCheck.classList.remove("esconde");
  regrasCond.classList.add("esconde");
  checkBtn.classList.add("btn-ativo");
  condBtn.classList.remove("btn-ativo");
}
function regrasCondominio() {
  regrasCheck.classList.add("esconde");
  regrasCond.classList.remove("esconde");
  checkBtn.classList.remove("btn-ativo");
  condBtn.classList.add("btn-ativo");
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
