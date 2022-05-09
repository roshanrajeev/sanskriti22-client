function toggleMenu() {
    const menu = document.querySelector(".menu")
    if(menu.classList.contains('active')) {
        menu.classList.remove('active')
    }else {
        menu.classList.add('active')
    }
}

document.body.addEventListener('click', (e) => {
    if(e.target.classList.contains("menu-icon-container") ||
    e.target.classList.contains("menu-icon")) {
        toggleMenu()
    }
})


