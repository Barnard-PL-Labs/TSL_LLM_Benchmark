// Function to count live neighbors
function countLiveNeighbors(index) {
    let liveCount = 0;
    const neighbors = getNeighbors(index);
    neighbors.forEach(neighbor => {
        if (neighbor.alive) {
            liveCount++;
        }
    });
    return liveCount;
}

// Function to change the state of a cell
function changeState(index, newState) {
    setCellState(index, newState);
}
