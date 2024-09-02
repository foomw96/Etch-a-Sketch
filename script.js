console.log('Hello World');

const container = document.querySelector('.container');
const sizeForm = document.querySelector('#sizeForm');
const gridlinesCheckbox = document.querySelector('#showGridLines');

let gridsize = 16;
generateGrid(gridsize);

/* Flag to allow for coloring when mouse button is held down */
let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

gridlinesCheckbox.addEventListener('change', ()=>{
    document.querySelectorAll('.gridbox').forEach(element => {
        element.classList.toggle('bordered', gridlinesCheckbox.checked);
    });
});

/* On button click, change grid size according to the input size*/
sizeForm.addEventListener('submit', (event) => {
    /* this line is so important, if not the page will just refresh*/
    event.preventDefault();

    let inputSize = parseInt(document.querySelector('#inputSize').value);
    generateGrid(inputSize);
});

function generateGrid(size) {
    /* Delete all existing gridboxes */
    document.querySelectorAll('.gridbox').forEach(element => {
        element.remove();
    });

    /* Generate gridboxes based on input grid size */
    for (let i = 0; i < size ** 2; i++) {
        const gridbox = document.createElement('div');
        gridbox.classList.add('gridbox');
        gridbox.style.width = `${100 / size}%`;
        container.appendChild(gridbox);
    }

    /* Add event listener to all gridboxes, to allow for coloring */
    /* colors the grid box if mousedown, or if mousedown and hovered over*/
    gridboxes = document.querySelectorAll('.gridbox');

    gridboxes.forEach((gridbox) => {

        // toggle borders depending on whether its checked
        gridbox.classList.toggle('bordered', gridlinesCheckbox.checked);

        gridbox.addEventListener('mouseover', () => {
            if (isMouseDown) {
                gridbox.style.backgroundColor = 'black';
            }
        });

        gridbox.addEventListener('mousedown', () => {
            gridbox.style.backgroundColor = 'black';
        });
    });
}