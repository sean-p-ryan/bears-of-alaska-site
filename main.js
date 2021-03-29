const mobileNavIcon = document.querySelector('.nav-mobile')
const navItems = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav-item');
const contactLink = document.querySelector('.contact-link');
const overlay = document.querySelector('.overlay');
const body = document.getElementsByTagName("BODY")[0]; 
let emailVisible = false;

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

document.addEventListener('click', function(e){
    if(e.target.classList.contains('contact-link')){
        if (window.innerWidth <= 1000){
            contactLink.classList.add('smaller-text')
        }
        if(!emailVisible){
            contactLink.innerText = "bearsofalaskamusic.com";  
            overlay.style.visibility = "visible";
            body.style.overflowY = "hidden";
        } else {
            contactLink.innerText = "Contact";  
            overlay.style.visibility = "hidden";
            body.style.overflowY = "auto";
            contactLink.classList.remove('smaller-text')
        }
        emailVisible = !emailVisible;        
    }
})

// document.addEventListener('mouseout', function(e){
//     if(e.target.classList.contains('contact-link')){
//         contactLink.innerText = "Contact";    
//         contactTextContainer.style.witdth = "100vw";
//     }
// })

