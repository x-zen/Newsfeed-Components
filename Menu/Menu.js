
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menuButtontn.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButtontn = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButtontn.addEventListener('click', toggleMenu);
