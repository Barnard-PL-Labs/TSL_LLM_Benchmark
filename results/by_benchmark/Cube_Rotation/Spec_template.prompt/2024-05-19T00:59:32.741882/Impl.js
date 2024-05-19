// Assuming 'cube' is available in the scope as an object with a rotation property
let cube = {
    rotation: {
        y: 0
    }
};

// Functions to rotate the cube
function rotateLeft(cube) {
    // Rotate the cube to the left by decrementing the y rotation
    cube.rotation.y -= 0.1;  // adjust rotation step as needed
    console.log(`Rotated Left: cube.rotation.y = ${cube.rotation.y}`);
}

function rotateRight(cube) {
    // Rotate the cube to the right by incrementing the y rotation
    cube.rotation.y += 0.1;  // adjust rotation step as needed
    console.log(`Rotated Right: cube.rotation.y = ${cube.rotation.y}`);
}

// Predicates using button presses
function pressL(e) {
    return e.key === 'ArrowLeft';  // Check if the left arrow key is pressed
}

function pressR(e) {
    return e.key === 'ArrowRight';  // Check if the right arrow key is pressed
}

// Event listeners for key presses
document.addEventListener('keydown', (e) => {
    if (pressL(e)) {
        rotateLeft(cube);  // Rotate left if left button (arrow key) is pressed
    } else if (pressR(e)) {
        rotateRight(cube);  // Rotate right if right button (arrow key) is pressed
    }
});
