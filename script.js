// Get elements
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle menu visibility
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
