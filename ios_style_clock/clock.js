const secondHand = document.querySelector('[data-second-hand]')
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')

function setRotation(element, rotationRatio) {
    element.style.setProperty('--angle',rotationRatio * 360+"deg");
}


function setClock() {
    const currentDate = new Date()
    const millisecondRatio = currentDate.getMilliseconds() / 1000
    const secondRatio = ( millisecondRatio + currentDate.getSeconds()) / 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12
    setRotation(secondHand,secondRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
}

setInterval(setClock, 20)

setClock()
