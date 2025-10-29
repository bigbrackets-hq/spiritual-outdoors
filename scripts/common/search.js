const searchInputElement = document.querySelector('.js-search-input');
const searchListingElement = document.querySelector('.js-search-listing');

searchInputElement.addEventListener('input', () => {
  if (searchInputElement.value.trim() !== '') {
    searchListingElement.style.display = 'flex';
  } else {
    searchListingElement.style.display = 'none';
  }
});
