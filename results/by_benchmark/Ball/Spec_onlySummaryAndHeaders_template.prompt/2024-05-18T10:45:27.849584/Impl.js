// Ball simulation environment
class Ball {
    constructor() {
        this.position = 0; // starting position
        this.minPosition = -10; // leftmost boundary
        this.maxPosition = 10; // rightmost boundary
    }

    // Function to move the ball to the left
    moveLeft() {
        if (this.position > this.minPosition) {
            this.position--;
        }
        return this.position;
    }

    // Function to move the ball to the right
    moveRight() {
        if (this.position < this.maxPosition) {
            this.position++;
        }
        return this.position;
    }

    // Predicate to check if the ball is at the leftmost position
    leftmost() {
        return this.position === this.minPosition;
    }

    // Predicate to check if the ball is at the rightmost position
    rightmost() {
        return this.position === this.maxPosition;
    }
}

// Example usage:
const ball = new Ball();

// Moving the ball
console.log("Initial Position:", ball.position);
ball.moveRight();
ball.moveRight();
console.log("Position after moving right:", ball.position);

// Checking boundaries
console.log("Is at rightmost?", ball.rightmost());
ball.moveLeft();
console.log("Position after moving left:", ball.position);
console.log("Is at leftmost?", ball.leftmost());
