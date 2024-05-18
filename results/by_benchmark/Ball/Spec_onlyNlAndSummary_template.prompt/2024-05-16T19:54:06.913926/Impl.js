class Ball {
    constructor(x) {
        this.x = x; // x represents the horizontal position of the ball
    }

    // Function to move the ball left
    moveLeft() {
        if (!this.leftmost()) { // Check if it's not at the leftmost position
            this.x -= 1;  // Move the ball left by decreasing x
            return "Signal to move left";
        }
        return "Ball is at the leftmost position, cannot move left";
    }

    // Function to move the ball right
    moveRight() {
        if (!this.rightmost()) { // Check if it's not at the rightmost position
            this.x += 1;  // Move the ball right by increasing x
            return "Signal to move right";
        }
        return "Ball is at the rightmost position, cannot move right";
    }

    // Predicate to check if the ball is at the leftmost position
    leftmost() {
        const leftMostWallPosition = 0; // Assuming 0 is the leftmost position
        return this.x === leftMostWallPosition;
    }

    // Predicate to check if the ball is at the rightmost position
    rightmost() {
        const rightMostWallPosition = 10; // Assuming 10 is the rightmost position
        return this.x === rightMostWallPosition;
    }
}

// Usage example
const ball = new Ball(5); // Create a ball at position 5
console.log(ball.moveLeft()); // Moves ball to the left
console.log(ball.moveLeft()); // Moves ball to the left again
console.log(ball.moveRight()); // Moves ball to the right
console.log(ball.leftmost()); // Checks if at the leftmost position
console.log(ball.rightmost()); // Checks if at the rightmost position
