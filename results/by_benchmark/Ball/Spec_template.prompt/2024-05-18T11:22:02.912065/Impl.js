const LEFT_WALL = 0; // Assuming 0 is the minimum x-coordinate (leftmost)
const RIGHT_WALL = 100; // Assuming 100 is the maximum x-coordinate (rightmost)

class Ball {
    constructor() {
        this.position = 50; // Start in the middle of the field
    }
    
    moveLeft() {
        // Move the ball to the left by decreasing its position
        if (this.position > LEFT_WALL) {
            this.position -= 1;
        }
        return this.position;
    }
    
    moveRight() {
        // Move the ball to the right by increasing its position
        if (this.position < RIGHT_WALL) {
            this.position += 1;
        }
        return this.position;
    }
    
    leftmost() {
        // Check if the ball is at the leftmost wall
        return this.position === LEFT_WALL;
    }
    
    rightmost() {
        // Check if the ball is at the rightmost wall
        return this.position === RIGHT_WALL;
    }
}

// Usage
let ball = new Ball();

// Moving the ball around:
console.log(`Initial position: ${ball.position}`);
console.log(`Moving left: ${ball.moveLeft()}`);
console.log(`Is leftmost? ${ball.leftmost()}`);
console.log(`Moving right: ${ball.moveRight()}`);
console.log(`Is rightmost? ${ball.rightmost()}`);

// You would call these methods to interact with the ball based on game logic or user inputs
