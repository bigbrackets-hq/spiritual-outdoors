const itineraryDayListItemElements = document.querySelectorAll(
  '.js-itinerary-day-list-item'
);

itineraryDayListItemElements.forEach((item) => {
  item.addEventListener('click', () => {
    const detailElement = item.querySelector('.js-itinerary-day-details');
    const chevronDownIcon = item.querySelector('.js-chevron-down-icon');
    const chevronUpIcon = item.querySelector('.js-chevron-up-icon');

    chevronDownIcon.classList.toggle('hidden');
    chevronUpIcon.classList.toggle('hidden');

    if (detailElement.classList.contains('hidden')) {
      detailElement.classList.remove('hidden');

      gsap.to(detailElement, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    } else {
      gsap.to(detailElement, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => detailElement.classList.add('hidden'),
      });
    }
  });
});
