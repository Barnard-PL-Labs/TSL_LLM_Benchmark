// Setting up a flag to monitor the state of the up arrow key
let upKeyPressed = false;

// Function to update the flag based on the up arrow key
function checkUpArrowKeyPress(event) {
    if (event.keyCode === 38) {  // 38 is the key code for the up arrow key
        upKeyPressed = true;
    } else {
        upKeyPressed = false;
    }
}

// Adding the event listener to the document to capture keydown events
document.addEventListener('keydown', checkUpArrowKeyPress);

// Adding an event listener to reset the flag on keyup to ensure the predicate can evaluate to false
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        upKeyPressed = false;
    }
});

// Predicate function that checks the state of the up arrow key press
function pressUp(e) {
    return upKeyPressed;
}
