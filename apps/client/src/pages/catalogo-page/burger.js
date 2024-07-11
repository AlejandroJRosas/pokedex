document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.getElementById('burger-menu');
  const navbarMenu = document.getElementById('navbar-menu');

  burgerMenu.addEventListener('click', function () {
    navbarMenu.classList.toggle('show');
  });
});
