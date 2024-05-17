// Defining the ball object for demonstration. In a real scenario, this should be part of the system API.
const ball = {
  position: 0, // Example position value
  leftWall: 0, // Position of the leftmost wall
  rightWall: 10, // Position of the rightmost wall
  moveLeft: function() {
    if (this.position > this.leftWall) {
      this.position -= 1;
      return `Moved to ${this.position}`;
    } else {
      return `Cannot move left, ball is at leftmost position ${this.position}`;
    }
  },
  moveRight: function() {
    if (this.position < this.rightWall) {
      this.position += 1;
      return `Moved to ${this.position}`;
    } else {
      return `Cannot move right, ball is at rightmost position ${this.position}`;
    }
  },
  isAtLeftWall: function() {
    return this.position === this.leftWall;
  },
  isAtRightWall: function() {
    return this.position === this.rightWall;
  }
};

// Implementing the functions and predicates

// Functions
function moveLeft(ball) {
  return ball.moveLeft();
}

function moveRight(ball) {
  return ball.moveRight();
}

// Predicates
function leftmost(ball) {
  return ball.isAtLeftWall();
}

function rightmost(ball) {
  return ball.isAtRightWall();
}

// Example usage
console.log(moveLeft(ball)); // Example call to move the ball left
console.log(leftmost(ball)); // Check if ball is at the leftmost position
console.log(moveRight(ball)); // Example call to move the ball right
console.log(rightmost(ball)); // Check if ball is at the rightmost position
