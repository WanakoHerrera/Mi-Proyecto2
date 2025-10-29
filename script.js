
const imgBurger = document.querySelector(".img-burger");
const burgerMenu = document.querySelector(".burger-menu");
const burgerTrue = document.querySelector(".burger-menu-true");
const x = document.querySelector(".x");

imgBurger.addEventListener("click",abrir);
x.addEventListener("click",cerrar)

function abrir(){
    burgerMenu.classList.add("burger-menu-true");
    burgerTrue.classList.remove("burger-menu");
}

function cerrar(){
    burgerMenu.classList.remove("burger-menu-true");
    burgerTrue.classList.add("burger-menu");
}