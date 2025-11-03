gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const tabContainerElement = document.querySelector('.js-tab-container');
const tabs = document.querySelectorAll('.js-tabs');
const stickyCardContainerElement = document.querySelector(
  '.js-sticky-card-container'
);

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const tabText = tab.textContent.trim().toLowerCase();
    const target = document.getElementById(tabText);
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: target, offsetY: 20 },
        ease: 'power2.out',
      });
    }
  });
});

function setActiveTab(activeTab) {
  tabs.forEach((t) => t.classList.remove('tab-active'));
  activeTab.classList.add('tab-active');
}

tabs.forEach((tab) => {
  const tabText = tab.textContent.trim().toLowerCase();
  const target = document.getElementById(tabText);

  if (target) {
    ScrollTrigger.create({
      trigger: target,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveTab(tab),
      onEnterBack: () => setActiveTab(tab),
    });
  }
});
