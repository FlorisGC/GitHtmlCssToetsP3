const hamburgerButton = document.getElementById('hamburger-button');
const mainMenu = document.getElementById('menu');

hamburgerButton.addEventListener('click', () => {
  mainMenu.classList.toggle('show');
});