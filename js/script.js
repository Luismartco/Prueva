/* Variables globales */
const header = document.querySelector("header")
const logo = document.getElementsByClassName("logo")
const menu = document.querySelector(".menu__mobile")
const ul = document.querySelector(".header__nav ul")
let originMain = window.pageYOffset;
let i = 0, texto;
texto = "SINCELEJO"


/* Celulares menu responsivo */
menu.addEventListener("click", () => {
   if(ul.style.display === "block") {
      ul.style.display = "none"
   }else {
      ul.style.display = "block"
   }
})


/* Añadiendo loader*/
window.onload = () => {
    const loader = document.getElementById("loader")
    loader.style.visibility = "hidden"
    loader.style.opacity = "0"
}

/* Efecto al hacer scroll */
window.onscroll = () => {
   let moving = window.pageYOffset
   if(originMain >= moving) {
    header.style.top = "0"
   }else {
    header.style.top = "-100px"
   }
   originMain = moving
  
}

/* Efecto tipo maquina de escribir */
function typing() {
   if(i<texto.length) {
      const doc =  document.getElementById("text").innerHTML += texto.charAt(i);
       i++;
       setTimeout(typing, 100);
   }
}
typing()