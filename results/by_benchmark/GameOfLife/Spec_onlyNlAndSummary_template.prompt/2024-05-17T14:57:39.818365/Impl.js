// Mock API (assuming the existence of these functions)
function getCellState(index) {
    // This should return true if the cell at 'index' is alive, false otherwise
}

function setCellState(index, state) {
    // This should set the cell at 'index' to 'state' (true for alive, false for dead)
}

function getNeighbors(index) {
    // This should return an array of indices representing the neighbors of the cell at 'index'
}

// Predicate functions
function comeAlive(index) {
    let livingNeighbors = getNeighbors(index).filter(neighborIndex => getCellState(neighborIndex)).length;
    return livingNeighbors === 3 || (getCellState(index) && livingNeighbors === 2);
}

function comeDead(index) {
    let livingNeighbors = getNeighbors(index).filter(neighborIndex => getCellState(neighborIndex)).length;
    return livingNeighbors < 2 || livingNeighbors > 3;
}

// Function to change the state of each cell based on the Game of Life rules
function changeState() {
    let changes = [];
    let cellCount = getGridSize(); // Assuming a function that returns the number of cells

    for (let index = 0; index < cellCount; index++) {
        if (comeAlive(index)) {
            changes.push({ index: index, state: true });
        } else if (comeDead(index)) {
            changes.push({ index: index, state: false });
        }
    }

    // Apply all changes after computing new states to avoid interference
    changes.forEach(change => setCellState(change.index, change.state));
}

// Utility function assuming the existence of a getGridSize API
function getGridSize() {
    // This should return the total number of cells in the grid
}

