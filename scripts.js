// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// Toggle Image Gallery Visibility
function showImages(category) {
  // Hide all image galleries
  const galleries = document.querySelectorAll('.image-gallery');
  galleries.forEach(gallery => gallery.style.display = 'none');
  
  // Show the selected category gallery
  const selectedGallery = document.getElementById(category);
  selectedGallery.style.display = 'grid';
}
