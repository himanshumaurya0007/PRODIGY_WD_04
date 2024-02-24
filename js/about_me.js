// Function to add active class to the current navigation link based on the current URL
function setActiveLink() {
    const currentLocation = window.location.href;

    const links = document.querySelectorAll("#navbar-menu a");
    links.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Function to change header background color on scroll
function changeHeaderBackground() {
    const header = document.querySelector("header");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

// Event listener for scrolling to change header background color
window.addEventListener("scroll", changeHeaderBackground);

// Call setActiveLink function on page load
document.addEventListener("DOMContentLoaded", setActiveLink);
