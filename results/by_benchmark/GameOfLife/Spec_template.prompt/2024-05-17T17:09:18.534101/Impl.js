class Cell {
    constructor(alive=false) {
        this.alive = alive;
    }
}

class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.cells = new Array(height);
        for (let y = 0; y < height; y++) {
            this.cells[y] = new Array(width);
            for (let x = 0; x < width; x++) {
                this.cells[y][x] = new Cell();
            }
        }
    }

    getCell(x, y) {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            return new Cell();  // Out of bounds, assume dead cell
        }
        return this.cells[y][x];
    }

    setCellState(x, y, state) {
        if (x >= 0 && y >= 0 && x < this.width && y < this.height) {
            this.cells[y][x].alive = state;
        }
    }

    countLivingNeighbors(x, y) {
        let count = 0;
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue;  // Skip the cell itself
                if (this.getCell(x + dx, y + dy).alive) {
                    count++;
                }
            }
        }
        return count;
    }
}

