let navbar = document.querySelector('.navbar');
let repper = document.querySelector('.repper');


repper.addEventListener('scroll', (e) => {
    if(repper.scrollTop > 50) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
})




let navLinks = document.querySelector('.nav-links');
let menuBtn = document.querySelector('.menu-btn');


menuBtn.addEventListener('click', () => {
    let nav = navLinks.classList.toggle('nav-links-width');
    if(nav) {
        menuBtn.innerHTML = '<i class="bx bx-x"></i>';
    }else {
        menuBtn.innerHTML = '<i class="bx bx-menu"></i>';
    }
})
