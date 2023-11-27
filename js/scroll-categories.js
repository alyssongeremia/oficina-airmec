const controls = document.querySelectorAll('.control')
let currentItem = 0
let itens = document.querySelectorAll('.item')
const maxItens = itens.length

//largura da tela
let widht = window.screen.width
let scrollQuant = 1

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains("arrow-left")

        if(widht >= 1000) {
            scrollQuant = 5
        }

        if(isLeft) {
            currentItem -= scrollQuant;
        } else {
            currentItem += scrollQuant;
        }

        if(currentItem >= maxItens) {
            currentItem = 0;
        }

        if(currentItem < 0) {
            currentItem = maxItens -1;
        }

        itens.forEach(item => item.classList.remove('current-item'))

        itens[currentItem].scrollIntoView({
            inline: "start", behavior: "smooth", block: "nearest"
        })

        itens[currentItem].classList.add('current-item')
    })
})