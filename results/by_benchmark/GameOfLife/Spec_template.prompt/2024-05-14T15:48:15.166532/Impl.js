// Assuming gridSize is known and grid is globally accessible 
let grid;
let gridSize;

function initializeGrid(size) {
    gridSize = size;
    grid = Array(size).fill().map(() => Array(size).fill(false));
}

function countAliveNeighbors(x, y) {
    let count = 0;
    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            if (dx === 0 && dy === 0) continue;
            let nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize && grid[nx][ny]) {
                count++;
            }
        }
    }
    return count;
}

function comeAlive(x, y) {
    const aliveNeighbors = countAliveNeighbors(x, y);
    return (!grid[x][y] && aliveNeighbors === 3) || (grid[x][y] && (aliveNeighbors === 2 || aliveNeighbors === 3));
}

function comeDead(x, y) {
    const aliveNeighbors = countAliveNeighbors(x, y);
    return aliveNeighbors < 2 || aliveNeighbors > 3;
}

function changeState(x, y) {
    grid[x][y] = !grid[x][y];
}


// Initialization of the grid for demonstration
initializeGrid(10); // initialize a 10x10 grid
changeState(1, 1);
changeState(1, 2);
changeState(2, 2);

// Example usage
console.log(`Should (1,2) come alive next generation? ${comeAlive(1, 2)}`);
console.log(`Should (1,1) turn dead next generation? ${comeDead(1, 1)}`);
