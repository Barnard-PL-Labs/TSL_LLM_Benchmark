// Functions

/**
 * Changes the state of a cell at a given index. If the cell is alive, it will be killed; if it is dead, it will come to life.
 * @param {number} index - The index of the cell on the grid.
 */
function changeState(index) {
    const cell = getCell(index);
    if (isAlive(cell)) {
        killCell(index); // Assuming a function to kill the cell
    } else {
        reviveCell(index); // Assuming a function to revive the cell
    }
}

// Predicates

/**
 * Determines if a cell should come alive based on the number of living neighbors.
 * A cell comes alive if exactly 3 of its neighbors are alive, or if it's currently alive and 2 or 3 of its neighbors are alive.
 * @param {number} index - The index of the cell on the grid.
 * @returns {boolean} - Returns true if the cell should come alive, false otherwise.
 */
function comeAlive(index) {
    const cell = getCell(index);
    const neighbors = getNeighbors(index);
    const aliveCount = neighbors.filter(neighbor => isAlive(neighbor)).length;

    return aliveCount === 3 || (isAlive(cell) && (aliveCount === 2 || aliveCount === 3));
}

/**
 * Determines if a cell should die based on the number of living neighbors.
 * A cell dies if it has fewer than 2 or more than 3 living neighbors.
 * @param {number} index - The index of the cell on the grid.
 * @returns {boolean} - Returns true if the cell should die, false otherwise.
 */
function comeDead(index) {
    const neighbors = getNeighbors(index);
    const aliveCount = neighbors.filter(neighbor => isAlive(neighbor))..length;

    return aliveCount < 2 || aliveCount > 3;
}
