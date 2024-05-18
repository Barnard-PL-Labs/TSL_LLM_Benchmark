// Global variable to track the state of the 'Up' arrow key
let isUpKeyPressed = false;

// Function to initialize event listeners for keyboard interactions
function setupKeyPressListeners() {
  // Listen for the 'keydown' event to detect when keys are pressed
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
      isUpKeyPressed = true;  // Set to true when 'Up' key is pressed
    }
  });

  // Listen for the 'keyup' event to detect when keys are released
  document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
      isUpKeyPressed = false;  // Set to false when 'Up' key is released
    }
  });
}

// Predicate to check if the 'Up' arrow key is currently pressed
function pressUp() {
  return isUpKeyPressed;
}

// Initialize the key press listeners when the page is ready
setupKeyPressListeners();
