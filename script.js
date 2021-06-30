

let currentColour = "#000000";
let currentBackgroundColour = "#ffffff";


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
        tile.style.backgroundColor = currentBackgroundColour;
        tile.addEventListener('mouseover', () => {
            tile.style.backgroundColor = currentColour;
        });
    });

    grid.style['grid-template-columns'] = `repeat(${columns}, calc(100% / ${columns}))`;
    grid.style['grid-template-rows'] = `repeat(${rows}, calc(100% / ${rows}))`;
}

let gridSlider = document.getElementById('myRange');
gridSlider.value = 16;
let sliderText = document.getElementById('slider-text');
gridSlider.addEventListener('change', () => {
    createGrid(gridSlider.value, gridSlider.value);
    sliderText.innerHTML = `Grid size: ${gridSlider.value}x${gridSlider.value}`;
})

let eraserBtn = document.getElementById('eraser-btn');
eraserBtn.addEventListener('click', () => {
    console.log(currentBackgroundColour);
    currentColour = currentBackgroundColour;
    console.log(`background colour for eraser is ${currentBackgroundColour}`);
});

let resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {

    createGrid(gridSlider.value, gridSlider.value);

    const tiles = document.querySelectorAll(".grid-tile");
    tiles.forEach((tile) => {
        tile.style.backgroundColor = currentBackgroundColour;
    });
});

let colourPicker = document.getElementById('colour-picker');
colourPicker.value = currentColour;
colourPicker.addEventListener("change", () => {
    currentColour = colourPicker.value;
    console.log(currentColour);
});

let backgroundColourPicker = document.getElementById('background-colour-picker');
backgroundColourPicker.value = currentBackgroundColour;
backgroundColourPicker.addEventListener("change", () => {
    currentBackgroundColour = backgroundColourPicker.value;
    const tiles = document.querySelectorAll(".grid-tile");
    tiles.forEach((tile) => {
            tile.style.backgroundColor = currentBackgroundColour;
    });
    console.log(currentBackgroundColour);
});

createGrid();


