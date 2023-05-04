const email = document.querySelector(".navbar-email")
const desktopMenuInteractive = document.querySelector(".desktop-menu")
const burgerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const carIcon = document.getElementById("icon_Car")
const asideDetail = document.querySelector(".product-detail")


email.addEventListener('click', toggleMenu)

function toggleMenu() {
    
    if(desktopMenuInteractive.classList.contains("inactive")){
        if(!asideDetail.classList.contains("inactive")){
            asideDetail.classList.add("inactive")
        }
            
    }
    if(!desktopMenuInteractive.classList.contains("inactive")){
        if(!asideDetail.classList.contains("inactive")){
            desktopMenuInteractive.classList.remove("inactive")
        }
    }
    desktopMenuInteractive.classList.toggle("inactive")
}

burgerIcon.addEventListener("click" , toggleMobileMenu)

function toggleMobileMenu() {
    if(mobileMenu.getAttribute("class") === "mobile-menu inactive"){
        if (asideDetail.getAttribute("class") === "product-detail") {
            asideDetail.classList.add("inactive")
        }
    }
    mobileMenu.classList.toggle("inactive")
}

carIcon.addEventListener("click" , toggleProductDetail)

function toggleProductDetail() {
        if(asideDetail.getAttribute("class") === "product-detail"){
            if(mobileMenu.getAttribute("class") === "mobile-menu"){
                mobileMenu.classList.add("inactive")
            }
        }
        asideDetail.classList.toggle("inactive")
        if(!desktopMenuInteractive.classList.contains("inactive")){
            if(!asideDetail.classList.contains("inactive"))
                desktopMenuInteractive.add("inactive")
            
        }
        
}