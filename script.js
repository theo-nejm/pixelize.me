const cells = document.querySelectorAll('.cell')
const clearButton = document.getElementById('clear')
const previewButton = document.getElementById('preview')
const colorInput = document.querySelector('#color-input')
let color = '#000'

const colorsOpener = document.getElementById('colors-opener')
const asideMenu = document.querySelector('.aside-menu')

const colorSelector1 = document.querySelector('#color-select-1')
const colorSelector2 = document.querySelector('#color-select-2')
const colorSelector3 = document.querySelector('#color-select-3')
const colorSelector4 = document.querySelector('#color-select-4')
const colorSelector5 = document.querySelector('#color-select-5')

colorInput.addEventListener('change', () => {
    color = colorInput.value
    console.log(color)
})

let onClick = false;

window.addEventListener('mousedown', () => {
    onClick = true;
})

window.addEventListener('mouseup', () => {
    onClick = false;
})

window.addEventListener('drag', e => e.preventDefault())
window.addEventListener('dragstart', e => e.preventDefault())
window.addEventListener('dragover', e => e.preventDefault())
window.addEventListener('dblclick', e => e.preventDefault())


cells.forEach(cell => {
    cell.addEventListener('mouseover', event => {
    if(onClick) {
        if(event.ctrlKey) {
            cell.style.backgroundColor = '#FFF'
        } else {
            cell.style.backgroundColor = color
        }
    }
    });
    cell.addEventListener('mousedown', event => {
        !event.ctrlKey ?
            cell.style.backgroundColor = color :
            cell.style.backgroundColor = '#FFF'

    });
})

clearButton.addEventListener('click', () => {
    cells.forEach(cell => cell.style.background = '#FFF')
})

previewButton.addEventListener('mousedown', () => {
    cells.forEach(cell => cell.style.border = 'none')
})

previewButton.addEventListener('mouseup', () => {
    cells.forEach(cell => cell.style.border = '1px solid black')
})

colorsOpener.addEventListener('click', e => {
  asideMenu.classList.toggle('shown')
  colorsOpener.classList.toggle('shown')
})

colorSelector1.addEventListener('click', () => {
  color = 'black'
})

colorSelector2.addEventListener('click', () => {
  color = 'red'
})

colorSelector3.addEventListener('click', () => {
  color = 'green'
})

colorSelector4.addEventListener('click', () => {
  color = 'blue'
})

colorSelector5.addEventListener('click', () => {
  color = 'gray'
})
