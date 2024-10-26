// Navigation - Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Toggle Image Gallery Display for Each Grid Item
function showImages(gridItemClass) {
    // Hide all image galleries first
    document.querySelectorAll('.image-gallery').forEach(gallery => {
        gallery.style.display = 'none';
    });
    
    // Display the gallery of the clicked grid item
    const galleryToShow = document.querySelector(`.${gridItemClass}`);
    if (galleryToShow) {
        galleryToShow.style.display = 'block';
    }
}

// Attach click events to grid items on the homepage to show images and redirect
document.querySelectorAll('.grid-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        // Show images for the selected grid item
        showImages(`grid-gallery-${index}`);

        // Redirect to dance school page
        window.location.href = 'dance-school.html';
    });
});
