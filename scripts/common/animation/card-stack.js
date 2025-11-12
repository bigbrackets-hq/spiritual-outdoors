gsap.registerPlugin(ScrollTrigger);

const stackCardContainer = document.querySelector('.js-stack-card-container');
const stackCards = gsap.utils.toArray('.js-stack-card');

const offset = 80;

stackCards.forEach((card, index) => {
  gsap.set(card, {
    y: index * offset,
    width: index === 0 ? '100%' : '90%',
    filter: 'brightness(1)',
  });
});

stackCards.forEach((card, index) => {
  const prevCard = stackCards[index - 1];

  gsap.to(card, {
    width: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1,
      markers: true,
      onUpdate: (self) => {
        if (prevCard) {
          const progress = self.progress;

          gsap.to(prevCard, {
            filter: `brightness(${1 - 0.3 * progress})`,
            overwrite: true,
          });
        }
      },
    },
  });
});
