/**
 * Functions to manipulate the 'ball' cell
 */

// Function to move the ball to the left
function moveLeft(ball) {
    // Assuming there's a property 'position' in ball to decrement
    ball.position.x -= 1;
    return ball; // Returns the modified ball object
}

// Function to move the ball to the right
function moveRight(ball) {
    // Assuming there's a property 'position' in ball to increment
    ball.position.x += 1;
    return ball; // Returns the modified ball object
}

/**
 * Predicates to check ball positions
 */

// Predicate to check if the ball is against the leftmost wall
function leftmost(ball) {
    // Assuming there's a known minimum x-position that represents the leftmost wall
    const LEFT_WALL_X = 0;
    return ball.position.x <= LEFT_WALL_X;
}

// Predicate to check if the ball is against the rightmost wall
function rightmost(ball) {
    // Assuming there's a known maximum x-position that represents the rightmost wall
    const RIGHT_WALL_X = 10; // Example value, should be set according to actual bounds
    return ball.position.x >= RIGHT_WALL_X;
}

/**
 * Example usage
 */

// Assuming we are initializing the ball object
let ball = {
    position: {
        x: 5,
        y: 0
    }
};

// Move the ball and check positions
console.log("Initial Position:", ball.position);
moveLeft(ball);
console.log("After moving left:", ball.position);
console.log("Is at leftmost:", leftmost(ball));
moveRight(ball);
moveRight(ball);
console.log("After moving right twice:", ball.position);
console.log("Is at rightmost:", rightmost(ball));
