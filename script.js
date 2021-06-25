



function createGrid(grid) {

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            newSquare = document.createElement('div');
            newSquare.classList.add(`row${i}`);
            newSquare.classList.add(`column${j}`);
            newSquare.classList.add("grid-tile");
            //newSquare.textContent = `${i}, ${j}`;

            grid.appendChild(newSquare);
        }
    }
}

grid = document.getElementById('grid');
createGrid(grid);

const tiles = document.querySelectorAll(".grid-tile");
console.log(tiles);

tiles.forEach((tile) => {
    tile.addEventListener('mousedown, mouseover', () => {
        tile.style.backgroundColor = "orange";
    });
});