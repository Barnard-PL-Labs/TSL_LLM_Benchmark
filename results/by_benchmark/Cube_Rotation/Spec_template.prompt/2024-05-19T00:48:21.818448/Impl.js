// Assuming 'cube' is an object that has a property 'rotation' which in turn has a property 'y'
const cube = {
    rotation: {
        y: 0 // Initial rotation of the cube
    }
};

// Functions
function rotateLeft(cube) {
    cube.rotation.y -= 5; // Decrease y rotation by 5 degrees
    console.log(`Cube rotated left to ${cube.rotation.y} degrees`);
}

function rotateRight(cube) {
    cube.rotation.y += 5; // Increase y rotation by 5 degrees
    console.log(`Cube rotated right to ${cube.rotation.y} degrees`);
}

// Predicates
function pressL(e) {
    return e.key === 'ArrowLeft'; // Returns true if the left arrow key is pressed
}

function pressR(e) {
    return e.key === 'ArrowRight'; // Returns true if the right arrow key is pressed
}

// Event listeners to bind keyboard events
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        rotateLeft(cube); // Rotate the cube left when the left arrow key is pressed
    } else if (pressR(e)) {
        rotateRight(cube); // Rotate the cube right when the right arrow key is pressed
    }
});
