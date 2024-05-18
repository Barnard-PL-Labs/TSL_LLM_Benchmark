// Predicate to check if a cell should come alive
function comeAlive(index, cells) {
    const aliveNeighbors = countAliveNeighbors(index, cells);
    return aliveNeighbors === 3 || (cells[index].alive && (aliveNeighbors === 2 || aliveNeighbors === 3));
}

// Predicate to check if a cell should die
function comeDead(index, cells) {
    const aliveNeighbors = countAliveNeighbors(index, cells);
    return aliveNeighbors < 2 || aliveNeighbors > 3;
}

// Function to change the state of a cell
function changeState(index, cells) {
    if (comeAlive(index, cells)) {
        cells[index].alive = true;
    } else if (comeDead(index, cells)) {
        cells[index].alive = false;
    }
}

// Helper function to count alive neighbors
function countAliveNeighbors(index, cells) {
    const neighbors = getNeighborIndices(index);
    return neighbors.reduce((count, neighborIndex) => {
        if (cells[neighborIndex] && cells[neighborIndex].alive) {
            count++;
        }
        return count;
    }, 0);
}

// Assuming a grid layout, compute neighbor indices for a given index
function getNeighborIndices(index) {
    const directions = [
        -1, 1, // left and right
        -gridWidth, gridWidth, // up and down
        -gridWidth - 1, -gridWidth + 1, // upper left and upper right
        gridWidth - 1, gridWidth + 1 // lower left and lower right
    ];
    return directions.map(dir => index + dir).filter(neighborIndex => {
        const row = Math.floor(index / gridWidth);
        const neighborRow = Math.floor(neighborIndex / gridWidth);
        // Ensure neighbors are within grid bounds and are on the correct row
        return neighborIndex >= 0 && neighborIndex < cells.length && Math.abs(neighborRow - row) <= 1;
    });
}

// Initial setup (example usage)
const gridWidth = 10; // Width of the grid
const cells = Array(100).fill().map((_, index) => ({
    alive: Math.random() < 0.5, // Randomly initialize cells as alive or dead
    index
}));

// Function to update all cells
function updateGrid() {
    const newCells = cells.map(cell => ({ ...cell }));
    cells.forEach((cell, index) => changeState(index, newCells));
    return newCells;
}

// Call updateGrid in intervals, simulating the game loop
setInterval(() => {
    cells = updateGrid();
    console.log(cells.map(cell => cell.alive ? '🟩' : '⬜️').join(''));
}, 1000);
