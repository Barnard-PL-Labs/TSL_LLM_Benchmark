// Define the cube object with rotation property
let cube = {
    rotation: { y: 0 }
};

// Functions
function rotateLeft(cube) {
    // Assuming rotation to the left decreases the y-axis angle
    cube.rotation.y -= 1;
}

function rotateRight(cube) {
    // Assuming rotation to the right increases the y-axis angle
    cube.rotation.y += 1;
}

// Predicates
function pressL(e) {
    // Check if the left arrow key is pressed
    return e.key === "ArrowLeft";
}

function pressR(e) {
    // Check if the right arrow key is pressed
    return e.key === "ArrowRight";
}

// Event listeners for key presses
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        console.log("Left button pressed");
        rotateLeft(cube);
        console.log("Cube rotation (y):", cube.rotation.y);
    } else if (pressR(e)) {
        console.log("Right button pressed");
        rotateRight(cube);
        console.log("Cube rotation (y):", cube.rotation.y);
    }
});
