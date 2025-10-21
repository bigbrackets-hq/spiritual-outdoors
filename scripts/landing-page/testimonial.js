gsap.registerPlugin(ScrollTrigger);

const testimonialSectionElement = document.querySelector(
  '.js-testimonial-section'
);
const reviewerAvatarElements = document.querySelectorAll('.js-reviewer-avatar');
const hoverToReadContainerElement = document.querySelector(
  '.js-hover-to-read-container'
);
const reviewCardElements = document.querySelectorAll('.js-review-card');

let userHasHovered = false;

reviewerAvatarElements.forEach((element, index) => {
  element.addEventListener('mouseenter', () => {
    hoverToReadContainerElement.style.opacity = '0';
    hoverToReadContainerElement.style.pointerEvents = 'none';

    userHasHovered = true;

    reviewCardElements.forEach((card, i) => {
      card.style.opacity = i === index ? '1' : '0';
    });

    element.style.filter = 'grayscale(0%)';
  });

  element.addEventListener('mouseleave', () => {
    reviewCardElements.forEach((card) => {
      card.style.opacity = '0';
    });

    element.style.filter = 'grayscale(100%)';
  });
});

let mm = gsap.matchMedia();

mm.add('(min-width: 1440px)', () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: testimonialSectionElement,
      start: 'top 80%',
      onEnter: () => {
        if (!userHasHovered) {
          reviewCardElements[0].style.opacity = '1';

          tl.scrollTrigger.kill();
        }
      },
    },
  });

  return () => tl.kill();
});

if (window.matchMedia('(pointer: coarse)').matches) {
  let activeIndex = null;

  reviewerAvatarElements.forEach((element, index) => {
    element.addEventListener('click', (event) => {
      // Prevent the document click from firing
      event.stopPropagation();

      // If clicking the same element, toggle it off
      if (activeIndex === index) {
        reviewCardElements[index].style.opacity = '0';
        activeIndex = null;
        return;
      }

      // Hide the previously visible card
      if (activeIndex !== null) {
        reviewCardElements[activeIndex].style.opacity = '0';
      }

      reviewCardElements[index].style.opacity = '1';
      activeIndex = index;
    });
  });

  // Hide cards when clicking anywhere else
  document.addEventListener('click', () => {
    if (activeIndex !== null) {
      reviewCardElements[activeIndex].style.opacity = '0';
      activeIndex = null;
    }
  });
}
