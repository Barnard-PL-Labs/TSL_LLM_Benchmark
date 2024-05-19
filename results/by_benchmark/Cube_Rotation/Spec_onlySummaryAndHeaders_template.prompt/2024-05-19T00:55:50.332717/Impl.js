// Assuming the cube object with a rotation property is available in the scope.
// This `cube` object should have a property like `cube.rotation.y` which is a numeric value.

/**
 * Functions to rotate the cube.
 */
function rotateLeft(cube) {
  // Assuming cube.rotation.y is in degrees, decrease to rotate left.
  cube.rotation.y -= 10; // Rotate the cube left by 10 degrees
  console.log("Cube rotated left to", cube.rotation.y, "degrees");
}

function rotateRight(cube) {
  // Assuming cube.rotation.y is in degrees, increase to rotate right.
  cube.rotation.y += 10; // Rotate the cube right by 10 degrees
  console.log("Cube rotated right to", cube.rotation.y, "degrees");
}

/**
 * Predicate functions to determine if specific buttons are pressed.
 * Attach event listeners to appropriate input elements or keys.
 */

// Dummy HTML buttons for demonstration purposes:
// <button id="leftButton">Left</button>
// <button id="rightButton">Right</button>

function setupButtonListeners() {
  const leftButton = document.getElementById('leftButton');
  const rightButton = document.getElementById('rightButton');

  // State variables to track button press
  let leftPressed = false;
  let rightPressed = false;

  // Event listeners
  leftButton.addEventListener('mousedown', () => {
    leftPressed = true;
    console.log("Left button pressed");
  });
  
  leftButton.addEventListener('mouseup', () => {
    leftPressed = false;
    console.log("Left button released");
  });

  rightButton.addEventListener('mousedown', () => {
    rightPressed = true;
    console.log("Right button pressed");
  });

  rightButton.addEventListener('mouseup', () => {
    rightPressed = false;
    console.log("Right button released");
  });

  // Predicate functions
  window.pressL = function() {
    return leftPressed;
  }
  
  window.pressR = function() {
    return rightPressed;
  }
}

// Call setup function to initiate the event listeners
setupButtonListeners();
