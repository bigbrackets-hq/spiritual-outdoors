gsap.registerPlugin(ScrollTrigger);

let scrollPosition = 0;

const headerElement = document.querySelector('.js-header');
const mainLogoElement = document.querySelector('.js-main-logo');
const navItemElements = document.querySelectorAll('.js-nav-item');
const buttonElement = document.querySelector('.js-whatsapp-btn');
const dropDownIcons = document.querySelectorAll('.js-dropdown-icon');
const overlayElement = document.getElementById('overlay');

let isNavbarActive = false;
let isNavbarPanelOpen = false;

function toggleActiveNavbar() {
  headerElement.style.backgroundColor = 'var(--color-blue-100)';

  mainLogoElement.innerHTML =
    '<img src="/public/images/icons/main-logo-dark.svg" alt="Spiritual outdoors logo"/>';

  navItemElements.forEach((item) => {
    item.style.color = 'var(--color-darkgreen-500)';
  });

  dropDownIcons.forEach((icon) => {
    icon.querySelector('path').style.fill = 'var(--color-darkgreen-500)';
  });

  buttonElement.style.backgroundColor = 'var(--color-darkgreen-500)';

  buttonElement.style.color = '#FFF';

  toggleButton();
}

function toggleInactiveNavbar() {
  headerElement.style.backgroundColor = 'transparent';

  mainLogoElement.innerHTML =
    '<img src="/public/images/icons/main-logo.svg" alt="Spiritual outdoors logo"/>';

  navItemElements.forEach((item) => {
    item.style.color = 'var(--color-blue-500)';
  });

  dropDownIcons.forEach((icon) => {
    icon.querySelector('path').style.fill = 'var(--color-blue-500)';
  });

  buttonElement.style.backgroundColor = 'var(--color-blue-500)';
  buttonElement.style.color = 'var(--color-darkgreen-500)';
}

headerElement.addEventListener('mouseenter', () => {
  toggleActiveNavbar();
});

headerElement.addEventListener('mouseleave', () => {
  if (!isNavbarActive) toggleInactiveNavbar();
});

function toggleButton() {
  if (buttonElement.style.backgroundColor === 'var(--color-darkgreen-500)') {
    buttonElement.addEventListener('mouseenter', () => {
      buttonElement.style.backgroundColor = 'var(--color-darkgreen-700)';
    });

    buttonElement.addEventListener('mouseleave', () => {
      buttonElement.style.backgroundColor = 'var(--color-darkgreen-500)';
    });
  }
}

ScrollTrigger.create({
  start: 100,
  end: 'max',
  onEnter: () => {
    isNavbarActive = true;
    toggleActiveNavbar();
  },
  onLeaveBack: () => {
    isNavbarActive = false;
    if (!isNavbarPanelOpen) toggleInactiveNavbar();
  },
});

//* Show and hide navbar on scroll
ScrollTrigger.create({
  start: 0,
  end: 'max',
  onUpdate: (self) => {
    if (self.direction === 1) {
      gsap.to(headerElement, { y: -100, duration: 0 });
    } else {
      gsap.to(headerElement, { y: 0, duration: 0 });
    }
  },
});

//* Expand navbar on item hover
navItemElements.forEach((item) => {
  const dropdownPanelElement = document.querySelector(
    `.js-${item.textContent.trim().toLowerCase()}-dropdown-panel`
  );

  item.addEventListener('mouseenter', () => {
    overlayElement.style.opacity = '1';

    scrollPosition = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';

    gsap.to(headerElement, {
      height: 614,
      duration: 0,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(dropdownPanelElement, {
          display: 'block',
          duration: 0,
          ease: 'power2.inOut',
          onComplete: () => {
            isNavbarPanelOpen = true;
          },
        });
      },
    });
  });

  headerElement.addEventListener('mouseleave', () => {
    overlayElement.style.opacity = '0';

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';

    window.scrollTo(0, scrollPosition);

    gsap.to(headerElement, {
      height: 84,
      duration: 0,
      ease: 'power2.inOut',
    });

    gsap.to(dropdownPanelElement, {
      display: 'none',
      duration: 0,
      ease: 'power2.inOut',
    });

    isNavbarPanelOpen = false;
  });
});
