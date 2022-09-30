let fragmnt = document.createDocumentFragment();

let aray = []
function useruser() {
    fetch("http://localhost:8000/students")
    .then(res => res.json())
    .then(result => {
        aray = result
        LenUser(aray)
    })
}
useruser()

const LenUser = (aray) => {
    let for_fElement = document.querySelector(".for_f")
    aray.forEach(eleent => {
        let Clone = templateInfors.content.cloneNode(true)
        Clone.querySelector(".name_i").textContent = eleent.name
        Clone.querySelector(".age_i").textContent = eleent.age
        Clone.querySelector(".group_i").textContent = eleent.Sgroup
        Clone.querySelector(".number_i").textContent = eleent.Snumber
        Clone.querySelector(".sure").textContent = eleent.surename
        fragmnt.appendChild(Clone)
    });
    for_fElement.appendChild(fragmnt)
}


const frugmmnet = document.createDocumentFragment()

let ara = []
function uruser() {
    fetch(" http://localhost:8000/teachers")
    .then(req => req.json())
    .then(rult => {
        ara = rult
        Lenser(ara)
    })
}
uruser()

const Lenser = (ara) =>{
    let polopElement = document.querySelector(".polop")
    ara.forEach((eele) => {
        let Cline = templatete.content.cloneNode(true)
        Cline.querySelector("#leid").textContent = eele.id
        Cline.querySelector("#nameteach").textContent = eele.name
        Cline.querySelector("#surenamee").textContent = eele.surename
        frugmmnet.appendChild(Cline)
    })
    polopElement.append(frugmmnet)
}


const localbutElement = document.querySelector("#localbut")

localbutElement.addEventListener("click" , event => {
    window.location = "./student.html"
})


let sasasa = document.querySelector("#sapn")
let sasasaer = document.querySelector("#sapn1")
let sasasae = document.querySelector("#sapn2")
let sasasaes = document.querySelector("#sapn3")

function loca() {
    fetch(" http://localhost:8000/students")
    .then(res => res.json())
    .then(result => {
        sasasa.textContent = result.length
    })
}
loca()

function locas() {
    fetch(" http://localhost:8000/teachers")
    .then(rs => rs.json())
    .then(reslt => {
        sasasaer.textContent = reslt.length
    })
}
locas()


function locaer() {
    fetch("http://localhost:8000/group")
    .then(rss => rss.json())
    .then(reslts => {
        sasasae.textContent = reslts.length
    })
}
locaer()


function locae() {
    fetch("http://localhost:8000/course")
    .then(rsss => rsss.json())
    .then(resltss => {
        sasasaes.textContent = resltss.length
    })
}
locae()