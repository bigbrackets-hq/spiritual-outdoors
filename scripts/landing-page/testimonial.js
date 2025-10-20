gsap.registerPlugin(ScrollTrigger);

const reviewerAvatarContainerElements = document.querySelectorAll(
  '.js-reviewer-avatar-container'
);
const hoverToReadContainerElement = document.querySelector(
  '.js-hover-to-read-container'
);

reviewerAvatarContainerElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    hoverToReadContainerElement.style.opacity = '0';
    hoverToReadContainerElement.style.pointerEvents = 'none';
  });
});
