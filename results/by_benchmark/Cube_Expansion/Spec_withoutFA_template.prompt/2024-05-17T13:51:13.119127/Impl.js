// Create a variable to keep track of the state of the up arrow key
let isUpKeyPressed = false;

// Add an event listener to the window to listen for keydown events
window.addEventListener('keydown', function(event) {
  // Check if the key pressed is the up arrow key (key code 38)
  if (event.keyCode === 38) {
    isUpKeyPressed = true;
  }
});

// Add an event listener to the window to listen for keyup events
window.addEventListener('keyup', function(event) {
  // Check if the key released is the up arrow key
  if (event.keyCode === 38) {
    isUpKeyPressed = false;
  }
});

// Predicate function to check if the up arrow key is pressed
function pressUp() {
  return isUpKeyPressed;
}
