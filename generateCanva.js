const workSpace = document.querySelector('.workspace')

const table = document.createElement('table')
table.id = 'capture';

let counterTr = 0
let counterTd = 0

while(counterTr <= 32) {
    const tr = document.createElement('tr')

    while (counterTd <= 32){
        const td = document.createElement('td')
        td.classList.add('cell')
        tr.appendChild(td);
        counterTd++
    }

    counterTd = 0
    table.appendChild(tr);
    counterTr++
}

workSpace.appendChild(table)
