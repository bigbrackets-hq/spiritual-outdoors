gsap.registerPlugin(ScrollTrigger);

const sidebarElement = document.querySelector('.js-sidebar');
const sidebarMenuElement = document.querySelectorAll('.js-sidebar-menu');
const articleContentElement = document.querySelectorAll('.js-article-content');

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

sidebarMenuElement.forEach((menu, index) => {
  menu.addEventListener('click', () => {
    sidebarMenuElement.forEach((item) => item.classList.remove('active'));

    menu.classList.toggle('active');

    articleContentElement.forEach((content) => {
      if (content === articleContentElement[index]) {
        content.classList.remove('hidden');
        content.classList.add('flex');
      } else {
        content.classList.add('hidden');
      }
    });
  });
});
