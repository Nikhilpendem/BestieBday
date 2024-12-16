let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 10 seconds
    setTimeout(showSlides, 10000);
}

// Initialize the slideshow
showSlides();
