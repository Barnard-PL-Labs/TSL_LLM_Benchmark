// Assuming you have a cube object with rotation property
var cube = {
    rotation: {
        y: 0
    }
};

// Define the functions to rotate the cube left and right
function rotateLeft(cube) {
    cube.rotation.y -= 0.1; // Decrease rotation angle by 0.1 radians
    console.log(`Rotated left to ${cube.rotation.y} radians`);
}

function rotateRight(cube) {
    cube.rotation.y += 0.1; // Increase rotation angle by 0.1 radians
    console.log(`Rotated right to ${cube.rotation.y} radians`);
}

// Predicate to detect if the left button is pressed
function pressL(e) {
    return e.key === 'ArrowLeft';
}

// Predicate to detect if the right button is pressed
function pressR(e) {
    return e.key === 'ArrowRight';
}

// Event listener to handle key presses
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        rotateLeft(cube);
    } else if (pressR(e)) {
        rotateRight(cube);
    }
});

