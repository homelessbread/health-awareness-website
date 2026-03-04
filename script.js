// script.js

// Function to handle navigation
function navigateTo(section) {
    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => {
        sec.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}

// Event listener for navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = e.target.getAttribute('href').substring(1);
            navigateTo(targetSection);
        });
    });
});

// Initial load
navigateTo('home');