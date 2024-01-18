// configurar la aplicación
const mensajeInicial = 'Empieza a adivinar...'
const INIT_SCORE = 20
const INIT_HIGH_SCORE = 0

// variables de la aplicación
let score
let highScore
let secretNumber = Math.trunc(Math.random() * 20) + 1

// seleccionar elementos del DOM
const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const secretNumberField = document.querySelector('.number')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessNumberField = document.querySelector('.guess')

// inicializar la aplicación
initApp()

// funcionalidad de la aplicación

// addEventListener es una función que recibe
// como argumento otra función. En este caso al usarla solo una vez, la escribimos dentro del listener.
// dentro del parámetro. Una función anónima.
checkButton.addEventListener('click', () => {
  // obtener el valor del input
  const guessNumber = Number(guessNumberField.value)
  if (guessNumber > secretNumber) {
    // actualizar el mensaje
    // actualizar el score
    score--
    scoreField.textContent = INIT_SCORE
    document.body.style.backgroundColor = 'tomato'
    messageField.textContent = 'Te has pasado'
  } else if (guessNumber < secretNumber) {
    // actualizar el mensaje
    // actualizar el score
    score--
    scoreField.textContent = score
    document.body.style.backgroundColor = 'tomato'
    messageField.textContent = 'Te has quedado corto'
  } else {
    // ha ganado...
    messageField.textContent = 'Correcto!'
    checkButton.disabled = true
    secretNumberField.style.backgroundColor = 'yellow'
    // cambiar fondo de pantalla
    document.body.style.backgroundColor = 'limegreen'
    // mostrar el número secreto
    secretNumberField.textContent = secretNumber
    // actualizar el highScore
    if (score > highScore) {
      highScore = score
      localStorage.setItem('highscore', highScore)
      highScoreField.textContent = score
    }
  }

  // compararlo con el secretNumber
})

function initApp() {
  checkButton.disabled = false
  guessNumberField.value = ''
  // Inicializar score
  // FIXME: ERRORES

  score = INIT_SCORE
  scoreField.textContent = score

  // TODO: inicializar highscore
  // habría que leer de algún almacenamiento: cookies...
  // Si no está inicializarlo con init_high_score
  // || Primer valor no nulo. Si es nulo, usease 0, coje el highscore
  highScore = Number(localStorage.getItem('highscore')) || INIT_HIGH_SCORE

  // Pendiente añadir excepciones? try-catch

  // Ver en pantalla
  highScoreField.textContent = highScore

  // Inicializar texto
  messageField.textContent = mensajeInicial

  // Inicializar número secreto
  secretNumber = Math.trunc(Math.random() * 20) + 1
  secretNumberField.textContent = '?'

  // Inicializar color de fondo
  document.body.style.backgroundColor = '#222'
  secretNumberField.style.backgroundColor = '#fff'
}

againButton.addEventListener('click', initApp)
