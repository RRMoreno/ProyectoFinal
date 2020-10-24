let menuShown = false;

function toggleMenu() {
    menuShown = !menuShown;
    const menu = document.getElementById('main-menu');
    if (menuShown) {
        menu.className = 'navegacion mobile';
    } else {
        menu.className = 'navegacion';
    }
}
