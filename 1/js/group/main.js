const FFragment = document.createDocumentFragment()


let array = []

function Group() {
    fetch("http://localhost:8000/group")
        .then(res => res.json())
        .then(retur => {
            array = retur
            GroupUser(array)
        })
}
Group()

const GroupUser = (array) => {
    let fatt = document.querySelector(".dkl")
    array.forEach(elem => {
        let Clone = templateGroup.content.cloneNode(true)
        Clone.querySelector(".Gname").textContent = elem.groupname,
        Clone.querySelector(".Gteach").textContent = elem.groupteacher,
        Clone.querySelector(".Gway").textContent = elem.groupway,
        Clone.querySelector(".Gdata").textContent = elem.groupdata,
        Clone.querySelector(".Gways").textContent = elem.groupwaay,

        FFragment.appendChild(Clone)
    })
    fatt.appendChild(FFragment)
}



const frfragment = document.createDocumentFragment();

let bosh = []

function Teach() {
    fetch("http://localhost:8000/teachers")
    .then(res => res.json())
    .then(resqu => {
        bosh = resqu,
        UserSelect(bosh)
    })
}
Teach()

const UserSelect = (bosh) => {
    let grTeachElement = document.querySelector("#grTeach")
    bosh.forEach((elem) => {
        let cloo = tempTeach.content.cloneNode(true)
        cloo.querySelector(".oppp").textContent = elem.name
        frfragment.appendChild(cloo)
    })
    grTeachElement.append(frfragment)
}





const fgfragment = document.createDocumentFragment()

let brray = []
function wwway() {
    fetch("http://localhost:8000/course")
    .then(res => res.json())
    .then(resuu => {
        brray = resuu
        userCour(brray)
    })
}
wwway()


const userCour = (brray) => {
    let grwaysElement = document.querySelector("#grways")
    brray.forEach((elemmm) => {
        let climn = tempGr.content.cloneNode(true)
        climn.querySelector(".grgr").textContent = elemmm.title

        fgfragment.appendChild(climn)
    })
    grwaysElement.append(fgfragment)
}


const addaaddElement = document.querySelector(".addaadd")
const GroupModallElemnet = document.querySelector(".GroupModall")
const inconbutElement = document.querySelector("#inconbut")

addaaddElement.addEventListener("click" , event => {
    GroupModallElemnet.classList.add("GroupModal")
    GroupModallElemnet.classList.remove("GroupModall")
})
inconbutElement.addEventListener("click" , event => {
    GroupModallElemnet.classList.remove("GroupModal")
    GroupModallElemnet.classList.add("GroupModall")
})



const gFormElement = document.querySelector("#gForm")
const GrnameElement = document.querySelector("#Grname")
const grTeachElement = document.querySelector("#grTeach")
const wayssElement = document.querySelector("#wayss")
const grwaysElement = document.querySelector("#grways")
const inpudaElement = document.querySelector(".inpuda")


function addUsser() {
    gFormElement.addEventListener("submit" , event => {
        event.preventDefault()
        let header = new Headers
        header.append("Content-type" , "application/json")
        let row = JSON.stringify({
            "groupname" : GrnameElement.value,
            "groupway" : wayssElement.value,
            "groupwaay" : grwaysElement.value,
            "groupteacher" : grTeachElement.value,
            "groupdata" : inpudaElement.value
        })
        let requestt = ({
            method : "POST",
            headers : header,
            body : row
        })
        fetch("http://localhost:8000/group" , requestt)
        .then(rus => rus.text())
    })
}
addUsser()
