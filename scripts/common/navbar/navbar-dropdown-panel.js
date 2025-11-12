const destinationsDropdownTabElements = document.querySelectorAll(
  '.js-destinations-dropdown-tab'
);
const trekkingDropdownTabElements = document.querySelectorAll(
  '.js-trekking-dropdown-tab'
);
const destinationsDropdownContentElements = document.querySelectorAll(
  '[class*="js-destinations-"][class$="-dropdown-content"]'
);
const trekkingDropdownContentElements = document.querySelectorAll(
  '[class*="js-trekking-"][class$="-dropdown-content"]'
);

// Destinations
destinationsDropdownTabElements.forEach((tabElement) => {
  tabElement.addEventListener('click', () => {
    destinationsDropdownTabElements.forEach((element) =>
      element.classList.remove('active')
    );
    destinationsDropdownContentElements.forEach((element) =>
      element.classList.remove('active')
    );

    tabElement.classList.add('active');

    const activeTabName = tabElement.textContent.toLowerCase().trim();

    const dropdownContentElement = document.querySelector(
      `.js-destinations-${activeTabName}-dropdown-content`
    );

    if (dropdownContentElement) dropdownContentElement.classList.add('active');
  });
});

// Trekking
trekkingDropdownTabElements.forEach((tabElement) => {
  tabElement.addEventListener('click', () => {
    trekkingDropdownTabElements.forEach((element) =>
      element.classList.remove('active')
    );
    trekkingDropdownContentElements.forEach((element) =>
      element.classList.remove('active')
    );

    tabElement.classList.add('active');

    const activeTabName = tabElement.textContent.toLowerCase().trim();

    const dropdownContentElement = document.querySelector(
      `.js-trekking-${activeTabName}-dropdown-content`
    );

    if (dropdownContentElement) dropdownContentElement.classList.add('active');
  });
});
