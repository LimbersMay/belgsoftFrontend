const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navigation-menu');

/** Evento de escucha para el ícono amburger "Mostrar menu desplegable"**/
hamburger.addEventListener('click', () => {
    menu.classList.toggle("spread")
})

/** Ocultar menú desplegable**/
window.addEventListener('click', e => {
    if (menu.classList.contains('spread') && e.target !== menu && e.target !== hamburger) {
        menu.classList.toggle("spread")
    }
})

