// Definition of the `cube` object for demonstration purposes. 
// In a real application, this would be provided by the system API.
const cube = {
    rotation: {
        y: 0
    }
};

// Functions to manipulate the cube
function rotateLeft(cube) {
    cube.rotation.y -= 10; // Decrements the y rotation; adjust the value as needed for visible rotation
    console.log(`Rotated Left: cube.rotation.y is now ${cube.rotation.y}`);
}

function rotateRight(cube) {
    cube.rotation.y += 10; // Increments the y rotation; adjust the value as needed for visible rotation
    console.log(`Rotated Right: cube.rotation.y is now ${cube.rotation.y}`);
}

// Predicate function factories for detecting button presses.
// These functions accept an event argument and check if a specific button was pressed.
// Assuming that `e` is an event object with a property `button` where 
// left button is represented as 0 and right button as 1.

function pressL(e) {
    return e.button === 0; // Left mouse button
}

function pressR(e) {
    return e.button === 1; // Right mouse button
}

// Example usage with event listeners
document.addEventListener('mousedown', function(e) {
    if (pressL(e)) {
        rotateLeft(cube);
    } else if (pressR(e)) {
        rotateRight(cube);
    }
});
