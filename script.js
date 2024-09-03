console.log('Hello World');

const container = document.querySelector('.container');
const sizeForm = document.querySelector('#sizeForm');
const gridlinesCheckbox = document.querySelector('#showGridLines');
const colorPicker = document.querySelector('#colorPicker');
const h1 = document.querySelector('h1');
const randomColor = document.querySelector('#randomColor');

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

// Overlap existing event listener for coloring gridboxes declared in generateGrid(), when color picker value changes
colorPicker.addEventListener('input', () => {

    color = colorPicker.value;

    h1.style.color = color;

    document.querySelectorAll('.gridbox').forEach(element => {
        element.addEventListener('mouseover', () => {
            if (isMouseDown) {
                if (randomColor.checked){
                    element.style.backgroundColor = getRandomColor();
                } else {
                    element.style.backgroundColor = color;
                }
            }
        });
    
        element.addEventListener('mousedown', () => {
            if (randomColor.checked){
                element.style.backgroundColor = getRandomColor();
            } else {
                element.style.backgroundColor = color;
            }
        });
    });
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
                if (randomColor.checked){
                    gridbox.style.backgroundColor = getRandomColor();
                } else {
                    gridbox.style.backgroundColor = colorPicker.value;
                }
            }
        });

        gridbox.addEventListener('mousedown', () => {
            if (randomColor.checked){
                gridbox.style.backgroundColor = getRandomColor();
            } else {
                gridbox.style.backgroundColor = colorPicker.value;
            }
        });
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}