let navbar = document.querySelector('.navbar');
let repper = document.querySelector('.repper');


repper.addEventListener('scroll', (e) => {
    if(repper.scrollTop > 50) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
})