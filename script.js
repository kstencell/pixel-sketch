

let currentColour = "orange"


function createGrid(rows = 16, columns = 16) {

    grid = document.getElementById('grid');
    grid.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            newSquare = document.createElement('div');
            newSquare.classList.add(`row${i}`);
            newSquare.classList.add(`column${j}`);
            newSquare.classList.add("grid-tile");

            grid.appendChild(newSquare);
        }
    }

    const tiles = document.querySelectorAll(".grid-tile");

    tiles.forEach((tile) => {
        tile.addEventListener('mouseover', () => {
            tile.style.backgroundColor = currentColour;
        });
    });

    grid.style['grid-template-columns'] = `repeat(${columns}, calc(100% / ${columns}))`;
    grid.style['grid-template-rows'] = `repeat(${rows}, calc(100% / ${rows}))`;
}

let regex = /^[0-9]+$/;
let resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {

    const tiles = document.querySelectorAll(".grid-tile");
    tiles.forEach((tile) => {
        tile.style.backgroundColor = 'black';
    });
    
    let rows;
    do {
        rows= prompt('How many rows would you like the grid to have?');
    } while (!rows.match(regex) && rows >=1 && rows <=16);

    let columns;
    do {
        columns= prompt('How many columns would you like the grid to have?');
    } while (!columns.match(regex) && rows >= 1 && rows <= 16);

    createGrid(rows, columns);
});

let eraserBtn = document.getElementById('eraser-btn');
eraserBtn.addEventListener('click', () => {
    currentColour = 'black';
})

let colourBtn = document.getElementById('colour-btn');
colourBtn.addEventListener('click', () => {
    let newColour = prompt("Choose a colour");
    currentColour = newColour;
})

createGrid();
