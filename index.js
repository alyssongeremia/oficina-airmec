const btnHamburguer = document.querySelector('.menu-categories')
const btnClose = document.querySelector('.btn-close')
const menuMobile = document.querySelector('.menu')
const openCategoriesMenu = document.querySelector('.open-categories')

btnHamburguer.addEventListener("click", function() {
    menuMobile.id = ""
})

openCategoriesMenu.addEventListener("click", function() {
    menuMobile.id = ""
})

document.onkeydown = function(e) {
    if(e.key === 'Escape') {
        menuMobile.id = "hidden"
    }
}

btnClose.addEventListener("click", function() {
    btnHamburguer.classList.remove('hidden')
    menuMobile.id = "hidden"
})

//navbar
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

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
    window.scrollTo({
        top: 0
    })
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
        delay: 4000
    }
});

const showOffer = document.querySelector('.offer-mobile')
const showOfferDesktop = document.querySelector('.offer-desktop')
const modal = document.querySelector('dialog')
const closeOffer = document.querySelector('.close-offer')

showOffer.addEventListener('click', () => {
    modal.showModal()
})

closeOffer.addEventListener('click', () => {
    modal.close()
})

showOfferDesktop.addEventListener('click', () => {
    modal.show()
})

const btnWhatsapp = document.querySelector('.btn-whatsapp')
const cardsMachine = document.querySelector('.parts-gallery-wrapper')

cardsMachine.addEventListener('mouseover', () => {
    btnWhatsapp.classList.add('animation')
    setTimeout(offAnimation, 3000)
})

function offAnimation() {
    btnWhatsapp.classList.remove('animation')
}

const btnBorracharia = document.querySelector(".link-borracharia")

btnBorracharia.addEventListener('click', () => {
    menuMobile.id = "hidden";
    btnHamburguer.classList.remove('hidden');
})