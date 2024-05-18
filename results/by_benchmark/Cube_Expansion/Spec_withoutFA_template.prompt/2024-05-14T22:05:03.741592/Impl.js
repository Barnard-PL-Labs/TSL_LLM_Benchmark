// A variable to keep track of whether the up key is currently pressed
let isUpKeyPressed = false;

// Function to set up event listeners
function initializeKeyListeners() {
  // Adding event listener for keydown
  document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") { // Check if the key pressed is the up arrow key
      isUpKeyPressed = true; // Set isUpKeyPressed to true if up arrow key is pressed
    }
  });

  // Adding event listener for keyup
  document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") { // Check if the key released is the up arrow key
      isUpKeyPressed = false; // Set isUpKeyPressed to false when up arrow key is released
    }
  });
}

// Predicate function
function pressUp() {
  return isUpKeyPressed; // Return the current state of the up key
}

// Initialize key listeners when the script loads
initializeKeyListeners();
