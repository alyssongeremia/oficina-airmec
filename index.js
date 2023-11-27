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
const modal = document.querySelector('dialog')
const closeOffer = document.querySelector('.close-offer')

showOffer.addEventListener('click', () => {
    modal.showModal()
})

closeOffer.addEventListener('click', () => {
    modal.close()
})