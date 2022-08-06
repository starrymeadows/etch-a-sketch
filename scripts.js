const container = document.querySelector('.container');
const resizeBtn = document.querySelector('.resize');
resizeBtn.addEventListener('change', resizeGrid);
resizeBtn.addEventListener('mousemove', () => updateGridText());
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', resetGrid);
const toggleBtn = document.querySelector('.toggle');
toggleBtn.addEventListener('click', toggleBorder);

const classicBtn = document.getElementById('classic');
classicBtn.addEventListener('click', makeBlack);
const randomBtn = document.getElementById('random');
randomBtn.addEventListener('click', makeRandom);

let fillColor = "black";
let fillType = "classic"
let gridSize = resizeBtn.value;

function buildGrid() {
    for (i = 0; i < gridSize; i++) {
        const row = document.createElement('row');
        row.className = "row";
        container.appendChild(row);
        for (j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.className = "cell";
            cell.addEventListener('mouseover', fillCell);
            row.appendChild(cell);
        }
    }
    resizeCells(gridSize);
    updateGridText();
}

function fillCell(e) {
    e.target.classList.add('filled');
    if (fillType == "random") {
        addColor();
    }
    e.target.style.backgroundColor = fillColor;
}

function makeRandom(e) {
    fillType = "random";
    const filled = document.querySelectorAll(".filled");
    filled.forEach(cell => {
        addColor();
        cell.style.backgroundColor = fillColor;
    });
}

function addColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    fillColor = `#${randomColor}`;
}

function makeBlack(e) {
    fillColor = "black";
    fillType = "classic";
    const filled = document.querySelectorAll(".filled");
    filled.forEach(cell => {
        cell.style.backgroundColor = fillColor;
    });
}

buildGrid();

// determine cell size
function resizeCells(gridSize) {
    const BOARD_SIZE = 500;
    cellSize = (BOARD_SIZE / gridSize).toFixed(1) + `px`;
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.height = cellSize;
        cell.style.width = cellSize;
    });
}

function resetGrid() {
    const cells = document.querySelectorAll('.filled');
    cells.forEach((cell) => {
        cell.classList.remove('filled');
        cell.style.backgroundColor = 'white';
    });
}

function resizeGrid() {
    let input = resizeBtn.value;
    gridSize = parseInt(input);
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        buildGrid();
}

function updateGridText () {
    const sizeText = document.querySelector(".size");
    sizeText.textContent = `${resizeBtn.value} x ${resizeBtn.value}`;
}

function toggleBorder() {
    const toggle = document.querySelectorAll(".cell");
    toggle.forEach((cell) => {
        cell.classList.toggle("no-border");
    });
}