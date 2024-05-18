class GridSystem {
  constructor(size) {
    // Initialize the grid with dead cells
    this.size = size;
    this.grid = Array(this.size).fill().map(() => Array(this.size).fill(false));
  }

  // Function to change the state of a cell at a given index
  changeState(index) {
    const { row, col } = this._convertIndex(index);
    this.grid[row][col] = !this.grid[row][col];
  }

  // Predicate to check if a cell should come alive
  comeAlive(index) {
    const livingNeighbors = this._countLivingNeighbors(index);
    return livingNeighbors === 3 || (this._isAlive(index) && (livingNeighbors === 2 || livingNeighbors === 3));
  }

  // Predicate to check if a cell should die
  comeDead(index) {
    const livingNeighbors = this._countLivingNeighbors(index);
    return livingNeighbors < 2 || livingNeighbors > 3;
  }

  // Helper function to count living neighbors
  _countLivingNeighbors(index) {
    const { row, col } = this._convertIndex(index);
    let count = 0;
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (i === row && j === col) continue; // Skip the cell itself
        if (i >= 0 && i < this.size && j >= 0 && j < this.size && this.grid[i][j]) {
          count++;
        }
      }
    }
    return count;
  }

  // Helper function to check if a cell is alive
  _isAlive(index) {
    const { row, col } = this._convertIndex(index);
    return this.grid[row][col];
  }

  // Convert a linear index to row and column
  _convertIndex(index) {
    return {
      row: Math.floor(index / this.size),
      col: index % this.size
    };
  }
}

// Example usage:
const grid = new GridSystem(5); // Create a 5x5 grid system
console.log("Come Alive:", grid.comeAlive(12)); // Check if the cell should come alive
console.log("Come Dead:", grid.comeDead(12)); // Check if the cell should die
grid.changeState(12); // Switch the state of the cell at index 12
