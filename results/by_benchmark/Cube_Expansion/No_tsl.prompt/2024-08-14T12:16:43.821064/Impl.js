function setupCubeScaleInteraction() {
    let count = 0.5; // Initial value of the counter when the up key is not pressed
    let isUpKeyPressed = false; // State to track if the up key is pressed

    // Function to update the scale of the cube based on the current count
    function updateCubeScale() {
        cube.scale.x = count;
    }

    // Event listener for keydown to detect when the up key is pressed
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp') {
            isUpKeyPressed = true;
        }
    });

    // Event listener for keyup to detect when the up key is released
    document.addEventListener('keyup', function(event) {
        if (event.key === 'ArrowUp') {
            isUpKeyPressed = false;
            count = 0.5; // Reset count to initial value when key is released
            updateCubeScale(); // Update the cube scale immediately when the key is released
        }
    });

    // Animation frame loop to handle the increment of the counter
    function animate() {
        if (isUpKeyPressed) {
            count += 1; // Increment count by 1 every frame if the up key is pressed
            updateCubeScale(); // Update the cube scale with the new count value
        }
        requestAnimationFrame(animate); // Continue the loop
    }

    animate(); // Start the animation loop
}

// Example usage
let cube = { scale: { x: 0.5 } }; // Mock a cube object
setupCubeScaleInteraction(); // Setup interaction and start listening for key events
