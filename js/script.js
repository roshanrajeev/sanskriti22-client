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


const textsContainerElem = document.querySelector(".tagline .texts")
const textsElem = Array.from(textsContainerElem.children)
const img = document.querySelector(".tagline .image img")
console.log(textsContainerElem)
textsContainerElem.addEventListener('mouseover', async (e) => {
    if(e.target.classList.contains('text')) {
        const textElem = e.target
        const id = textElem.dataset.id
        img.src = `./img/events/${id}.jpg`
        
    }
})

textsContainerElem.addEventListener('mouseleave', async (e) => {
    img.src = `./img/collage2.jpg`
})
