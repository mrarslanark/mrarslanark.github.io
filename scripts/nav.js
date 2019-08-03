function classToggle() {
    const navItems = document.querySelector('.navbar-items');
    // navItems.forEach(nav => nav.classList.toggle('navbar-toggle'));
    navItems.classList.toggle("navbar-toggle");
}

document.querySelector('.navbar-toggle')
    .addEventListener('click', classToggle);