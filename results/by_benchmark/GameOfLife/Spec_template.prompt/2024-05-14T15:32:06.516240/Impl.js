// Environment setup - assuming a grid size and initializing the state
const gridSize = 10; // Define grid size (10x10 for simplicity)
const grid = Array(gridSize).fill().map(() => Array(gridSize).fill(false)); // Initializes a 10x10 grid with false (dead cells)

// Helper function to count living neighbors
function countLivingNeighbors(x, y) {
    let livingNeighbors = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue; // Skip the cell itself
            const nx = x + i;
            const ny = y + j;
            if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize && grid[nx][ny]) {
                livingNeighbors++;
            }
        }
    }
    return livingNeighbors;
}

// Predicate: comeAlive
// Returns true if exactly 3 neighbors are living or if 2 or 3 neighbors are living
function comeAlive(x, y) {
    const neighbors = countLivingNeighbors(x, y);
    return (neighbors === 3) || (grid[x][y] && (neighbors === 2 || neighbors === 3));
}

// Predicate: comeDead
// Returns true if the cell has less than 2 neighbors or more than 3 neighbors
function comeDead(x, y) {
    const neighbors = countLivingNeighbors(x, y);
    return neighbors < 2 || neighbors > 3;
}

// Function: changeState
// Changes the state of the grid based on comeAlive and comeDead predicates
function changeState() {
    const newGrid = grid.map((row, x) => row.map((cell, y) => {
        if (comeAlive(x, y)) {
            return true; // Cell becomes alive or stays alive
        } else if (comeDead(x, y)) {
            return false; // Cell dies
        }
        return cell; // No change
    }));

    // Update the grid with the new state
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            grid[x][y] = newGrid[x][y];
        }
    }
}

// Example usage:
changeState(); // Run the changeState function to update the grid based on the rules
console.log(grid); // Log the updated grid state
