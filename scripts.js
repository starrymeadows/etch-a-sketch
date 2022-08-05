const container = document.querySelector('.container');
const resizeBtn = document.querySelector('.resize');
resizeBtn.addEventListener('click', resizeGrid);
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', resetGrid);
const toggleBtn = document.querySelector('.toggle');
toggleBtn.addEventListener('click', toggleBorder);

const classicBtn = document.getElementById('classic');
classicBtn.addEventListener('click', () => fillType = "classic");
const pencilBtn = document.getElementById('pencil');
pencilBtn.addEventListener('click', () => fillType = "pencil");
const randomBtn = document.getElementById('random');
randomBtn.addEventListener('click', () => fillType = "random");

let fillType = "classic";
let gridSize = 25;

function buildGrid() {
    for (i = 0; i < gridSize; i++) {
        const row = document.createElement('row');
        row.className = "row";
        container.appendChild(row);
        for (j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.className = "cell";
            cell.addEventListener('mouseover', () => {
                cell.classList.add(fillType);
                switch (fillType) {
                    case "random":
                        let randomColor = Math.floor(Math.random()*16777215).toString(16);
                        cell.style.backgroundColor = `#${randomColor}`;
                }
            });
            row.appendChild(cell);
        }
    }
    resizeCells(gridSize);
}

// switch case for fillType: classic, pencil, random
function fill(type) {
    switch (type) {
        case "pencil":
            fillType = "pencil";
        
        default:
            fillType = "classic";
    }
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
    });
}

function resizeGrid() {
    let input = prompt("Enter grid size (1-100)", "16");
    if (input < 1 || input > 100) {
        alert("Error: only numbers between 1 and 100 are valid.");
    } else if (input !== null || input !== "") {
        gridSize = parseInt(input);
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        buildGrid();
    }
}

function toggleBorder() {
    const toggle = document.querySelectorAll(".cell");
    toggle.forEach((cell) => {
        cell.classList.toggle("no-border");
    });
}