const navbar = document.querySelector('.navbar');

function handleScroll() {
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  } else {
    navbar.style.backgroundColor = '#222222';
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Ensures correct color on page load

// Scroll-to-more functionality
const scrollMoreElements = document.querySelectorAll('.scroll-more');

scrollMoreElements.forEach(element => {
  element.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Get the parent background container and scroll past it
    const bgContainer = this.closest('.background-container') || this.closest('.service-background-container');
    const nextElement = bgContainer.nextElementSibling;
    
    if (nextElement) {
      nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If no next element, scroll down by one viewport height
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  });
});
