const second = document.querySelector('.clock__second'),
  minute = document.querySelector('.clock__minute'),
  hour = document.querySelector('.clock__hour')

function clock () {
  const date = new Date(),
    secondsDate = date.getSeconds() / 60,
    minutesDate = (secondsDate + date.getMinutes()) / 60,
    hoursDate = (minutesDate + date.getHours()) / 12

  function rotation(element, rotationRatio) {
    element.style.setProperty('--position', rotationRatio * 360)
  }

  rotation(second, secondsDate)
  rotation(minute, minutesDate)
  rotation(hour, hoursDate)
}

clock()
setInterval(clock, 1000)