const basket = document.querySelector('.basket');
const modalbasket = document.querySelector('.modal-basket')

basket.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalbasket.classList.toggle('modal-show');
});