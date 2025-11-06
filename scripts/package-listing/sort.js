const sortContainerElement = document.querySelector('.js-sort-container');
const sortButtonElement = document.querySelector('.js-sort-button');

sortButtonElement.addEventListener('click', () => {
  sortButtonElement.classList.toggle('active');
  sortContainerElement.classList.toggle('hidden');
});
