const navToggle = document.querySelector('.nav-mobile');
const navItems = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-item');

function toggleActive() {
    navToggle.classList.toggle('active')
    navItems.classList.toggle('visible')
}

function addOnclicks(){
    console.log()
    navToggle.onclick = toggleActive
    Array.from(navLinks).forEach(function(link) {
        link.onclick = toggleActive
    })
}

addOnclicks()

