// JavaScript for Hero Section Slider
document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".hero-slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    showSlide(slideIndex);
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

// JavaScript for Scroll-to-Top Button
const scrollToTopButton = document.createElement("button");
scrollToTopButton.innerHTML = "⬆";
scrollToTopButton.id = "scrollTopBtn";
scrollToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    background-color: #ff6600;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    z-index: 1000;
`;
document.body.appendChild(scrollToTopButton);

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
