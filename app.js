// responsive navbar
const collapse = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li')

collapse.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
});