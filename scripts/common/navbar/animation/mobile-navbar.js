import { lockScroll, unlockScroll } from '../../../utils/scroll.js';

const hamburgerMenuElement = document.querySelector('.js-hamburger-menu');
const mobileNavbarPanelElement = document.querySelector('.js-mobile-nav-panel');

const mobileMenuElement = document.querySelectorAll('.mobile-menu');
const menuToggleElement = document.querySelectorAll('.js-menu-toggle');
const mobileSubMenuElement = document.querySelectorAll('.mobile-sub-menu');
const subMenuToggleElement = document.querySelectorAll('.js-sub-menu-toggle');

hamburgerMenuElement.addEventListener('click', () => {
  const isOpen = !mobileNavbarPanelElement.classList.contains('hidden');

  mobileNavbarPanelElement.classList.toggle('hidden');
  isOpen ? unlockScroll() : lockScroll();
});

menuToggleElement.forEach((menu, index) => {
  menu.addEventListener('click', () => {
    mobileMenuElement.forEach((item, i) => {
      if (i !== index) item.classList.remove('active');
    });

    mobileMenuElement[index].classList.toggle('active');
  });
});

subMenuToggleElement.forEach((subMenu, index) => {
  subMenu.addEventListener('click', () => {
    mobileSubMenuElement.forEach((item, i) => {
      if (i !== index) item.classList.remove('active');
    });

    mobileSubMenuElement[index].classList.toggle('active');
  });
});
