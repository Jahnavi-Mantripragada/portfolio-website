// Show "Go to Top" Button on Scroll
const goToTopButton = document.getElementById('go-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        goToTopButton.style.display = 'block';
    } else {
        goToTopButton.style.display = 'none';
    }
});

// Smooth Scroll to Top
goToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
