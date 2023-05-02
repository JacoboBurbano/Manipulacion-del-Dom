const email = document.querySelector(".navbar-email")
const desktopMenuInteractive = document.querySelector(".desktop-menu")


email.addEventListener('click', toggleMenu)

function toggleMenu() {
    desktopMenuInteractive.classList.toggle("inactive")
}