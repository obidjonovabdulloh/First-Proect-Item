const Fragmnet = document.createDocumentFragment()

let array = []

function UserStudents() {
    fetch("http://localhost:8000/students")
    .then(res => res.json())
    .then(result =>  {
        array = result
        Studets(array)
    })
}
UserStudents()

const Studets = (array) => {
    const mtitleElement = document.querySelector(".ollo")
    array.forEach(elem => {
        let Clone = templateUsers.content.cloneNode(true)
        Clone.querySelector(".nameClass").textContent = elem.name
        Clone.querySelector(".surenameClass").textContent = elem.surename
        Clone.querySelector(".ageClass").textContent = elem.age
        Clone.querySelector(".groupClass").textContent = elem.Sgroup
        Clone.querySelector(".wayClass").textContent = elem.Sway
        Clone.querySelector(".numberClass").textContent = elem.Snumber
        Fragmnet.appendChild(Clone)
    });
    mtitleElement.appendChild(Fragmnet)
}


const FragmetnOption = document.createDocumentFragment()

let option = []


function OptionUser() {
    fetch("http://localhost:8000/course")
    .then(req => req.json())
    .then(retur => {
        option = retur
        UserOption(option)
    })
}
OptionUser()

const UserOption = (option) => {
    const GselectElement = document.querySelector("#Wselect")
    option.forEach((element) => {
        let opClone = tempOption.content.cloneNode(true)
        opClone.querySelector("#oppo").textContent = element.title
        FragmetnOption.appendChild(opClone)
    })
    GselectElement.appendChild(FragmetnOption)
}


const FragmentGroup = document.createDocumentFragment()

let graoupElement = []

function groupUser() {
    fetch("http://localhost:8000/group")
    .then(reu => reu.json())
    .then(reast => {
        graoupElement = reast
        Usergroup(graoupElement)
    })
}
groupUser()

const Usergroup = (graoupElement) => {
    const GselectElemett = document.querySelector("#Gselect")
    graoupElement.forEach((gelem) => {
        let Gclone = tempGroup.content.cloneNode(true)
        Gclone.querySelector("#goppo").textContent = gelem.groupname
        FragmentGroup.appendChild(Gclone)
    })
    GselectElemett.appendChild(FragmentGroup)
}

const addbutonElemwnt = document.querySelector("#addbuton")
const studentmodallElement = document.querySelector(".studentmodall")
const idElement = document.querySelector("#id")

addbutonElemwnt.addEventListener("click" , event => {
    studentmodallElement.classList.add("studentmodal")
    studentmodallElement.classList.remove("studentmodall")
})
idElement.addEventListener("click" , event => {
    studentmodallElement.classList.remove("studentmodal")
    studentmodallElement.classList.add("studentmodall")
})


const registElement = document.querySelector("#regist")
const inputnElement = document.querySelector("#inputn")
const inputsuElement = document.querySelector("#inputsu")
const inputaElement = document.querySelector("#inputa")
const inputrElement = document.querySelector("#inputr")
const WselectElement = document.querySelector("#Wselect")
const GselectElement = document.querySelector("#Gselect")

function Regist() {
    registElement.addEventListener("submit" , event => {
        event.preventDefault()
        let header = new Headers
        header.append("Content-type" , "application/json")
        let row = JSON.stringify({
            "name" : inputnElement.value,
            "surename" : inputsuElement.value,
            "age" : inputaElement.value,
            "Sgroup" : GselectElement.value,
            "Sway" : WselectElement.value,
            "Snumber" : inputrElement.value
        }) 
        let requierd = ({
            method : "POST",
            headers : header,
            body : row
        })
        fetch("http://localhost:8000/students" , requierd)
        .then(ref => ref.text())
        .then(reult => {
           if(reult) {
            window.location = "./student.html"
           }
        })
    })
}
Regist()