gsap.registerPlugin(ScrollTrigger);

const stackCards = gsap.utils.toArray('.js-stack-card');
const offset = 80;

// Initial setup using scaleX
stackCards.forEach((card, index) => {
  gsap.set(card, {
    y: index * offset,
    scaleX: index === 0 ? 1 : 0.9,
    transformOrigin: 'center center',
    zIndex: stackCards.length + index,
  });
  card.style.willChange = 'transform, filter';
});

stackCards.forEach((card, index) => {
  if (index === 0) return;
  const prevCard = stackCards[index - 1];

  const setScaleX = gsap.quickSetter(card, "scaleX");
  
  ScrollTrigger.create({
    trigger: stackCards[index], // Use the card itself as trigger
    
    scrub: 0.5,
    // pin:true;
    // markers: true, // uncomment to debug
    onUpdate: (self) => {
      const fastProgress = Math.min(1, self.progress * 1.8);
      const scale = 0.9 + 0.1 * fastProgress;
      setScaleX(scale);

      if (prevCard) {
        prevCard.style.filter = `brightness(${1 - 0.4 * fastProgress})`;
      }
    },
  });
});