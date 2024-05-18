class GameOfLife {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.grid = this.initializeGrid();
    }

    initializeGrid() {
        // Create a grid array filled with false values indicating all cells are initially dead
        return Array.from({ length: this.height }, () => Array(this.width).fill(false));
    }

    // Predicate: Check if a cell should come alive based on its neighbors
    comeAlive(x, y) {
        const neighbors = this.countLivingNeighbors(x, y);
        return neighbors === 3 || (this.grid[y][x] && neighbors === 2);
    }

    // Predicate: Check if a cell should die based on its neighbors
    comeDead(x, y) {
        const neighbors = this.countLivingNeighbors(x, y);
        return neighbors < 2 || neighbors > 3;
    }

    // Function: Count living neighbors of a cell
    countLivingNeighbors(x, y) {
        let count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue; // Skip the cell itself
                const nx = x + i;
                const ny = y + j;
                if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height && this.grid[ny][nx]) {
                    count++;
                }
            }
        }
        return count;
    }

    // Function: Update the state of the grid
    changeState() {
        const newGrid = this.initializeGrid();
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const alive = this.grid[y][x];
                if (alive && this.comeAlive(x, y)) {
                    newGrid[y][x] = true;
                } else if (!alive && this.comeAlive(x, y)) {
                    newGrid[y][x] = true;
                } else if (alive && this.comeDead(x, y)) {
                    newGrid[y][x] = false;
                }
            }
        }
        this.grid = newGrid;
    }

    // Function: Print the grid (for debugging purposes)
    printGrid() {
        console.log(this.grid.map(row => row.map(cell => cell ? '🟩' : '⬛').join(' ')).join('\n'));
    }
}

// Create a new Game of Life instance
const game = new GameOfLife(5, 5);
// Randomly initialize grid for demonstration
game.grid = game.grid.map(row => row.map(() => Math.random() > 0.5));
game.printGrid();
console.log('Next Generation');
game.changeState();
game.printGrid();
