// Mobile Menu Toggle - FIXED VERSION
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const menuItems = document.querySelectorAll('.menu-item');

if (hamburger && mobileMenu) {
    // Open menu
    hamburger.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateY(0)';
        mobileMenu.style.visibility = 'visible';
        mobileMenu.style.opacity = '1';
        document.body.classList.add('menu-open');
        
        setTimeout(() => {
            gsap.from('.menu-item', {
                y: 50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }, 100);
    });

    // Close menu function
    const closeMobileMenu = () => {
        mobileMenu.style.transform = 'translateY(-100%)';
        mobileMenu.style.opacity = '0';
        setTimeout(() => {
            mobileMenu.style.visibility = 'hidden';
        }, 500);
        document.body.classList.remove('menu-open');
    };

    closeMenu.addEventListener('click', closeMobileMenu);
    
    menuItems.forEach(item => {
        item.addEventListener('click', closeMobileMenu);
    });
}