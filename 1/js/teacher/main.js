const frugment = document.createDocumentFragment()



let array = []

function Infors() {
    fetch("http://localhost:8000/teachers")
    .then(res => res.json())
    .then(resul =>  {
        array = resul
        Inf(array)
    })
}
Infors()

let Inf = (array) => {
    const Fat = document.querySelector(".infors")
    array.forEach(elem => {   
        let Clone = templateT.content.cloneNode(true)
        Clone.querySelector(".namee").textContent = elem.name
        Clone.querySelector(".sure").textContent = elem.surename
        Clone.querySelector(".agee").textContent = elem.age
        Clone.querySelector(".numm").textContent = elem.number
        Clone.querySelector(".way").textContent = elem.book
        frugment.append(Clone)
    })
    Fat.appendChild(frugment)
}

const infModallElement = document.querySelector(".infModall")
const buttonaddElement = document.querySelector(".buttonadd")
const inconbutElement = document.querySelector("#inconbut")

buttonaddElement.addEventListener("click" , event => {
    infModallElement.classList.add("infModal")
    infModallElement.classList.remove("infModall")
})
inconbutElement.addEventListener("click" , event => {
    infModallElement.classList.remove("infModal")
    infModallElement.classList.add("infModall")
})




let fchment = document.createDocumentFragment()
let arrr = []

function option() {
    fetch("http://localhost:8000/course")
    .then(res => res.json())
    .then(resull =>  {
        arrr = resull
        opInf(arrr)
    })
}
option()

let opInf = (arrr) => {
    const slectElement = document.querySelector("#selectWay")
    arrr.forEach(element => {
        let clonn = templateSelect.content.cloneNode(true)
        clonn.querySelector(".opp").textContent = element.title
        fchment.appendChild(clonn)
    })
    slectElement.append(fchment)
}


const fromElement = document.querySelector("#from")
const inputNameElement = document.querySelector(".inputName")
const inputSureNameElement = document.querySelector(".inputSureName")
const inputAgeElement= document.querySelector(".inputAge")
const inputNumberElement = document.querySelector(".inputNumber")
const selctElenet = document.querySelector("#selectWay")



fromElement.addEventListener("submit" , event => {
    event.preventDefault()
    fromElement.reset
    let headerss = new Headers
    headerss.append("Content-type" , "application/json")
    let row = JSON.stringify ({
        "name" : inputNameElement.value,
        "surename" : inputSureNameElement.value,
        "age" : inputAgeElement.value,
        "number" : inputNumberElement.value,
        "book" : selctElenet.value
    })
    let request  = ({
        method : "POST",
        headers : headerss,
        body : row
    })
    fetch("http://localhost:8000/teachers" , request)
    .then(res => res.text())
    .then(reslt => {
        if(reslt) {
            window.location = "./teacher.html"
        }
    })
})