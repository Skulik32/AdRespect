var macyInstance = Macy({
    container: '.galery',
    mobileFirst: true,
    columns: 1,
    breakAt: {
        400: 3,
    },
    margin: {
        x: 10,
        y: 10,
    }
});

const search = document.querySelector(".fa-solid")
const input = document.querySelector(".search")

search.onclick = function () {
    document.querySelector(".conatiner").classList.toggle('active')
    document.querySelector(".search").classList.toggle('active')
}

document.querySelectorAll('.galery img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup').style.display = 'block'
        document.querySelector('.popup img').src = image.getAttribute('src')
    }
})

document.querySelector('.popup span').onclick = () => {
    document.querySelector('.popup').style.display = 'none'
}

const btn = document.querySelector(".rozwiń")
const galeria = document.querySelector(".galeria")
const images = document.querySelector(".galery")
const zwiń = document.querySelector(".zwiń")

if (galeria.style.overflow = "hidden") {
    btn.style.position = "block"
    btn.style.zIndex = "10"
}


zwiń.addEventListener("click", () => {
    galeria.style.overflow = "hidden"
    galeria.scrollTo(0, 0);
    btn.style.display = "block"
    images.style.maskImage = "linear-gradient(#000, rgba(0, 0, 0, 0))"
    images.style.webkitMaskImage = "linear-gradient(#000, rgba(0, 0, 0, 0))"
})

btn.addEventListener("click", () => {
    galeria.style.overflow = "scroll"
    images.style.maskImage = "none"
    images.style.webkitMaskImage = "none"
    btn.style.display = "none"
})




