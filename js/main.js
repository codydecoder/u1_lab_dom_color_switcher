// Write your DOM code here!
const red = document.querySelector('.red')
red.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red'
    document.body.style.color = 'white'
})

const white = document.querySelector('.white')
white.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
})

const blue = document.querySelector('.blue')
blue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue'
    document.body.style.color = 'white'
})

const yellow = document.querySelector('.yellow')
yellow.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow'
    document.body.style.color = 'black'
})
