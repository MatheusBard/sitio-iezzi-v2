$(document).ready(function () {

  const menuToggle = document.getElementById('menu-toggle');
  const menuMobile = document.getElementById('menu-mobile');

  menuToggle.addEventListener('click', () => {
    menuMobile.classList.toggle('opened');
  })
})