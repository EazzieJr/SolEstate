const menuBtn = document.querySelector('.menu-btn');
const drop = document.querySelector('.dropdown');
let menuOpened = false;

function openMenu() {
    if (!menuOpened) {
        menuBtn.classList.add('open');
        drop.classList.add('drop');
        menuOpened = true;
    } else {
        menuBtn.classList.remove('open');
        drop.classList.remove('drop');
        menuOpened = false;
    }
}

function closeMenu() {
    menuBtn.classList.remove('open');
    drop.classList.remove('drop');
    menuOpened = false;
}