// Define the initial state and variables
let cube = {
  scale: {
    x: 0.5
  }
};
let isUpKeyPressed = false;
let count = 0.5;

// Event listeners for keydown and keyup events
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowUp') {
    isUpKeyPressed = true;
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowUp') {
    isUpKeyPressed = false;
    count = 0.5;  // Reset count when the key is released
    cube.scale.x = count;  // Update the scale immediately when the key is released
  }
});

// Function to update state
function updateState() {
  if (isUpKeyPressed) {
    count += 1;  // Increment the count each frame when the up key is pressed
    cube.scale.x = count;  // Update the cube's scale
  }
  
  // Return the current state
  return {
    cube,
    count
  };
}

// Animation frame to simulate the 'frame' concept where updateState is called periodically
function animate() {
  updateState();  // Update the state based on the current input
  console.log(`Cube scale x: ${cube.scale.x}, Count: ${count}`);  // Log the current scale and count for debugging
  requestAnimationFrame(animate);  // Continue the animation
}

// Start the animation
animate();
