let isUpPressed = false;

// Function to check if the 'up' arrow key is pressed
function checkUpKeyPress(event) {
    if (event.key === "ArrowUp") {
        isUpPressed = true;
    } else {
        isUpPressed = false;
    }
}

// Adding event listener to the whole document
document.addEventListener('keydown', checkUpKeyPress);

// Adding event listener to reset the key state when it is not pressed
document.addEventListener('keyup', (event) => {
    if (event.key === "ArrowUp") {
        isUpPressed = false;
    }
});

// Predicate function to be used as per requirement
function pressUp() {
    return isUpPressed;
}
