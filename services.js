document.addEventListener('DOMContentLoaded', function() {

    let options = document.getElementsByClassName('menu-items-options')[0];
    let foodItems = options.getElementsByClassName('menu-food-option');
    let nextBtn = document.getElementsByClassName('next-btn')[0];
    let prevBtn = document.getElementsByClassName('prev-btn')[0];
    

    let currentPosition = 0;
    let itemsToShow = 3;
    let itemWidth = foodItems[0].offsetWidth + 40;
    let autoScrollInterval;
    let scrollDelay = 5000;

    function moveCarousel() {
        options.style.transform = 'translateX(' + currentPosition + 'px)';
    }

    function nextSlide() {
        let maxScroll = -((foodItems.length - itemsToShow) * itemWidth);
        if (currentPosition > maxScroll) {
            currentPosition -= itemWidth * itemsToShow;
        } else {
            currentPosition = 0;
        }
        moveCarousel();
    }

    function prevSlide() {
        if (currentPosition < 0) {
            currentPosition += itemWidth * itemsToShow;
        } else {
            currentPosition = -((foodItems.length - itemsToShow) * itemWidth);
        }
        moveCarousel();
    }

    nextBtn.onclick = nextSlide;
    prevBtn.onclick = prevSlide;

    function startAutoScroll() {
        autoScrollInterval = setInterval(nextSlide, scrollDelay);
    }

    options.parentElement.addEventListener('mouseenter', function() {
        clearInterval(autoScrollInterval);
    });

    options.parentElement.addEventListener('mouseleave', startAutoScroll);

    startAutoScroll();

    window.addEventListener('resize', function() {
        itemWidth = foodItems[0].offsetWidth + 40;
        moveCarousel();
    });

    // Scroll-to-more functionality
    const scrollMoreElements = document.querySelectorAll('.scroll-more');
    scrollMoreElements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const bgContainer = this.closest('.background-container') || this.closest('.service-background-container');
            const nextElement = bgContainer.nextElementSibling;
            
            if (nextElement) {
                nextElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                window.scrollBy({
                    top: window.innerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});