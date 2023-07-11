const thankElements = document.getElementsByClassName('thank-you')
const ratingElements = document.getElementsByClassName('rating')
const ratingBlock = document.getElementById('rating-block')
const submitButton = document.getElementById("submit-btn")
const mainContainer = document.querySelector("main")
let ratingValue = 0

submitButton.addEventListener('click',switchPage)


function hideElements(name){
    for(let i = 0; i < name.length; i++) {
        name[i].style.setProperty("display","none")
    }
}

function showElements(name){
    for(let i = 0; i < name.length; i++) {
        name[i].style.setProperty("display","block")
    }
}

function changeRatingValue(e){
    if(ratingValue != 0)
        document.getElementById(ratingValue).setAttribute("class","ratingButton")
    ratingValue = e.target.id
    e.target.setAttribute("class", "ratingButton selected")
}


function createRatingButtons(){
    for(let i = 1; i <= 5; i++){
        const ratingElement = document.createElement('button')
        ratingElement.id = i
        ratingElement.innerText = i
        ratingElement.setAttribute("class","ratingButton")
        ratingElement.addEventListener('click', changeRatingValue)
        ratingBlock.appendChild(ratingElement)
    }
}


function switchPage(){
    if(ratingValue == 0) return
    document.getElementById("selected-rate").innerText = ratingValue
    mainContainer.setAttribute("class","thank-page")
    hideElements(ratingElements)

    let i = 0
    mainContainer.style.opacity = 0
    showElements(thankElements)
    setInterval(function() {if(i <= 10) mainContainer.style.setProperty("opacity", 0.1 * i++)}, 40);  
    
}


hideElements(thankElements)
//hideElements(ratingElements)
createRatingButtons()