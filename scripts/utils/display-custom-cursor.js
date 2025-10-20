export function displayCustomCursor(className, cursorId) {
  const elements = document.querySelectorAll(`.${className}`);
  const cursorElement = document.getElementById(cursorId);

  elements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      cursorElement.style.opacity = 1;
    });

    element.addEventListener('mousemove', (event) => {
      gsap.to(cursorElement, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1,
        ease: 'back.out',
      });
    });

    element.addEventListener('mouseleave', () => {
      cursorElement.style.opacity = 0;
    });
  });
}
