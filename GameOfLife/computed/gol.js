function gameOfLife(N) {
    let grid = new Array(N)
    let nextGrid = new Array(N)

    // Initialize the grid with random values
    for (let i = 0; i < N; i++) {
        grid[i] = new Array(N)
        nextGrid[i] = new Array(N)
        for (let j = 0; j < N; j++) {
            grid[i][j] = Math.random() > 0.5 ? 1 : 0
        }
    }

    // Function to count live neighbors
    function countLiveNeighbors(x, y) {
        let count = 0
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue
                let nx = x + i
                let ny = y + j
                if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
                    count += grid[nx][ny]
                }
            }
        }
        return count
    }

    // Determine if the cell at index should come to life
    function comeAlive(index) {
        let [x, y] = index
        const neighbors = countLiveNeighbors(x, y)
        return grid[x][y] === 0 && neighbors === 3
    }

    // Determine if the cell at index should die
    function comeDead(index) {
        let [x, y] = index
        const neighbors = countLiveNeighbors(x, y)
        return grid[x][y] === 1 && (neighbors < 2 || neighbors > 3)
    }

    // Main simulation step using the provided synthesized code
    function simulateStep() {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                const index = [i, j]
                let currentState = grid[i][j]
                let alive = currentState // Assuming 'alive' variable corresponds to the current state for simulation

                if (currentState === 0) {
                    if (comeAlive(index) && !comeDead(index)) {
                        alive = alive + 1
                        currentState = 1
                    } else if (!comeAlive(index) && comeDead(index)) {
                        alive = alive - 1
                        currentState = 0
                    } else {
                        currentState = 0
                    }
                }
                nextGrid[i][j] = currentState
            }
        }

        // Update the grid
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                grid[i][j] = nextGrid[i][j]
            }
        }
    }

    // Run the simulation for a set number of steps
    function runSimulation(steps) {
        for (let step = 0; step < steps; step++) {
            simulateStep()
            console.log(`After step ${step + 1}:`)
            console.log(grid.map((row) => row.join(' ')).join('\n'))
        }
    }

    return { runSimulation }
}

// Create a Game of Life instance and run it
const gol = gameOfLife(10) // Example for a 10x10 grid
gol.runSimulation(5) // Run the simulation for 5 steps
