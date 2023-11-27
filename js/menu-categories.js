const btnHamburguer = document.querySelector('.menu-categories')
const btnClose = document.querySelector('.btn-close')
const menuMobile = document.querySelector('.menu')
const openCategoriesMenu = document.querySelector('.open-categories')

btnHamburguer.addEventListener("mouseover", function() {
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

//acordion

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