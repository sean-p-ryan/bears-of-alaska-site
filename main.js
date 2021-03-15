const mobileNavIcon = document.querySelector('.nav-mobile')
const navItems = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-item');

document.addEventListener('click', function (e) {
    if (window.innerWidth <= 769) {
        if (e.target.id === 'nav-toggle-overlay') {
            navItems.classList.toggle('visible')
            mobileNavIcon.classList.toggle('active')
        }
        if (e.target.id === 'nav-item') {
            navItems.classList.toggle('visible')
            mobileNavIcon.classList.toggle('active')
        }
    }
})

