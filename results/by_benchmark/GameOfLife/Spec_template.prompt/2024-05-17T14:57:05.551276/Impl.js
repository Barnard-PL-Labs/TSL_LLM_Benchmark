// Assuming grid is a 2D array of booleans
const grid = [
   [false, true, false],
   [true, true, true],
   [false, false, false],
];

function countAliveNeighbors(x, y) {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    let count = 0;
    directions.forEach(([dx, dy]) => {
        const nx = x + dx, ny = y + dy;
        if (nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length) {
            if (grid[nx][ny]) count++;
        }
    });
    return count;
}

// Function to map 1D index to 2D coordinates
function indexToCoords(index) {
    const row = Math.floor(index / grid[0].length);
    const col = index % grid[0].length;
    return { row, col };
}
