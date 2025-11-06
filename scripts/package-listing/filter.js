const filterButtonElements = document.querySelectorAll('.js-filter-btn');
const filterListElements = document.querySelectorAll('.js-filter-list');

filterButtonElements.forEach((button, index) => {
  button.addEventListener('click', () => {
    const rect = button.getBoundingClientRect();
    const currentList = filterListElements[index];
    const isActive = button.classList.contains('active');

    filterButtonElements.forEach((btn) => btn.classList.remove('active'));
    filterListElements.forEach((list) => list.classList.add('hidden'));

    if (!isActive) {
      button.classList.add('active');
      currentList.classList.remove('hidden');
      currentList.style.top = rect.bottom + 16 + 'px';
      currentList.style.left = rect.left + 'px';
    }
  });
});
