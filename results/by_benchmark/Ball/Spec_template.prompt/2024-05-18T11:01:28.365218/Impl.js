// Functions
function moveLeft(ball) {
    // Assuming we communicate with the ball through a method `sendSignal`
    // This function returns a signal, which we'll represent as a string or object
    return { action: 'move', direction: 'left', target: ball };
}

function moveRight(ball) {
    // Similar to moveLeft but sends a signal to move the ball to the right
    return { action: 'move', direction: 'right', target: ball };
}

// Predicates
function leftmost(ball) {
    // Assuming `ball` has properties that define its position
    // and a method to check if it's at the leftmost position
    // For example, we assume ball.position can be 'leftmost'
    return ball.position === 'leftmost';
}

function rightmost(ball) {
    // Similar to leftmost, checks if the ball is at the rightmost position
    return ball.position === 'rightmost';
}

/* Usage Examples */

// Sample ball object
let ball = {
    position: 'center', // other potential values: 'leftmost', 'rightmost'
    sendSignal: function(signal) {
        console.log(`Signal sent to move ${signal.direction}`);
        this.position = signal.direction === 'left' ? 'leftmost' : 'rightmost'; // simplistic position update
    }
};

// Move the ball left
let leftSignal = moveLeft(ball);
ball.sendSignal(leftSignal);

// Check if the ball is at the leftmost position
if (leftmost(ball)) {
    console.log("The ball is at the leftmost position.");
}

// Move the ball right
let rightSignal = moveRight(ball);
ball.sendSignal(rightSignal);

// Check if the ball is at the rightmost position
if (rightmost(ball)) {
    console.log("The ball is at the rightmost position.");
}
