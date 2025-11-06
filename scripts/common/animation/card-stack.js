gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll('.js-stack-card');

cards.forEach((card) => {
  gsap.to(card, {
    scale: 1,
    scrollTrigger: {
      trigger: card,
      start: 'top 10%',
      end: 'bottom 12%',
      scrub: true,
      pin: true,
      pinSpacing: false,
      invalidateOnRefresh: true,
      markers: true,
    },
  });
});
