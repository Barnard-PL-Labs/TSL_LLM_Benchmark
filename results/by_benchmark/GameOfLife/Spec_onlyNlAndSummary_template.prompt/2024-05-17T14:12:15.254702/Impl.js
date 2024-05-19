class Grid {
    constructor(size) {
        this.size = size;
        this.grid = new Array(size * size).fill(false); // Initialize a grid of given size, fill with 'false' indicating all cells are dead.
    }

    // Helper method to calculate number of alive neighbours
    countAliveNeighbours(index) {
        let aliveCount = 0;
        let x = index % this.size;
        let y = Math.floor(index / this.size);
        
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0) continue; // skip the cell itself
                
                let nx = x + dx;
                let ny = y + dy;

                if (nx >= 0 && nx < this.size && ny >= 0 && ny < this.size) {
                    if (this.grid[ny * this.size + nx]) {
                        aliveCount++;
                    }
                }
            }
        }
        return aliveCount;
    }

    // Predicate to determine if a cell should come alive
    comeAlive(index) {
        const aliveNeighbours = this.countAliveNeighbours(index);
        return aliveNeighbours === 3 || (this.grid[index] && (aliveNeighbours === 2 || aliveNeighbours === 3));
    }

    // Predicate to determine if a cell should die
    comeDead(index) {
        const aliveNeighbours = this.countAliveNeighbours(index);
        return aliveNeighbours < 2 || aliveNeighbours > 3;
    }

    // Function to change the state of the grid
    changeState() {
        const newGrid = new Array(this.size * this.size).fill(false);
        for (let i = 0; i < this.grid.length; i++) {
            if (this.comeAlive(i)) {
                newGrid[i] = true;
            } else if (this.comeDead(i)) {
                newGrid[i] = false;
            } else {
                newGrid[i] = this.grid[i];
            }
        }
        this.grid = newGrid;
    }
}
