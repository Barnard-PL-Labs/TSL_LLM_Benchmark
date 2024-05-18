// Variable to keep track of the up key press state
let isUpKeyPressed = false;

// Function to update the state when the up key is pressed
document.addEventListener('keydown', function(event) {
  if (event.key === "ArrowUp") {
    isUpKeyPressed = true;
  }
});

// Function to reset the state when the up key is released
document.addEventListener('keyup', function(event) {
  if (event.key === "ArrowUp") {
    isUpKeyPressed = false;
  }
});

// Predicate to check if the up key is pressed
function pressUp() {
  return isUpKeyPressed;
}
