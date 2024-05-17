// Simulated API
const grid = []; // This would be your grid array containing boolean values for each cell.
const gridSize = 100; // Assuming a 10x10 grid for simplicity.

// Simulated API method to get the state of a cell
function getCellState(index) {
    return grid[index];
}

// Simulated API method to set the state of a cell
function setCellState(index, state) {
    grid[index] = state;
}

// Helper function to count living neighbors
function countLivingNeighbors(index) {
    const neighbors = [];
    const row = Math.floor(index / 10);
    const col = index % 10;
    
    [-1, 0, 1].forEach(i => {
        [-1, 0, 1].forEach(j => {
            if (i !== 0 || j !== 0) {
                const neighborRow = row + i;
                const neighborCol = col + j;
                if (neighborRow >= 0 && neighborRow < 10 && neighborCol >= 0 && neighborCol < 10) {
                    neighbors.push(grid[neighborRow * 10 + neighborCol]);
                }
            }
        });
    });

    return neighbors.filter(state => state).length;
}

// Predicate for coming alive
function comeAlive(index) {
    const livingNeighbors = countLivingNeighbors(index);
    const currentState = getCellState(index);
    return (!currentState && livingNeighbors === 3) || (currentState && (livingNeighbors === 2 || livingNeighbors === 3));
}

// Predicate for coming dead
function comeDead(index) {
    const livingNeighbors = countLivingNeighbors(index);
    return livingNeighbors < 2 || livingNeighbors > 3;
}

// Function to change the state of all cells
function changeState() {
    const newState = [];
    for (let i = 0; i < gridSize; i++) {
        if (comeAlive(i)) {
            newState[i] = true;
        } else if (comeDead(i)) {
            newState[i] = false;
        } else {
            newState[i] = getCellState(i); // Keep the current state
        }
    }

    // Update grid state after all calculations to avoid influencing results
    for (let i = 0; i < gridSize; i++) {
        setCellState(i, newState[i]);
    }
}
