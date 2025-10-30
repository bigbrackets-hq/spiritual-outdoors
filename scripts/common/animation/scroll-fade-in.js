gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
  const elements = document.querySelectorAll(`.js-scroll-fade-in`);

  elements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
        },
      }
    );
  });
});
