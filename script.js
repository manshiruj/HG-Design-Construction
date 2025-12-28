// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

function openMenu() {
    mobileMenu.style.transform = 'translateY(0)';
    document.body.classList.add('menu-open');
    hamburger.style.opacity = '0';
    hamburger.style.pointerEvents = 'none';
}

function closeMenuFunc() {
    mobileMenu.style.transform = 'translateY(-100%)';
    document.body.classList.remove('menu-open');
    hamburger.style.opacity = '1';
    hamburger.style.pointerEvents = 'auto';
}

hamburger.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenuFunc);
});