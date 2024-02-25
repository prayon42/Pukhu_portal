// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.color = 'orange'; // Change to your desired hover color
        });

        link.addEventListener('mouseout', function () {
            this.style.color = ''; // Reset color on mouseout
        });
    });

    // Add fade-in effect to sections
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.opacity = '1';
        section.style.transition = 'opacity 0.8s ease-in-out';

        window.addEventListener('scroll', function () {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight && section.style.opacity === '0') {
                section.style.opacity = '1';
            }
        });
    });
});
