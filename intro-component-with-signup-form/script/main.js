
const inputAreas = document.getElementsByTagName("input")

const inputContainers = document.getElementsByClassName("input-box")

const errorMessages = []

for(let i = 0; i < inputContainers.length; i++){
    let errorMessage = document.createElement("p")
    
    errorMessage.setAttribute("class","error-message")
    errorMessages[i] = errorMessage
    inputContainers[i].appendChild(errorMessage)
}

function checkFormInput(i) {
    let userInput = inputAreas[i].value
    var validRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if(userInput.length <= 0){
        errorMessages[i].innerText = inputAreas[i].placeholder + " can not be empty"
        errorMessages[i].style.setProperty("display","block")
        inputAreas[i].setAttribute("class","input-error")
        return false

    }

    else if(i == 2 && !userInput.match(validRegex)) { //if it is the e-mail input box
        
            errorMessages[i].innerText = "Looks like this is not an email"
            errorMessages[i].style.setProperty("display","block")
            inputAreas[i].setAttribute("class","input-error")
            return false
    }
    else {
        errorMessages[i].style.setProperty("display","none")
        inputAreas[i].removeAttribute("class","input-error")
        return true
    }
}

function checkAllInput() {
    let isValid = true
    for(let i = 0; i < inputAreas.length; i++) {
        if(checkFormInput(i) == false)
            isValid = false
    }
    return isValid
}


//errorMessages[2].style.setProperty("display","block")




