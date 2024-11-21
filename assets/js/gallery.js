let slideIndex = 1;
let slideInterval;

// Show slides automatically
function startSlideShow() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

// Stop automatic slideshow when user interacts
function stopSlideShow() {
    clearInterval(slideInterval);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
    stopSlideShow();
    startSlideShow();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    stopSlideShow();
    startSlideShow();
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Initialize slideshow when page loads
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    startSlideShow();
});
