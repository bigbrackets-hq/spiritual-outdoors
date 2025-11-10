const tableItemElements = document.querySelectorAll('.js-table-item');

tableItemElements.forEach((item) => {
  const chevronDown = item.querySelector('.js-chevron-down');

  item.addEventListener('click', () => {
    const tableItemDetailsElement = item.querySelector(
      '.js-table-item-details'
    );

    chevronDown.classList.toggle('rotate-180');
    tableItemDetailsElement.classList.toggle('hidden');
  });
});
