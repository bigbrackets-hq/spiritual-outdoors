gsap.registerPlugin(ScrollTrigger);

const sidebarElement = document.querySelector('.js-sidebar');
const sidebarMenuElement = document.querySelectorAll('.js-sidebar-menu');

ScrollTrigger.create({
  start: 0,
  end: 'max',
  onUpdate: (self) => {
    if (self.direction === 1) {
      gsap.to(sidebarElement, { top: 30, duration: 0.1 });
    } else {
      gsap.to(sidebarElement, { top: 120, duration: 0.1 });
    }
  },
});

sidebarMenuElement.forEach((menu) => {
  menu.addEventListener('click', () => {
    sidebarMenuElement.forEach((item) => item.classList.remove('active'));

    menu.classList.toggle('active');
  });
});
