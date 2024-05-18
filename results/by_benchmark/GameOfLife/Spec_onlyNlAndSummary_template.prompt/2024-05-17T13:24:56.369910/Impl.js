// Assuming we have a grid system available as `grid`
// which provides `getCell(index)` to access cell object by index.
// Each cell object has `alive()` method to check its current state.

function countAliveNeighbors(cellIndex, gridSize) {
    let count = 0;
    let x = cellIndex % gridSize;
    let y = Math.floor(cellIndex / gridSize);

    // Check all eight possible neighbors
    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            if (dx === 0 && dy === 0) continue; // Skip the cell itself
            let nx = x + dx;
            let ny = y + dy;
            if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize) {
                let neighborIndex = ny * gridSize + nx;
                if (grid.getCell(neighborIndex).alive()) {
                    count++;
                }
            }
        }
    }
    return count;
}

// Predicate to determine if a cell should come alive
function comeAlive(index, gridSize) {
    const aliveNeighbors = countAliveNeighbors(index, gridSize);
    const isAlive = grid.getCell(index).alive();

    // Cell comes alive if exactly 3 neighbors are alive, or it stays alive if 2 or 3 neighbors are alive
    return (!isAlive && aliveNeighbors === 3) || (isAlive && (aliveNeighbors === 2 || aliveNeighbors === 3));
}

// Predicate to determine if a cell should die
function comeDead(index, gridSize) {
    const aliveNeighbors = countAliveNeighbors(index, gridSize);
    // Cell dies if it has fewer than 2 or more than 3 living neighbors
    return aliveNeighbors < 2 || aliveNeighbors > 3;
}

// Function to change the state of a cell
function changeState(index, gridSize) {
    if (comeAlive(index, gridSize)) {
        grid.getCell(index).setAlive(true);
    } else if (comeDead(index, gridSize)) {
        grid.getCell(index).setAlive(false);
    }
}

