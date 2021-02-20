const navToggle = document.querySelector('#nav-toggle');
const navItems = document.querySelector('.nav-items');

function toggleActive() {
    navToggle.classList.toggle('active')
    navItems.classList.toggle('visible')
}

navToggle.onclick = toggleActive

