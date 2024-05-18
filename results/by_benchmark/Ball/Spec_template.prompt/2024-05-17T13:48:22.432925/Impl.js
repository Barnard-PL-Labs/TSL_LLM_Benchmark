// Constants defining the limits of the movement area
const LEFT_WALL = 0;
const RIGHT_WALL = 100; // Example boundary value

// Functions
function moveLeft(ball) {
    if (ball.position > LEFT_WALL) {
        return { ...ball, position: ball.position - 1 };
    } else {
        return ball; // No movement if against the left wall
    }
}

function moveRight(ball) {
    if (ball.position < RIGHT_WALL) {
        return { ...ball, position: ball.position + 1 };
    } else {
        return ball; // No movement if against the right wall
    }
}

// Predicates
function leftmost(ball) {
    return ball.position === LEFT_WALL;
}

function rightmost(ball) {
    return ball.position === RIGHT_WALL;
}

// Example usage
let ball = { position: 10 };

console.log("Initial Position:", ball.position);
ball = moveLeft(ball);
console.log("Moved Left:", ball.position);
ball = moveRight(ball);
console.log("Moved Right:", ball.position);

console.log("Is at Leftmost?", leftmost(ball));
console.log("Is at Rightmost?", rightmost(ball));
