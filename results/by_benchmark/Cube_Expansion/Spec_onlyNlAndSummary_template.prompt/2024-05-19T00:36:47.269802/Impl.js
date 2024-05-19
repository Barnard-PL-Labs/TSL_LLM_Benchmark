// Predicate state - initially, the up key is not pressed.
let isUpKeyPressed = false;

// Function to check if the up arrow key is pressed
function checkUpKeyPress(event) {
  // Update the state when the up arrow key is pressed
  if (event.keyCode === 38) {
    isUpKeyPressed = true;
  }
}

// Function to reset the key press state when the key is released
function resetUpKeyPress(event) {
  // Reset the state when the up arrow key is released
  if (event.keyCode === 38) {
    isUpKeyPressed = false;
  }
}

// Add event listeners for keydown and keyup
document.addEventListener('keydown', checkUpKeyPress);
document.addEventListener('keyup', resetUpKeyPress);

// Predicate function to return the current state of the up key
function pressUp() {
  return isUpKeyPressed;
}
