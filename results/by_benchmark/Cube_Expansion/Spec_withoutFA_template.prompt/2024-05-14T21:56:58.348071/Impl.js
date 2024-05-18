// Predicate Setup
let isUpKeyPressed = false;

// Event listeners for key detection
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
        isUpKeyPressed = false;
    }
});

// Usage of the predicate in a system environment that requires checking the 'Up' key press
function checkUpKeyPress() {
    if (isUpKeyPressed) {
        // Perform actions when Up key is pressed
        console.log("Up key is pressed.");
        // Example: Set cube's scale on x-axis, suppose 'cube' is an object representing a 3D model
        cube.scale.x = 2;  // Example setting, assuming 'cube' and its property 'scale.x' are accessible
    } else {
        // Perform actions when Up key is not pressed
        console.log("Up key is not pressed.");
        cube.scale.x = 1;  // Reset to default scale, assuming 'cube' and its property 'scale.x' are accessible
    }
}

// Optionally, you can periodically check this state or use this in an animation loop
setInterval(checkUpKeyPress, 100);  // Checks the key press state every 100ms
