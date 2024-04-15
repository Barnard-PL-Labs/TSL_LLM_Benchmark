// Define the grid size
const gridSize = 10
let grid = Array(gridSize)
    .fill()
    .map(() => Array(gridSize).fill(false))

// Function to count alive neighbors
function countNeighboursAlive(x, y) {
    let count = 0
    for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
            if (dx === 0 && dy === 0) continue // Skip the cell itself
            let nx = x + dx
            let ny = y + dy
            // Check the boundaries
            if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize) {
                count += grid[nx][ny] ? 1 : 0
            }
        }
    }
    return count
}

// Function to determine if a cell should come alive based on its neighbors
function comeAlive(x, y) {
    return countNeighboursAlive(x, y) === 3
}

// Function to determine if a cell should die
function comeDead(x, y) {
    const aliveNeighbors = countNeighboursAlive(x, y)
    return aliveNeighbors < 2 || aliveNeighbors > 3
}

// Function to update the alive status of a cell
function changeAlive(x, y) {
    if (comeAlive(x, y) && !comeDead(x, y)) {
        return true
    } else if (!comeAlive(x, y) && comeDead(x, y)) {
        return false
    }
    return grid[x][y]
}

// Update the grid for a new generation
function updateGrid() {
    const newGrid = grid.map((row, x) =>
        row.map((cell, y) => changeAlive(x, y))
    )
    grid = newGrid
}

// Main loop to run the game
function runGameOfLife(steps) {
    console.log('Initial Grid:')
    console.log(grid.map((row) => row.map((cell) => (cell ? 1 : 0))))
    for (let i = 0; i < steps; i++) {
        updateGrid()
        console.log(`Grid at step ${i + 1}:`)
        console.log(grid.map((row) => row.map((cell) => (cell ? 1 : 0))))
    }
}

// Start the game
runGameOfLife(10)
