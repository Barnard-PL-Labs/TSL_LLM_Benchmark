// Functions
function rotateLeft(cube) {
    // Decrement the rotation on the y-axis to rotate left
    cube.rotation.y -= 0.1;
}

function rotateRight(cube) {
    // Increment the rotation on the y-axis to rotate right
    cube.rotation.y += 0.1;
}

// Predicates
// We will use key codes for the left (37) and right (39) arrows
let leftPressed = false;
let rightPressed = false;

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 37) {  // Left arrow key
        leftPressed = true;
    } else if (e.keyCode === 39) {  // Right arrow key
        rightPressed = true;
    }
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 37) {  // Left arrow key
        leftPressed = false;
    } else if (e.keyCode === 39) {  // Right arrow key
        rightPressed = false;
    }
});

function pressL() {
    return leftPressed;
}

function pressR() {
    return rightPressed;
}

// Usage example within an update function or game loop
function updateCube(cube) {
    if (pressL()) {
        rotateLeft(cube);
    }
    if (pressR()) {
        rotateRight(cube);
    }
}
