// Assume a grid setup where the grid is a 2D array of boolean values
// grid[row][col] = true if alive, false if dead
const grid = [];

// Function to get the number of living neighbors for a given cell
function countLivingNeighbors(grid, row, col) {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
    
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue; // Skip the cell itself
            const r = row + i;
            const c = col + j;
            if (r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c]) {
                count++;
            }
        }
    }
    return count;
}
