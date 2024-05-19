// Assuming `cube` is an object representing the cube with a rotation property
const cube = {
    rotation: {
        y: 0  // initial y rotation of the cube
    }
};

// Function to rotate the cube to the left
function rotateLeft(cube) {
    cube.rotation.y -= 10;  // Decrements the y rotation by 10 degrees
    console.log(`Rotated Left: New rotation = ${cube.rotation.y} degrees`);
}

// Function to rotate the cube to the right
function rotateRight(cube) {
    cube.rotation.y += 10;  // Increments the y rotation by 10 degrees
    console.log(`Rotated Right: New rotation = ${cube.rotation.y} degrees`);
}

// Predicate to check if the left button is pressed
function pressL(e) {
    return e.key === 'ArrowLeft';  // Returns true if the left arrow key is pressed
}

// Predicate to check if the right button is pressed
function pressR(e) {
    return e.key === 'ArrowRight';  // Returns true if the right arrow key is pressed
}

// Adding event listeners to the document to detect key presses
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        rotateLeft(cube);  // Rotate the cube left if the left button is pressed
    } else if (pressR(e)) {
        rotateRight(cube);  // Rotate the cube right if the right button is pressed
    }
});
