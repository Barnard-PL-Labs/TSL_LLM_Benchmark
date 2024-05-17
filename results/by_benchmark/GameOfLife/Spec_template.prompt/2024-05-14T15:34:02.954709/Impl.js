class Cell {
    constructor(alive = false) {
        this.alive = alive;
    }
}

class Grid {
    constructor(size) {
        this.size = size;
        this.cells = new Array(size * size).fill().map(() => new Cell());
    }

    getCell(index) {
        return this.cells[index];
    }

    setCell(index, state) {
        this.cells[index].alive = state;
    }

    getNeighbors(index) {
        const offsets = [-1, 0, 1];
        let neighbors = [];
        for (let i of offsets) {
            for (let j of offsets) {
                if (i === 0 && j === 0) continue; // Skip self
                const neighborIndex = index + i + this.size * j;
                if (neighborIndex >= 0 && neighborIndex < this.cells.length) {
                    neighbors.push(this.cells[neighborIndex]);
                }
            }
        }
        return neighbors;
    }
}

// Instantiate the grid
const grid = new Grid(10);
