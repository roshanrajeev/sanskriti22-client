function toggleMenu() {
    const menu = document.querySelector(".menu")
    if(menu.classList.contains('active')) {
        menu.classList.remove('active')
        document.body.style.cssText = `
            max-height: auto;
            overflow-y: scroll
        `
    }else {
        menu.classList.add('active')
        document.body.style.cssText = `
            max-height: 100vh;
            overflow: hidden
        `
    }
}

document.body.addEventListener('click', (e) => {
    if(e.target.classList.contains("menu-icon-container") ||
    e.target.classList.contains("menu-icon")) {
        toggleMenu()
    }
})


window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.style.height = 'auto';
        document.body.style.overflowY = 'scroll'
        const spinnerContainer = document.querySelector(".spinner-container")
        spinnerContainer.style.display = 'none'
    }, 1000)
})
