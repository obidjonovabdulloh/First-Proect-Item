const formElement = document.querySelector(".login_title")
const emailElement = document.getElementById("input_email")
const passworElement = document.getElementById("input_password")
 

function ligin() {
    formElement.addEventListener("submit" , e => {
        e.preventDefault()
        let header = new Headers
        header.append("Content-type" , "application/json")
        let row = JSON.stringify({
            "email": emailElement.value,
            "password" : passworElement.value
        })
        let reqContent = ({
            method : "POST",
            headers : header,
            body : row
        })
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:vR9Klpfo/auth/login", reqContent)
        .then(res => res.text())
        .then(result => {
            if(JSON.parse(result).authToken) {
                window.localStorage.setItem("token" , result)
                window.location = "./index.html"
            }else {
                window.localStorage.removeItem("token")
            }
            if(JSON.parse(result).message) {
                passworElement.classList.add("input_email")
                emailElement.classList.add("input_email")
            }
        })
    })
}
ligin()