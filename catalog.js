const basket = document.querySelector('.basket');
const modalbasket = document.querySelector('.modal-basket')
const button = document.querySelector(".item-button")
const itemhover = document.querySelector(".item")




document.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("item")) {
    console.log(e.target);
    e.target.lastElementChild.style.display = "block";
    }
    if (e.relatedTarget.classList.contains("item")) {
    e.relatedTarget.lastElementChild.style.display = "none";
    }
   });

  


   
   

