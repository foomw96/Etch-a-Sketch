console.log('Hello World');

container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    gridbox = document.createElement('div');
    gridbox.classList.add('gridbox');
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