// Creating an object to store the state of key presses
const keyState = {
  upPressed: false
};

// Adding an event listener for the "keydown" event to detect when keys are pressed
document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowUp") { // Check if the key is the up arrow
    keyState.upPressed = true;
  }
});

// Adding an event listener for the "keyup" event to reset the state when the key is released
document.addEventListener('keyup', function(event) {
  if (event.key === "ArrowUp") {
    keyState.upPressed = false;
  }
});

// Predicate to check if the up arrow key is pressed
function pressUp() {
  return keyState.upPressed;
}
