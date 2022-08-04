const container = document.querySelector('.container');

function buildGrid() {
    for (i = 0; i < 16; i++) {
        const row = document.createElement('row');
        row.className = "row";
        container.appendChild(row);
        for (j = 0; j < 16; j++) {
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