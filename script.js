//Configurar la apliacación

const mensajeInicial = 'Empieza a adivinar...'
let score = 21
let highScore = 1
const secretNumber = Math.trunc(Math.random() * 20) + 1

// Seleccionar los elementos del DOM

const messageField = document.querySelector('.message')
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const secretNumberField = document.querySelector('.number')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessNumberField = document.querySelector('.guess')

// Inicializar la aplicación

messageField.textContent = mensajeInicial
scoreField.textContent = 300
highScoreField.textContent = 1100
secretNumberField.textContent = secretNumber

// Funcionalidad de la aplicación

// Función que recibe otra función como argumento

checkButton.addEventListener('click', () => {
  //Obtener el valor del input
  const guessNumber = Number(guessNumberField.value)
  //Comparlo con el secret number
  if (guessNumber > secretNumber) {
    messageField.textContent = 'El número es menor'
  } else if (guessNumber < secretNumber) {
    messageField.textContent = 'El número es mayor'
  } else {
    messageField.textContent = 'Acertaste!'
  }
  //Actualizar el mensaje
  //Actualizar el score
  score--
  //Actualizar el highscore
})
