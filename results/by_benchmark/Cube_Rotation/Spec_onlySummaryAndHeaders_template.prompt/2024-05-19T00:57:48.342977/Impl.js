// Assuming the "cube" variable represents a 3D cube object in the environment
let cube = {
    rotation: {
        y: 0  // Initial y rotation
    }
};

// Functions to rotate the cube left and right
function rotateLeft(cube) {
    cube.rotation.y -= 0.1;  // Decrease y rotation to rotate left
    console.log('Rotated Left: ', cube.rotation.y);
}

function rotateRight(cube) {
    cube.rotation.y += 0.1;  // Increase y rotation to rotate right
    console.log('Rotated Right: ', cube.rotation.y);
}

// Predicates to detect left and right button presses
// Setup boolean flags to track button state
let leftPressed = false;
let rightPressed = false;

// Function to simulate button press events
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        leftPressed = true;
        console.log('Left Button Pressed');
    } else if (e.key === "ArrowRight") {
        rightPressed = true;
        console.log('Right Button Pressed');
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === "ArrowLeft") {
        leftPressed = false;
    } else if (e.key === "ArrowRight") {
        rightPressed = false;
    }
});

function pressL(e) {
    return leftPressed;  // Returns true if left arrow key is pressed
}

function pressR(e) {
    return rightPressed; // Returns true if right arrow key is pressed
}

