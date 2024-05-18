class Cell {
  constructor(alive = false) {
    this.alive = alive;
    this.index = null; // This will be set when initializing the grid
  }
}

class Grid {
  constructor(size) {
    this.size = size;
    this.cells = this.createGrid(size);
  }
  
  createGrid(size) {
    const grid = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        const cell = new Cell(Math.random() > 0.5); // Randomly initialize cells
        cell.index = { x: i, y: j }; // Assign index as coordinates
        row.push(cell);
      }
      grid.push(row);
    }
    return grid;
  }
  
  // Function to get cell by index
  getCell(x, y) {
    if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
      return null; // Out of bounds
    }
    return this.cells[x][y];
  }
}
