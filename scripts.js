// JavaScript for future interactivity or dynamic features
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page Loaded Successfully');
    
    document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu visibility
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
});
