// Define the cube object that holds the rotation state
let cube = {
    rotation: {
        y: 0
    }
};

// Function to rotate the cube to the left
function rotateLeft(cube) {
    // Assuming rotating left decreases the rotation angle
    cube.rotation.y -= Math.PI / 4;  // Rotate by 45 degrees
    console.log(`Rotated left to ${cube.rotation.y} radians`);
}

// Function to rotate the cube to the right
function rotateRight(cube) {
    // Assuming rotating right increases the rotation angle
    cube.rotation.y += Math.PI / 4;  // Rotate by 45 degrees
    console.log(`Rotated right to ${cube.rotation.y} radians`);
}

// Predicate to check if the left button is pressed
function pressL(e) {
    // Assuming 'e' is the event object and 'keyCode' for left arrow is 37
    return e.keyCode === 37;
}

// Predicate to check if the right button is pressed
function pressR(e) {
    // Assuming 'e' is the event object and 'keyCode' for right arrow is 39
    return e.keyCode === 39;
}

// Adding event listeners to detect key presses
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        console.log("Left button pressed");
        rotateLeft(cube);
    } else if (pressR(e)) {
        console.log("Right button pressed");
        rotateRight(cube);
    }
});
