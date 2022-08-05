const container = document.querySelector('.container');

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
}

buildGrid();
resizeCells(gridSize);
console.log(cellSize);

// determine cell size
function resizeCells(gridSize) {
    cellSize = (500 / gridSize).toFixed(1) + `px`;

    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.height = cellSize;
        cell.style.width = cellSize;
    });
}
