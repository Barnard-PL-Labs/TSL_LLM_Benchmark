class CellularAutomaton {
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.grid = Array(gridSize).fill().map(() => Array(gridSize).fill(false));
    }

    // Function to check if a cell is alive
    alive(x, y) {
        if (x < 0 || x >= this.gridSize || y < 0 || y >= this.gridSize) {
            return false;
        }
        return this.grid[x][y];
    }

    // Function to count living neighbors of a cell
    countLivingNeighbors(x, y) {
        let count = 0;
        for (let i = x - 1; i <= x + 1; i++) {
            for (let j = y - 1; j <= y + 1; j++) {
                if (i === x && j === y) continue;
                if (this.alive(i, j)) count++;
            }
        }
        return count;
    }

    // Predicate to determine if a cell should come alive
    comeAlive(x, y) {
        const neighbors = this.countLivingNeighbors(x, y);
        return (!this.alive(x, y) && neighbors === 3) || (this.alive(x, y) && (neighbors === 2 || neighbors === 3));
    }

    // Predicate to determine if a cell should die
    comeDead(x, y) {
        const neighbors = this.countLivingNeighbors(x, y);
        return this.alive(x, y) && (neighbors < 2 || neighbors > 3);
    }

    // Function to change the state of the cell
    changeState() {
        let nextGrid = Array(this.gridSize).fill().map(() => Array(this.gridSize).fill(false));
        
        for (let i = 0; i < this.gridSize; i++) {
            for (let j = 0; j < this.gridSize; j++) {
                if (this.comeAlive(i, j)) {
                    nextGrid[i][j] = true;
                } else if (!this.comeDead(i, j)) {
                    nextGrid[i][j] = this.grid[i][j];
                }
            }
        }

        this.grid = nextGrid;
    }

    // Function to display the grid
    displayGrid() {
        for (let row of this.grid) {
            console.log(row.map(cell => cell ? '1' : '0').join(' '));
        }
    }
}

// Usage
const automaton = new CellularAutomaton(5); // Create a grid of 5x5
automaton.grid[1][2] = true;
automaton.grid[2][2] = true;
automaton.grid[3][2] = true;
console.log("Initial Grid:");
automaton.displayGrid();
automaton.changeState();
console.log("Next Generation Grid:");
automaton.displayGrid();
