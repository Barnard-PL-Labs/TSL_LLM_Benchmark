function updateState({ currentState, index }) {
    // Check if the cell should come alive
    if (comeAlive(index)) {
        currentState = true;
        changeState(); // Assuming changeState directly manipulates the cell state to alive
    }
    // Check if the cell should die
    else if (comeDead(index)) {
        currentState = false;
        changeState(); // Assuming changeState directly manipulates the cell state to dead
    }

    // Return the updated state of the cell
    return { currentState };
}
