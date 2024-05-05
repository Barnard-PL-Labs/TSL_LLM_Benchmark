// Assuming we have some hypothetical system API available:
// isCellAlive(index): Returns true if the cell at 'index' is alive, false otherwise.
// setCellState(index, state): Updates the cell at 'index' to 'state' (true for alive, false for dead).
// countLivingNeighbors(index): Counts how many neighboring cells are alive.

// Import or define these API functions
const api = require('SystemAPI'); // hypothetical API import

// Functions:
function changeState(index) {
    // Check rules to either make the cell come alive or dead
    if (comeAlive(index)) {
        api.setCellState(index, true);
    } else if (comeDead(index)) {
        api.setCellState(index, false);
    }
}

// Predicates:
function comeAlive(index) {
    // A cell comes alive only if exactly 3 of its neighbors are alive,
    // or if the cell is currently alive and 2 or 3 of its neighbors are alive
    const isAlive = api.isCellAlive(index);
    const livingNeighbors = api.countLivingNeighbors(index);

    return (livingNeighbors === 3) || (isAlive && (livingNeighbors === 2 || livingNeighbors === 3));
}

function comeDead(index) {
    // A cell dies if it has fewer than 2 or more than 3 living neighbors
    const livingNeighbors = api.countLivingNeighbors(index);
    return livingNeighbors < 2 || livingNeighbors > 3;
}

module.exports = { changeState, comeAlive, comeDead };
