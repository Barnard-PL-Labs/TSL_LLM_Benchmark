// Assuming 'ball' is an object that has a 'position' property.
// Let's assume that position 0 is the leftmost and position 10 is the rightmost.

// Functions
function moveLeft(ball) {
    // Decrements the position of the ball to move it left, unless it's at the leftmost position
    if (ball.position > 0) {
        ball.position -= 1;
    }
    return ball;  // might not always be necessary depending on how the rest of the system is structured
}

function moveRight(ball) {
    // Increments the position of the ball to move it right, unless it's at the rightmost position
    if (ball.position < 10) {
        ball.position += 1;
    }
    return ball;  // might not always be necessary depending on how the rest of the system is structured
}

// Predicates
function leftmost(ball) {
    // Returns true if the ball's position is 0 (leftmost position)
    return ball.position === 0;
}

function rightmost(ball) {
    // Returns true if the ball's position is 10 (rightmost position)
    return ball.position === 10;
}

// Example usage:
let ball = { position: 5 };

console.log("Initial position:", ball.position);
moveLeft(ball);
console.log("After moving left:", ball.position);
console.log("Is at leftmost:", leftmost(ball));

moveRight(ball);
moveRight(ball);
console.log("After moving right twice:", ball.position);
console.log("Is at rightmost:", rightmost(ball));
