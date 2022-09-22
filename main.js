function startTimer(duration, display) {
  var timer = duration,
    days,
    hours,
    minutes,
    seconds

  setInterval(function () {
    days = parseInt(timer / 550, 10)
    hours = parseInt(timer / 150, 10)
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    if (seconds == 0) {
      minutes = minutes - 1
    }

    days = days < 10 ? '0' + days : days
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    display.textContent = days + ':' + hours + ':' + minutes + ':' + seconds

    if (--timer < 0) {
      timer = duration
    }
  }, 1000)
}

window.onload = function () {
  var duration = 60 * 60 // Conversão para segundos
  var display = document.querySelector('#timer') // Elemento para exibir o timer

  startTimer(duration, display) // Inicia a função
}
