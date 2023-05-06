const btnHamburguer = document.querySelector('.btn-hamburguer')
const btnClose = document.querySelector('.btn-close')
const menuMobile = document.querySelector('.menu')

btnHamburguer.addEventListener("click", function() {
    btnHamburguer.classList.add('hidden')
    btnClose.classList.remove('hidden')
    menuMobile.id = ""
})

btnClose.addEventListener("click", function() {
    btnClose.classList.add('hidden')
    btnHamburguer.classList.remove('hidden')
    menuMobile.id = "hidden"
})