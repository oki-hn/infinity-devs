const navbarBtn = document.getElementById('navbar-btn'); //? Button initialization
const navbarLinks = document.querySelector('.nav-links'); //? Navigation links initialization

//* Button function on the navbar
navbarBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!navbarBtn.contains(event.target) && !navbarLinks.contains(event.target)) {
        navbarLinks.classList.remove('active');
    }
})