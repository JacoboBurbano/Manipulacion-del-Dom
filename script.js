const email = document.querySelector(".navbar-email")
const desktopMenuInteractive = document.querySelector(".desktop-menu")
const burgerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const carIcon = document.getElementById("icon_Car")
const asideDetail = document.querySelector(".product-detail")
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

let almacenarElectricosProductos = []
almacenarElectricosProductos.push({
    name : "Bike",
    price : 120,
    img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
almacenarElectricosProductos.push({
    name : "Pantalla",
    price : 320,
    img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
almacenarElectricosProductos.push({
    name : "Computador",
    price : 680,
    img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
function productosPedidos(almacenarProductos){
    for(const product of almacenarProductos){
        const divProductCard= document.createElement("div")
        divProductCard.classList.add("product-card")
        const imgProduct = document.createElement("img")
        imgProduct.setAttribute("src" , product.img)
        const divInfoProduct = document.createElement("div")
        divInfoProduct.classList.add("product-info")
        const divPriceName = document.createElement("div")
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price
        const productName = document.createElement("p")
        productName.innerText = product.name
        divPriceName.appendChild(productPrice)
        divPriceName.appendChild(productName)
        const figure = document.createElement("figure")
        const imgIcon = document.createElement("img")
        imgIcon.setAttribute("src","./icons/bt_add_to_cart.svg", "alt=''" )
        figure.appendChild(imgIcon)

        divProductCard.append(imgProduct, divInfoProduct, divPriceName)
        divInfoProduct.append(divPriceName, figure)

        containerCards.appendChild(divProductCard)
    }
}
productosPedidos(almacenarElectricosProductos)
