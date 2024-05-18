// Assumed API functions (need to be adapted to actual API names and signatures)
function apiIsCellAlive(index) {
  // Returns if the cell at the provided index is alive.
}

function apiChangeCellState(index) {
  // Toggles the state of the cell (alive/dead) at the provided index.
}

function getNeighborIndices(index) {
  // This should return an array of indices that represent the neighbors of
  // the cell at 'index'. Implement according to the grid topology and size.
  // Example for a grid where width = W:
  // return [
  //   index - W - 1, index - W, index - W + 1,
  //   index - 1,                 index + 1,
  //   index + W - 1, index + W, index + W + 1
  // ].filter(i => i >= 0 && i < totalCells); // Ensure indices are valid
}

function countLivingNeighbors(index) {
  const neighbors = getNeighborIndices(index);
  return neighbors.reduce((count, idx) => count + (apiIsCellAlive(idx) ? 1 : 0), 0);
}

// Predicate: Check if cell at 'index' should come alive
function comeAlive(index) {
  const livingNeighbors = countLivingNeighbors(index);
  return livingNeighbors === 3 || (apiIsCellAlive(index) && livingNeighbors === 2);
}

// Predicate: Check if cell at 'index' should become dead
function comeDead(index) {
  const livingNeighbors = countLivingNeighbors(index);
  return livingNeighbors < 2 || livingNeighbors > 3;
}

// Function: Change the state of the cell based on the predicates
function changeState(index) {
  if (comeAlive(index) && !apiIsCellAlive(index)) {
    apiChangeCellState(index);
  } else if (comeDead(index) && apiIsCellAlive(index)) {
    apiChangeCellState(index);
  }
}
