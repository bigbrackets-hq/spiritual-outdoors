const packingListItemElements = document.querySelectorAll(
  '.js-packing-list-item'
);

packingListItemElements.forEach((item) => {
  item.addEventListener('click', () => {
    const detailElement = item.querySelector('.js-packing-list-item-detail');
    const chevronDownIcon = item.querySelector('.chevron-down-icon');
    const chevronTopIcon = item.querySelector('.chevron-top-icon');

    chevronDownIcon.classList.toggle('hidden');
    chevronTopIcon.classList.toggle('hidden');

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
