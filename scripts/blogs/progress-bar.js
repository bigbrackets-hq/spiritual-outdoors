gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const blogDetailsContentElement = document.querySelector(
  '.js-blog-details-content'
);
const progressBarElement = document.querySelector('.js-progress-bar');

gsap.to(progressBarElement, {
  height: '100%',
  scrollTrigger: {
    trigger: blogDetailsContentElement,
    start: 'top 50%',
    end: 'bottom bottom',
    scrub: true,
    // markers: true,
  },
});
