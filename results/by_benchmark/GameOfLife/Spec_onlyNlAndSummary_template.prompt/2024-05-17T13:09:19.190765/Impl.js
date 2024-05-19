function countAliveNeighbors(row, col, grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue; // skip the cell itself
      const r = row + i;
      const c = col + j;
      if (r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c]) {
        count++;
      }
    }
  }

  return count;
}

function comeAlive(row, col, grid) {
  const aliveNeighbors = countAliveNeighbors(row, col, grid);
  return aliveNeighbors === 3;
}

function comeDead(row, col, grid) {
  const aliveNeighbors = countAliveNeighbors(row, col, grid);
  return aliveNeighbors < 2 || aliveNeighbors > 3;
}

function changeState(grid) {
  const newGrid = grid.map(arr => arr.slice()); // create a deep copy of the grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const cellIsAlive = grid[row][col];
      if (cellIsAlive && comeDead(row, col, grid)) {
        newGrid[row][col] = false;
      } else if (!cellIsAlive && comeAlive(row, col, grid)) {
        newGrid[row][col] = true;
      }
    }
  }
  return newGrid;
}
