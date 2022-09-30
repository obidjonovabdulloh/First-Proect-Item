let are = []


function MapUser() {
    fetch("http://localhost:8000/course")
    .then(res => res.json())
    .then( result => {
        are = result
        CourseUser(are)
    })
}
MapUser()

let frament = document.createDocumentFragment()

let CourseUser = (are) => {
    let divsElement = document.querySelector(".course_title")
    are.forEach((elem) => {
       let Clone = templateCourse.content.cloneNode(true)
       Clone.querySelector("#texth2").textContent = elem.title
       Clone.querySelector("#texth3").textContent = elem.nomi
       Clone.querySelector("#subtext").textContent = elem.infor
       Clone.querySelector("#texth3text").textContent = elem.money
       frament.appendChild(Clone)
    })
    divsElement.appendChild(frament)
}

const modallElement = document.querySelector(".addModall")
const buttonAddElement = document.querySelector("#buttonAdd")
const iconElement = document.querySelector("#icon")

buttonAddElement.addEventListener("click" , e => {
    modallElement.classList.add("addModal")
    modallElement.classList.remove("addMdall")
})
iconElement.addEventListener("click" , event => {
    modallElement.classList.remove("addModal")
    modallElement.classList.add("addMdall")
})





const formElement = document.querySelector(".firm")
const innmElement = document.querySelector("#nomi")
const minim = document.querySelector("#narxi")
const innElement = document.getElementById("inn")
const seleElement = document.querySelector("#sele")

function addinnm() {
    formElement.addEventListener("submit" , event => {
        console.log(event);
        event.preventDefault()
        let header = new Headers
        header.append("Content-type" , "application/json")
        let raw = JSON.stringify({
            "title": innmElement.value,
            "nomi": seleElement.value,
            "infor" : innElement.value,
            "money" : minim.value
        })
        let requestContent = ({
            method: "POST",
            headers : header,
            body : raw
        })
        fetch("http://localhost:8000/course" , requestContent)
            .then(res => res.text())
            .then(result => {
                if(event) {
                    window.location = "./course.html"
                }
            })


            formElement.reset()
    })
}
addinnm()
