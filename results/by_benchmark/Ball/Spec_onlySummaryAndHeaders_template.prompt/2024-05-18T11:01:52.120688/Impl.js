// Functions to control the ball's movement
function moveLeft(ball) {
    // Assuming 'ball' has a property 'position' that dictates its horizontal position
    // This function reduces the position value, simulating a movement to the left
    if (!leftmost(ball)) { // Check if the ball is not at the leftmost position
        ball.position -= 1;
        return `Move ball to position ${ball.position}`;
    } 
    return `Ball is at the leftmost position and cannot move left.`;
}

function moveRight(ball) {
    // Assuming 'ball' has a property 'position'
    // This function increases the position value, simulating a movement to the right
    if (!rightmost(ball)) { // Check if the ball is not at the rightmost position
        ball.position += 1;
        return `Move ball to position ${ball.position}`;
    }
    return `Ball is at the rightmost position and cannot move right.`;
}

// Predicates to check the position of the ball
function leftmost(ball) {
    // Assuming 'ball' has a 'position' and 'minPosition' attributes
    // Returns true if the ball's position is at the minimal allowed value (leftmost wall)
    return ball.position <= ball.minPosition;
}

function rightmost(ball) {
    // Assuming 'ball' has a 'position' and 'maxPosition' attributes
    // Returns true if the ball's position is at the maximum allowed value (rightmost wall)
    return ball.position >= ball.maxPosition;
}

// Example usage, assuming ball object's structure
let ball = {
    position: 5,
    minPosition: 0,
    maxPosition: 10
};

console.log(moveLeft(ball));  // Move left if possible
console.log(leftmost(ball));  // Check if at leftmost position
console.log(moveRight(ball)); // Move right if possible
console.log(rightmost(ball)); // Check if at rightmost position
