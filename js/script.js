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


const textsContainerElem = document.querySelector(".tagline .texts")
const textsElem = Array.from(textsContainerElem.children)
const img = document.querySelector(".tagline .image img")
console.log(textsContainerElem)
textsContainerElem.addEventListener('mouseover', async (e) => {
    if(e.target.classList.contains('text')) {
        const textElem = e.target
        const id = textElem.dataset.id
        img.src = `./img/events/${id}.jpg`
        textElem.classList.add("active")
        textsElem.forEach(e => {
            e.classList.remove("animate")
        })
        
    }
})

textsContainerElem.addEventListener('mouseleave', async (e) => {
    img.src = `./img/collage2.jpg`
    textsElem.forEach(e => e.classList.add("animate"))

})

textsContainerElem.addEventListener('mouseout', async (e) => {
    textsElem.forEach(e => e.classList.remove("active"))
})
