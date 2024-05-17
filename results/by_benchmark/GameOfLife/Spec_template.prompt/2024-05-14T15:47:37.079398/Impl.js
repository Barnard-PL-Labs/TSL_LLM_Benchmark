class Cell {
  constructor(index, alive = false) {
    this.index = index;
    this.alive = alive;
  }

  changeState() {
    this.alive = !this.alive;
  }
}

class Grid {
  constructor(size) {
    this.size = size;
    this.cells = Array.from({ length: size * size }, (_, index) => new Cell(index));
    this.neighborOffsets = [-1, 0, 1];
  }

  getCell(index) {
    return this.cells[index];
  }

  getNeighbors(index) {
    const x = index % this.size;
    const y = Math.floor(index / this.size);
    let neighbors = [];

    this.neighborOffsets.forEach(dx => {
      this.neighborOffsets.forEach(dy => {
        if (dx === 0 && dy === 0) return;
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < this.size && ny >= 0 && ny < this.size) {
          neighbors.push(this.cells[ny * this.size + nx]);
        }
      });
    });

    return neighbors;
  }

  countAliveNeighbors(index) {
    const neighbors = this.getNeighbors(index);
    return neighbors.filter(cell => cell.alive).length;
  }
}

// Predicates
function comeAlive(cellIndex, grid) {
  const aliveNeighbors = grid.countAliveNeighbors(cellIndex);
  const cell = grid.getCell(cellIndex);
  return !cell.alive && aliveNeighbors === 3;
}

function comeDead(cellIndex, grid) {
  const aliveNeighbors = grid.countAliveNeighbors(cellIndex);
  const cell = grid.getCell(cellIndex);
  return cell.alive && (aliveNeighbors < 2 || aliveNeighbors > 3);
}

// System simulation setup
const gridSize = 10;  // Assuming a 10x10 grid
const gameGrid = new Grid(gridSize);

// Example to toggle cell state
function updateGrid(grid) {
  const cellsToChange = [];
  grid.cells.forEach((cell, index) => {
    if (comeAlive(index, grid) || comeDead(index, grid)) {
      cellsToChange.push(cell);
    }
  });

  // Update the cell states
  cellsToChange.forEach(cell => cell.changeState());
}
