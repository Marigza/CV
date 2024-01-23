const burger = document.querySelector('.nav_burger');
const menu = document.querySelector('.nav');
const menuItems = Array.from(document.querySelectorAll('.nav_item'));
const modalBackground = document.querySelector('.modal-background');

burger.addEventListener('click', toggleActive);

modalBackground.addEventListener('click', toggleActive);

menuItems.forEach((item) => item.addEventListener('click', toggleActive));

function toggleActive() {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  modalBackground.classList.toggle('active');
}