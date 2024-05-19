// Functions

/**
 * Moves the ball to the left by updating the 'ball' cell with a signal to move left.
 * @param {Cell} ball - The cell representing the ball state.
 * @returns {Signal} - A signal to move the ball to the left.
 */
function moveLeft(ball) {
    // Assuming the API allows setting the 'ball' cell directly with a new state
    ball.set('left');  // Example: setting the state of 'ball' to 'left'
    return 'Signal to move left sent';  // Returning a confirmatory message (this could be adjusted based on actual API capabilities)
}

/**
 * Moves the ball to the right by updating the 'ball' cell with a signal to move right.
 * @param {Cell} ball - The cell representing the ball state.
 * @returns {Signal} - A signal to move the ball to the right.
 */
function moveRight(ball) {
    // Assuming the API allows setting the 'ball' cell directly with a new state
    ball.set('right');  // Example: setting the state of 'ball' to 'right'
    return 'Signal to move right sent';  // Returning a confirmatory message (this could be adjusted based on actual API capabilities)
}

// Predicates

/**
 * Checks if the ball is against the leftmost wall.
 * @param {Cell} ball - The cell representing the ball state.
 * @returns {boolean} - True if the ball is at the leftmost position, otherwise false.
 */
function leftmost(ball) {
    // Assuming the API provides a method to get the position or state
    return ball.get() === 'leftmost'; // Example: checking if 'ball' state is 'leftmost'
}

/**
 * Checks if the ball is against the rightmost wall.
 * @param {Cell} ball - The cell representing the ball state.
 * @returns {boolean} - True if the ball is at the rightmost position, otherwise false.
 */
function rightmost(ball) {
    // Assuming the API provides a method to get the position or state
    return ball.get() === 'rightmost'; // Example: checking if 'ball' state is 'rightmost'
}

// Example usage
let ball = {
    state: 'center',
    set(newState) {
        this.state = newState;
    },
    get() {
        return this.state;
    }
};

// Testing functions
console.log(moveLeft(ball));  // Test moving left
console.log(ball.get());      // Check new state of the ball

console.log(moveRight(ball)); // Test moving right
console.log(ball.get());      // Check new state of the ball

// Testing predicates
ball.state = 'leftmost';
console.log(leftmost(ball));  // Should return true

ball.state = 'rightmost';
console.log(rightmost(ball)); // Should return true

ball.state = 'center';
console.log(leftmost(ball));  // Should return false
console.log(rightmost(ball)); // Should return false
