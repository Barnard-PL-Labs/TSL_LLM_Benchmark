// Setting up a variable to track the state of the up arrow key
let isUpArrowPressed = false;

// Function to handle the 'keydown' event
function handleKeyDown(event) {
    if (event.key === "ArrowUp") {
        isUpArrowPressed = true;
    }
}

// Function to handle the 'keyup' event
function handleKeyUp(event) {
    if (event.key === "ArrowUp") {
        isUpArrowPressed = false;
    }
}

// Adding event listeners to the document
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// Predicate to check if the up arrow key is pressed
function pressUp() {
    return isUpArrowPressed;
}

// Usage of the predicate
if (pressUp()) {
    console.log("The Up Arrow key is currently pressed.");
}
