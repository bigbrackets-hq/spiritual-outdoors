// Card Stack Animation with GSAP
gsap.registerPlugin(ScrollTrigger);

const stackCards = gsap.utils.toArray('.js-stack-card');
const stackContainer = document.querySelector('.js-stack-card-container');

if (stackCards.length > 1) {
  stackCards.forEach((card, index) => {
    // Skip the last card (it stays at the bottom)
    if (index === stackCards.length - 1) return;

    const nextCard = stackCards[index + 1];
    
    ScrollTrigger.create({
      trigger: card,
      start: 'top top',
      end: () => `+=${card.offsetHeight}`,
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true, // Uncomment for debugging
      
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Scale down and fade the current card
        gsap.to(card, {
          scale: 1 - (progress * 0.1),
          opacity: 1 - (progress * 0.5),
          filter: `brightness(${1 - progress * 0.3})`,
          duration: 0,
        });
        
        // Move next card up and scale it
        gsap.to(nextCard, {
          y: -progress * 100,
          scale: 0.95 + (progress * 0.05),
          duration: 0,
        });
      },
    });
  });
  
  // Initial setup - stack cards on top of each other
  stackCards.forEach((card, index) => {
    if (index > 0) {
      gsap.set(card, {
        y: 100,
        scale: 0.95,
      });
    }
  });
}