const email = document.querySelector(".navbar-email")
const desktopMenuInteractive = document.querySelector(".desktop-menu")
const burgerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const carIcon = document.getElementById("icon_Car")
const asideDetail = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".product-card")
const containerCards = document.querySelector(".cards-container")

email.addEventListener('click', toggleMenu)

function toggleMenu() {
    mobileMenu.classList.add("inactive")
    asideDetail.classList.add("inactive")
    desktopMenuInteractive.classList.toggle("inactive")
}

burgerIcon.addEventListener("click" , toggleMobileMenu)

function toggleMobileMenu() {
    asideDetail.classList.add("inactive")
    desktopMenuInteractive.classList.add("inactive")
    mobileMenu.classList.toggle("inactive")
}

carIcon.addEventListener("click" , toggleProductDetail)

function toggleProductDetail() {
    desktopMenuInteractive.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    asideDetail.classList.toggle("inactive")
}

let almacenarProductos = []
almacenarProductos.push({
    name : "Bike",
    price : 120,
    img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
almacenarProductos.push({
    name : "Pantalla",
    price : 320,
    img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
almacenarProductos.push({
    name : "Computador",
    price : 680,
    img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})