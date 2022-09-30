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


const buttonElement = document.querySelector(".add_button")
const modal_divElement = document.querySelector(".modal_div")

buttonElement.addEventListener("click", event => {
    event.preventDefault()
    modal_divElement.classList.add("modal")
    modal_divElement.classList.remove("modal_div")
})



const ionElement = document.querySelector(".ion")

ionElement.addEventListener("click", event => {
    modal_divElement.classList.remove("modal")
    modal_divElement.classList.add("modal_div")
})

const add_formElement = document.querySelector(".add_form")
const nameInputElement = document.querySelector(".nameInput")
const emailInputElement = document.querySelector(".emailInput")
const passwordElment = document.querySelector(".passwordInput")

function singup() {
    add_formElement.addEventListener("submit", event => {
        event.preventDefault()
        let header = new Headers
        header.append("Content-type", "application/json")
        let row = JSON.stringify({
            "name": nameInputElement.value,
            "email": emailInputElement.value,
            "password": passwordElment.value
        })
        let requestContent = ({
            method: "POST",
            headers: header,
            body: row
        })
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:vR9Klpfo/auth/signup", requestContent)
            .then(res => res.text())
            .then(result => {
                if(JSON.parse(result).authToken) {
                    window.location = "./index.html"
                }
                // console.log(result);
                if(JSON.parse(result).messege = "Input does not meet minimum length requirement of 8 characters") {
                    // console.log("error");
                    passwordElment.style.background = "red"
                    let sub = document.querySelector(".p_subtext")

                    sub.classList.add("p_subtex")
                    sub.classList.remove("p_subtext")
                }
            })




        add_formElement.reset()

    })
}
singup()

window.addEventListener("load", () => {
    if (!window.localStorage.getItem("token")) {
        window.location = "./admin.html"
    }
})


const Fragment = document.createDocumentFragment()
const tbodyElement = document.querySelector(".tbody")

let arr = []


function fetUser() {
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:vR9Klpfo/user")
        .then(res => res.json())
        .then(result => {
            arr = result
            chapUser(arr)
        })
}
fetUser()

let chapUser = (arr) => {
    arr.forEach((elem) => {
        let Clone = templateUser.content.cloneNode(true)

        Clone.querySelector("#name").textContent = elem.name
        Clone.querySelector("#email").textContent = elem.email

        Fragment.append(Clone)
    })
    tbodyElement.appendChild(Fragment)
}
