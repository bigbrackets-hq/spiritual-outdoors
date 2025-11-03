gsap.registerPlugin(ScrollTrigger);

const packageDetailsContainerElement = document.querySelector(
  '.js-package-details-container'
);
const discountCardElement = document.querySelector('.js-discount-card');
const hideDiscountDetailsElement = document.querySelector(
  '.js-hide-discount-details'
);

const discountDetailsElement = document.querySelector('.js-discount-details');

gsap.to(discountCardElement, {
  opacity: 1,
  duration: 0.3,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: packageDetailsContainerElement,
    start: 'top top',
    end: 'bottom bottom',
    toggleActions: 'play reverse play reverse',
  },
});

hideDiscountDetailsElement.addEventListener('click', () => {
  const chevronDownIcon = hideDiscountDetailsElement.querySelector(
    '.js-chevron-down-icon'
  );
  const chevronTopIcon = hideDiscountDetailsElement.querySelector(
    '.js-chevron-top-icon'
  );

  chevronDownIcon.classList.toggle('hidden');
  chevronTopIcon.classList.toggle('hidden');
  if (discountDetailsElement.classList.contains('hidden')) {
    discountDetailsElement.classList.remove('hidden');
    gsap.to(discountDetailsElement, {
      height: 'auto',
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  } else {
    gsap.to(discountDetailsElement, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => discountDetailsElement.classList.add('hidden'),
    });
  }
});
