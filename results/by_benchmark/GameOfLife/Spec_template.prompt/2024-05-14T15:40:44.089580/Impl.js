// Assuming an API providing access to cell states and their neighbors
class GameOfLife {
    constructor(size) {
        this.size = size;
        this.grid = new Array(size * size).fill(false); // boolean array indicating alive (true) or dead (false)
    }

    // Method to get cell state (alive or dead)
    alive(index) {
        return this.grid[index];
    }

    // Method to change the state of a cell
    changeState(index) {
        this.grid[index] = !this.grid[index];
    }

    // Method to get indices of neighbors
    getNeighbors(index) {
        const neighbors = [];
        const row = Math.floor(index / this.size);
        const col = index % this.size;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue; // Skip the cell itself
                const nRow = row + i;
                const nCol = col + j;
                if (nRow >= 0 && nRow < this.size && nCol >= 0 && nCol < this.size) {
                    neighbors.push(nRow * this.size + nCol);
                }
            }
        }
        return neighbors;
    }

    // Predicate to check if a dead cell should come alive
    comeAlive(index) {
        const neighbors = this.getNeighbors(index);
        const aliveCount = neighbors.filter(n => this.alive(n)).length;
        return !this.alive(index) && (aliveCount === 3);
    }

    // Predicate to check if a living cell should die
    comeDead(index) {
        const neighbors = this.getNeighbors(index);
        const aliveCount = neighbors.filter(n => this.alive(n)).length;
        return this.alive(index) && (aliveCount < 2 || aliveCount > 3);
    }
}

// Example usage
const game = new GameOfLife(10); // Creating a 10x10 grid
console.log(game.comeAlive(14)); // Check if cell at index 14 should come alive
console.log(game.comeDead(15));  // Check if cell at index 15 should come dead
game.changeState(15);            // Toggle the state of cell at index 15
