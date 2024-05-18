// Initialize a variable to track the state of the up arrow key
let isUpKeyPressed = false;

// Function to be used as a predicate
function pressUp() {
  return isUpKeyPressed;
}

// Event listener for 'keydown' event to detect if the up arrow key is pressed
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowUp') {
    isUpKeyPressed = true;
  }
});

// Event listener for 'keyup' event to reset the up arrow key state when it is released
document.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowUp') {
    isUpKeyPressed = false;
  }
});
