let iconMenu = document.querySelector('.icon-menu');
let menu__body = document.querySelector('.menu__body');
iconMenu.addEventListener('click', function () {
    iconMenu.classList.toggle('_active');
    menu__body.classList.toggle('_active');
})