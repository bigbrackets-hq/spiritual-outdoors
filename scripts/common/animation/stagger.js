gsap.registerPlugin(ScrollTrigger);

const cardContainerElements = document.querySelectorAll('.js-card-container');

cardContainerElements.forEach((element) => {
  const cards = element.querySelectorAll('.js-card-stagger');

  gsap.from(cards, {
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
    },
  });
});
