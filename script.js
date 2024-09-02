console.log('Hello World');

container = document.querySelector('.container');

let gridsize = 10;

for (let i = 0; i < gridsize ** 2; i++) {
    gridbox = document.createElement('div');
    gridbox.classList.add('gridbox');
    gridbox.style.width = `${100 / gridsize}%`;
    container.appendChild(gridbox);
}

let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

gridboxes = document.querySelectorAll('.gridbox')

gridboxes.forEach((gridbox) => {
    gridbox.addEventListener('mouseover', () => {
        if (isMouseDown) {
            gridbox.style.backgroundColor = 'black';
        }
    });

    gridbox.addEventListener('mousedown', () => {
        gridbox.style.backgroundColor = 'black';
    });
});