const modalclose = document.querySelector(".modal-close");
const modalfeedback = document.querySelector(".modal-feedback");
const feedbackbutton = document.querySelector(".feedback-button");
const assortment = document.querySelector(".modal-assortment");
const catalog = document.querySelector(".catalog");
const modalsearch = document.querySelector(".modal-search");
const search = document.querySelector(".search");
const input = document.querySelector(".input");
const popup = document.querySelector(".modal-login");
const login = popup.querySelector("[name=login]");
// slide
const firstSlide = document.querySelector(".first-slide");
const secondSlide = document.querySelector(".second-slide");
const thirdSlide = document.querySelector(".third-slide");
const slides = document.querySelectorAll(".slider-item");
console.log(slides);

const background = document.querySelector(".site-wrapper");

/*buttons*/
const buttonFirstSlide = document.querySelector(".first-slide-btn");
const buttonSecondSlide = document.querySelector(".second-slide-btn");
const buttonThirdSlide = document.querySelector(".third-slide-btn");

const buttons = document.querySelectorAll(".slide-btn");

/* SLIDER */
buttonFirstSlide.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("current");
  }
  this.classList.add("current");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slide-current");
  }
  firstSlide.classList.add("slide-current");
  background.style.backgroundColor = "rgb(132, 157, 143)"
});

buttonSecondSlide.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("current");
  }
  this.classList.add("current");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slide-current");
  }
  secondSlide.classList.add("slide-current");
  background.style.backgroundColor = "#8996a6"
});

buttonThirdSlide.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("current");
  }
  this.classList.add("current");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slide-current");
  }
  thirdSlide.classList.add("slide-current");
  background.style.backgroundColor = "#9d8b84"
});

/* MODAL */
input.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  login.focus();
  console.log("Клик по кнопке вход");
});

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalsearch.classList.toggle("modal-show");
});

catalog.addEventListener("click", function (evt) {
  evt.preventDefault();
  assortment.classList.toggle("modal-show");
});

feedbackbutton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalfeedback.classList.toggle("modal-show");
});

modalclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalfeedback.classList.remove("modal-show");
});
