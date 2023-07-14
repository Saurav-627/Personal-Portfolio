
// ===========-text Animation-============//
var slides = document.querySelectorAll('.title_animation p');
// Initialize the slide index
var slideIndex = 0;
// Show the first slide
slides[slideIndex].classList.add('visible');
// Start the slide show
setInterval(function () {
    // Hide the current slide
    slides[slideIndex].classList.remove('visible');
    slides[slideIndex].classList.add('hidden');
    // Calculate the index of the next slide
    slideIndex = (slideIndex + 1) % slides.length;
    // Show the next slide
    slides[slideIndex].classList.remove('hidden');
    slides[slideIndex].classList.add('visible');
}, 2000); // Change the slide every 3 seconds




//======- btn open close-=========/
let mobileNav = document.querySelector('.mobile_menu');
document.querySelector('.OC_btn').onclick = () => {
    mobileNav.classList.add('active');
}

document.querySelector('.closebtn').onclick = () => {
    mobileNav.classList.remove('active');
};;





// -========Card animation Tilt ========-//
VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 15,
    speed: 200
});
