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
const buttonFirstSlide = document.querySelector(".first-slide-btn");
const buttonSecondSlide = document.querySelector(".second-slide-btn");
const buttonThirdSlide = document.querySelector(".third-slide-btn");
const firstSlide = document.querySelector(".first-slide");
const secondSlide = document.querySelector(".second-slide");
const thirdSlide = document.querySelector(".third-slide");
const background = document.querySelector(".site-wrapper");

/* SLIDER */
buttonFirstSlide.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonFirstSlide.classList.toggle("current");
  buttonSecondSlide.classList.remove("current");
  buttonThirdSlide.classList.remove("current");
  firstSlide.classList.toggle("slide-current");
  secondSlide.classList.remove("slide-current");
  thirdSlide.classList.remove("slide-current");
  background.classList.toggle("site-wrapper-1");
  background.classList.remove("site-wrapper-2");
  background.classList.remove("site-wrapper-3");
});

buttonSecondSlide.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonSecondSlide.classList.toggle("current");
  buttonFirstSlide.classList.remove("current");
  buttonThirdSlide.classList.remove("current");
  secondSlide.classList.toggle("slide-current");
  firstSlide.classList.remove("slide-current");
  thirdSlide.classList.remove("slide-current");
  background.classList.toggle("site-wrapper-2");
  background.classList.remove("site-wrapper-1");
  background.classList.remove("site-wrapper-3");
});

buttonThirdSlide.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonThirdSlide.classList.toggle("current");
  buttonFirstSlide.classList.remove("current");
  buttonSecondSlide.classList.remove("current");
  thirdSlide.classList.toggle("slide-current");
  firstSlide.classList.remove("slide-current");
  secondSlide.classList.remove("slide-current");
  background.classList.toggle("site-wrapper-3");
  background.classList.remove("site-wrapper-2");
  background.classList.remove("site-wrapper-1");
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
