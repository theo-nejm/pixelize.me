const capture = document.getElementById('capture');
const saveButton = document.querySelector('.save-draw')
const canvasPlace = document.querySelector('.canvas-place')
const resultCard = document.querySelector('.result-card')
const keepDrawingBtn = document.querySelector('.keep-drawing')
const downloadBtn = document.querySelector('.download')
let isCanvas = false;

saveButton.addEventListener('click', () => {
  cells.forEach(cell => cell.style.border = 'none')

  if(!isCanvas) {
    html2canvas(capture).then(canvas => {
      isCanvas = true;
      canvasPlace.appendChild(canvas);
      resultCard.classList.add('shown')
    })
  }
})

keepDrawingBtn.addEventListener('click', () => {
  document.querySelector('canvas').remove()
  resultCard.classList.remove('shown');

  isCanvas = false;
})

downloadBtn.addEventListener('click', () => {
  const canvas = document.querySelector('canvas')
  if(window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(canvas.msToBlob(), 'my-pixel-art.png')
  } else {
    const a = document.createElement('a');

    document.body.appendChild(a)

    a.href = canvas.toDataURL();
    a.download = 'my-pixel-art.png';
    a.click()
    document.body.removeChild(a)
  }
})
