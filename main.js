const navToggle = document.querySelector('.nav-mobile');
const navItems = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-item');

function toggleActive() {
    navToggle.classList.toggle('active')
    if (window.innerWidth < 767) { navItems.classList.toggle('visible') }
}

navToggle.onclick = toggleActive

// function addOnclicks() {
//     console.log()    
//     Array.from(navLinks).forEach(function (link) {
//         link.onclick = toggleActive
//     })
// }

addOnclicks()

