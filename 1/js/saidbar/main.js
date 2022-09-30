const Father = document.querySelector(".item")

const fragment = document.createDocumentFragment();

Data.forEach(elem => {
    const Clone = template.content.cloneNode(true);
    Clone.querySelector("#item").dataset.id = elem.id

    Clone.querySelector("#title").textContent = elem.title

    Clone.querySelector("#atribud").href = elem.link

    Clone.querySelector("#icon").name = elem.icon


    fragment.appendChild(Clone)
})

Father.append(fragment)


const navigetion = document.querySelectorAll(".navigation li")

function activelink() {
    navigetion.forEach((item) => {
        item.classList.remove("hovered")
    })
    this.classList.add("hovered")
}

navigetion.forEach((item) => item.addEventListener("mouseover", activelink))



const Nvigation = document.querySelector(".navigation")
const main = document.querySelector(".main")
const togle = document.querySelector(".toogle")

togle.addEventListener("click", event => {
    Nvigation.classList.toggle("active")
    main.classList.toggle("active")
})
