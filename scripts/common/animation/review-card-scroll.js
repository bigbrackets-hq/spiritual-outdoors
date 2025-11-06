const cardContainerElement = document.querySelector(
  '.js-auto-scroll-card-container'
);

cardContainerElement.innerHTML += cardContainerElement.innerHTML;

const totalWidth = cardContainerElement.scrollWidth / 2;

const cardScroll = gsap.to(cardContainerElement, {
  x: `-${totalWidth}`,
  duration: 10,
  ease: 'none',
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
  },
});

cardContainerElement.addEventListener('mouseenter', () => {
  gsap.to(cardScroll, { timeScale: 0.2, duration: 0 });
});
cardContainerElement.addEventListener('mouseleave', () => {
  gsap.to(cardScroll, { timeScale: 1, duration: 0 });
});
