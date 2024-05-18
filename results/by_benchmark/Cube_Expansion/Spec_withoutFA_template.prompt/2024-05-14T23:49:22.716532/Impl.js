// Create an object to keep track of the key states
const keyStates = {
  upArrowPressed: false
};

// Event listener for keydown event to detect when the up arrow key is pressed
document.addEventListener('keydown', function(e) {
  if (e.keyCode === 38) {  // 38 is the keyCode for the up arrow key
    keyStates.upArrowPressed = true;
  }
});

// Event listener for keyup event to reset the state when the up arrow key is released
document.addEventListener('keyup', function(e) {
  if (e.keyCode === 38) {
    keyStates.upArrowPressed = false;
  }
});

// Predicate function to check if the up key is pressed
function pressUp() {
  return keyStates.upArrowPressed;
}
