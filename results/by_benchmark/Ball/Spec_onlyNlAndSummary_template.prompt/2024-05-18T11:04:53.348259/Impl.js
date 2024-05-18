// Functions
function moveLeft(ball) {
    // Assuming ball has a method to modify its position to the left.
    // This function returns a command or signal that tells the system to move the ball left.
    // For simplicity, we might assume it changes a 'direction' property or similar.
    return 'moveLeft';  // This represents a signal rather than a direct action.
}

function moveRight(ball) {
    // Similarly, this function returns a command or signal to move the ball right.
    return 'moveRight';  // This represents a signal rather than a direct action.
}

// Predicates
function leftmost(ball) {
    // Assuming the ball object has a property 'x' that represents its horizontal position,
    // and '0' is the position of the leftmost wall.
    // Returns true if the ball is against the leftmost wall.
    return ball.x === 0;
}

function rightmost(ball) {
    // Assuming the ball object has a property 'x' and 'maxX' being the maximum x position (rightmost wall).
    // Returns true if the ball is against the rightmost wall.
    return ball.x === ball.maxX;
}

// Example of usage:
let ball = {
    x: 0,
    maxX: 10  // Assume the rightmost position is 10 for this example.
};

// Use the functions and predicates:
console.log("Initial leftmost:", leftmost(ball));  // Output: true
console.log("Initial rightmost:", rightmost(ball));  // Output: false

console.log("Signal to move left (should be ignored if already at leftmost):", moveLeft(ball));
console.log("Signal to move right:", moveRight(ball));

// After moving the ball to the right (assuming an action changes the state):
ball.x = 1;  // Simulate moving right by changing x position.
console.log("After moving right, leftmost:", leftmost(ball));  // Output: false
console.log("After moving right, rightmost:", rightmost(ball));  // Output: false
