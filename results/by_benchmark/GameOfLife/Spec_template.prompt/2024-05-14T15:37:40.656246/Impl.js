// Mock grid for demonstration
let grid = [
  [false, true, false],
  [false, false, true],
  [true, true, false]
];

// Function to determine if a cell is alive
function alive(x, y) {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
    return false; // Out of bounds
  }
  return grid[x][y];
}

// Function to count living neighbors
function countLivingNeighbors(x, y) {
  let count = 0;
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue; // Skip the cell itself
      if (alive(x+dx, y+dy)) {
        count++;
      }
    }
  }
  return count;
}

// Predicate to determine if a cell should come alive
function comeAlive(x, y) {
  const neighbors = countLivingNeighbors(x, y);
  return neighbors === 3 || (alive(x, y) && (neighbors === 2 || neighbors === 3));
}

// Predicate to determine if a cell should die
function comeDead(x, y) {
  const neighbors = countLivingNeighbors(x, y);
  return neighbors < 2 || neighbors > 3;
}

// Function to change the state of a cell
function changeState(x, y) {
  if (comeAlive(x, y)) {
    grid[x][y] = true;
  } else if (comeDead(x, y)) {
    grid[x][y] = false;
  }
}

// Demo: Update the state of a cell at (1, 2)
console.log("Initial state at (1, 2):", grid[1][2]);
changeState(1, 2);
console.log("Updated state at (1, 2):", grid[1][2]);
