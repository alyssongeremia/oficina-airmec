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

// scrollbar
const controls = document.querySelectorAll('.control')
let currentItem = 0
let itens = document.querySelectorAll('.item')
const maxItens = itens.length

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains("arrow-left")

        if(isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if(currentItem >= maxItens) {
            currentItem = 0;
        }

        if(currentItem < 0) {
            currentItem = maxItens -1;
        }

        itens.forEach(item => item.classList.remove('current-item'))

        itens[currentItem].scrollIntoView({
            inline: "center", behavior: "smooth", block: "nearest"
        })

        itens[currentItem].classList.add('current-item')
    })
})

//voltar ao top da pagina

const backToTop = document.querySelector('#back-to-top')

backToTop.addEventListener('click', function() {
    window.scrollTo(0,0)
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    cssMode: true,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000
    }
});

