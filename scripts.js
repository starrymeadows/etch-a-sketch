const container = document.querySelector('.container');
const resizeBtn = document.querySelector('.resize');
resizeBtn.addEventListener('click', resizeGrid);
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', resetGrid);

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
                cell.classList.add("filled");
            });
            row.appendChild(cell);
        }
    }
    resizeCells(gridSize);
}


buildGrid();

// determine cell size
function resizeCells(gridSize) {
    cellSize = (500 / gridSize).toFixed(1) + `px`;
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