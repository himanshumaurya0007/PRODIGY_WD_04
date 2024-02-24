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

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    // You can add your form submission logic here
    // For example, you can send form data to a server using AJAX
}

// Event listener for scrolling to change header background color
window.addEventListener("scroll", changeHeaderBackground);

// Event listener for form submission
document.querySelector("form").addEventListener("submit", handleSubmit);

// Call setActiveLink function on page load
document.addEventListener("DOMContentLoaded", setActiveLink);
