// Constants for cell states
const DEAD = 0;
const ALIVE = 1;

// The grid representing the cells
const grid = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0]
];

// Function to count the alive neighbors of a cell
function countAliveNeighbors(x, y) {
  let count = 0;
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue; // Skip the cell itself
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length) {
        if (grid[nx][ny] === ALIVE) count++;
      }
    }
  }
  return count;
}

// Predicate to check if a cell should come alive based on its neighbors
function comeAlive(x, y) {
  const aliveNeighbors = countAliveNeighbors(x, y);
  return (grid[x][y] === DEAD && aliveNeighbors === 3) ||
         (grid[x][y] === ALIVE && (aliveNeighbors === 2 || aliveNeighbors === 3));
}

// Predicate to check if a cell should die based on its neighbors
function comeDead(x, y) {
  const aliveNeighbors = countAliveNeighbors(x, y);
  return aliveNeighbors < 2 || aliveNeighbors > 3;
}

// Function to change the state of the grid
function changeState() {
  const newState = grid.map(row => row.slice());
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (comeAlive(x, y)) {
        newState[x][y] = ALIVE;
      } else if (comeDead(x, y)) {
        newState[x][y] = DEAD;
      }
    }
  }
  return newState;
}

// Example usage
console.log("Initial State:");
console.log(grid);
console.log("New State:");
console.log(changeState());
