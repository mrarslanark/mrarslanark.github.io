function classToggle() {
    const navItems = document.querySelector('.navbar-items');
    // navItems.forEach(nav => nav.classList.toggle('navbar-toggle'));
    navItems.classList.toggle("navbar-toggle");
}

function linkOne() {
    // Android the fun way
    window.open('http://bit.ly/2TkDN3c', '_blank');
}

function linkTwo() {
    // Introduction to Kotlin
    window.open('http://bit.ly/2t4xki6', '_blank');
}

function fastUni() {
    window.open('', '_blank')
}

// document.addEventListener('contextmenu', event => event.preventDefault());

document.querySelector('.tech-tology-link')
    .addEventListener('click', linkOne);

document.querySelector('.google-io-link')
    .addEventListener('click', linkTwo);

document.querySelector('.navbar-toggle')
    .addEventListener('click', classToggle);