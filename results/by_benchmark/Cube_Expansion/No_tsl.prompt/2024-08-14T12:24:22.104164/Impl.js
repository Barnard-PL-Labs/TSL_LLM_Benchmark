// Define the initial state variables
let cube = { scale: { x: 0.5 } };
let isUpPressed = false;
let count = 0.5;

// Event listeners for key down and key up events
document.addEventListener('keydown', (event) => {
  if (event.key === "ArrowUp") {
    isUpPressed = true;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === "ArrowUp") {
    isUpPressed = false;
    count = 0.5; // Reset count to 0.5 when the key is released
  }
});

// Function to update the cube's state
function updateState() {
  if (isUpPressed) {
    count += 1; // Increment count each frame when the up key is pressed
  } else {
    count = 0.5; // Maintain count at 0.5 when the up key is not pressed
  }
  
  cube.scale.x = count; // Update the cube's scale x with the value of count
  
  return {
    currentState: cube,
    count: count
  };
}

// A function to continuously update the state at a certain time interval
function animate() {
  updateState();
  requestAnimationFrame(animate); // Continue updating in sync with the browser's refresh rate
}

// Start the animation function
animate();
