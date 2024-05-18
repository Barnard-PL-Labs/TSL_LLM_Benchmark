class GameOfLife {
    constructor(api) {
        this.api = api;
    }

    // Function to change state of a cell
    changeState(index) {
        if (this.comeAlive(index)) {
            this.api.setCellState(index, true); // Assuming the API has a method to set cell state
        } else if (this.comeDead(index)) {
            this.api.setCellState(index, false); // Assuming the API has a method to set cell state
        }
    }

    // Predicate to determine if a cell should come alive
    comeAlive(index) {
        const neighbors = this.countLivingNeighbors(index);
        return (neighbors === 3 || (this.api.alive(index) && neighbors === 2));
    }

    // Predicate to determine if a cell should die
    comeDead(index) {
        const neighbors = this.countLivingNeighbors(index);
        return (neighbors < 2 || neighbors > 3);
    }

    // Helper function to count living neighbors
    countLivingNeighbors(index) {
        const positions = [
            index - this.api.gridWidth - 1, index - this.api.gridWidth, index - this.api.gridWidth + 1,
            index - 1, index + 1,
            index + this.api.gridWidth - 1, index + this.api.gridWidth, index + this.api.gridWidth + 1
        ];
        return positions.reduce((acc, pos) => acc + (this.api.alive(pos) ? 1 : 0), 0);
    }
}
