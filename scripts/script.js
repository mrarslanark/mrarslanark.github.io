function classToggle() {
    const navItems = document.querySelector('.navbar-items');
    // navItems.forEach(nav => nav.classList.toggle('navbar-toggle'));
    navItems.classList.toggle("navbar-toggle");
}

function androidTheFunWay() {
    // Android the fun way
    window.open('http://bit.ly/2TkDN3c', '_blank');
}

function introToKotlin() {
    // Introduction to Kotlin
    window.open('http://bit.ly/2t4xki6', '_blank');
}

function gitAndGitHub() {
    // Understanding Git and GitHub
    window.open('https://bit.ly/30tDXHc', '_blank');
}

function doMoreWithFirebase() {
    // Do More with Firebase
    window.open('https://bit.ly/31q0vLi', '_blank');
}

function fastUni() {
    window.open('', '_blank')
}

// document.addEventListener('contextmenu', event => event.preventDefault());

document.querySelector('.tech-tology-link')
    .addEventListener('click', androidTheFunWay);

document.querySelector('.google-io-link')
    .addEventListener('click', introToKotlin);

document.querySelector('.navbar-toggle')
    .addEventListener('click', classToggle);

document.querySelector('.git-and-github')
    .addEventListener('click', gitAndGitHub);

document.querySelector('.do-more-with-firebase')
    .addEventListener('click', doMoreWithFirebase);