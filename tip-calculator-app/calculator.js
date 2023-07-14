
const billInput = document.getElementById("bill-input")
const customTipInput = document.getElementById("custom-tip-input")
const numberOfPeopleInput = document.getElementById("number-of-people-input")
const tipRateButtons = document.getElementsByClassName("tip-rate")

const tipOutput = document.getElementById("tip-output")
const totalOutput = document.getElementById("total-output")
const resetButton = document.getElementById("reset-button")

let bill = 0
let tipRate = null
let numberOfPeople = 0


resetButton.addEventListener("click",resetAll)


function setBill() {
    bill = billInput.value
    if(billInput == "") {
        bill = 0
    }
}

billInput.addEventListener("input",setBill)
billInput.addEventListener("input",showResult)

function setTipRate()  {

    for(let i  = 0; i < tipRateButtons.length; i++) {
        tipRateButtons[i].classList.remove("selected")
    }
    if(event.target.tagName == "SPAN") {
        event.target.classList.add("selected")
        tipRate = event.target.innerText.slice(0,-1)
        customTipInput.value = null
    }
    else{
        tipRate = customTipInput.value
    }
}

for(let i = 0; i < tipRateButtons.length - 1; i++) {
    tipRateButtons[i].addEventListener("click", setTipRate)
    tipRateButtons[i].addEventListener("click", showResult)

}


customTipInput.addEventListener("input", setTipRate)
customTipInput.addEventListener("input", showResult)


function setNumberOfPeople() {
    if(numberOfPeopleInput.value == '') {
        numberOfPeopleInput.classList.add("zero")
        document.getElementById("error-message").style.display = "inline"
        numberOfPeople = 0
    }

    else {
        numberOfPeople = numberOfPeopleInput.value
        numberOfPeopleInput.classList.remove("zero")
        document.getElementById("error-message").style.display = "none"

    }
}


numberOfPeopleInput.addEventListener("input",setNumberOfPeople)
numberOfPeopleInput.addEventListener("input",showResult)

function calTip(bill ,tipRate, numberOfPeoeple) {
    let tip = bill * tipRate * 0.01
    return (tip / numberOfPeoeple).toFixed(2)
}

function calTotal(bill ,tipRate, numberOfPeoeple) {
    let total = bill * (1 + tipRate * 0.01)
    return (total / numberOfPeoeple).toFixed(2)
}

function resetAll() {
    bill = 0
    tipRate = null
    numberOfPeople = 0
    for(let i  = 0; i < tipRateButtons.length; i++) {
        tipRateButtons[i].classList.remove("selected")
    }
    billInput.value = ""
    customTipInput.value = ""
    numberOfPeopleInput.value = ""
    tipOutput.innerText = "0.00"
    totalOutput.innerText = "0.00"
    resetButton.classList.remove("clickable")
    numberOfPeopleInput.classList.remove("zero")
    document.getElementById("error-message").style.display = "none"
}



function showResult() {
    resetButton.classList.add("clickable")
    if(bill != 0 && tipRate != "" && numberOfPeople != 0){
        tipOutput.innerText = calTip(bill, tipRate, numberOfPeople)
        totalOutput.innerText = calTotal(bill, tipRate, numberOfPeople)
    }
    else {
        tipOutput.innerText = "0.00"
        totalOutput.innerText = "0.00"
    }

    if(bill == 0 && tipRate == "" && numberOfPeople == 0) {
        resetButton.classList.remove("clickable")
    }

    console.log('bill: ' + bill)
    console.log('tipRate: ' + tipRate)
    console.log('numberOfPeople:' + numberOfPeople)
}