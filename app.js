const board = document.querySelector('#board')

const SQUARES_NUMBER = 2108
const colors = ['#67E667', '#7277D8', '#FFDA73', '#FF7373', '#5CCDC9']

const setColor = (element) => {
    console.log(123)
    const color = getRandomColor()

    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`
}

const removeColor = (element) => {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length)

    return colors[index]
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')

    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}
