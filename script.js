const email = document.querySelector(".navbar-email")
const desktopMenuInteractive = document.querySelector(".desktop-menu")
const burgerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")


email.addEventListener('click', toggleMenu)

function toggleMenu() {
    desktopMenuInteractive.classList.toggle("inactive")
}

burgerIcon.addEventListener("click" , toggleMobileMenu)

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
}