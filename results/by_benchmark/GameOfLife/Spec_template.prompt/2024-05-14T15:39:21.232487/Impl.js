// Assume grid is a 2D array of booleans where true represents a living cell
// gridSize could be an object { width: int, height: int }
function countLivingNeighbors(grid, index, gridSize) {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    let livingNeighbors = 0;
    const x = index % gridSize.width;
    const y = Math.floor(index / gridSize.width);

    directions.forEach(([dx, dy]) => {
        const newX = x + dx;
        const newY = y + dy;
        if (newX >= 0 && newX < gridSize.width && newY >= 0 && newY < gridSize.height) {
            livingNeighbors += grid[newY][newX] ? 1 : 0;
        }
    });

    return livingNeighbors;
}
