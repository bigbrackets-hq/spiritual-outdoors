const lightbox = GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
});

const galleryImagesElement = document.querySelectorAll('.js-gallery-images');

galleryImagesElement.forEach((image, index) => {
  image.addEventListener('click', () => {
    lightbox.openAt(index);
  });
});
