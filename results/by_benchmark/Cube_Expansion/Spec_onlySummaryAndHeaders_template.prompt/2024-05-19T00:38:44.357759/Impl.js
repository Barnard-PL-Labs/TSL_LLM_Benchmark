// Variable to store the state of the up arrow key
let isUpKeyPressed = false;

// Event listener for keydown events
document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowUp") {
    isUpKeyPressed = true;
  }
});

// Event listener for keyup events to reset the key state
document.addEventListener('keyup', function(e) {
  if (e.key === "ArrowUp") {
    isUpKeyPressed = false;
  }
});

// Predicate to check if the up arrow key is pressed
function pressUp() {
  return isUpKeyPressed;
}
