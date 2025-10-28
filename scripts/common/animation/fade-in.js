const elements = document.querySelectorAll(`.js-fade-in`);

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
    }
  );
});
