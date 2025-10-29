gsap.registerPlugin(ScrollTrigger);

const videoContainer = document.querySelector('.js-video-container');
const videoElement = document.querySelector('.js-video');
const videoOverlayElement = document.querySelector('.js-video-overlay');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: videoContainer,
    start: 'top 10%',
    end: '+=100%',
    pin: true,
    scrub: true,
  },
});

tl.to(
  videoOverlayElement,
  {
    opacity: 0,
    ease: 'none',
  },
  'start'
);

tl.to(videoElement, {
  scale: 1.4,
  ease: 'none',
});
