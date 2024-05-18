// Assuming a cube object with a rotation property already exists
let cube = {
    rotation: {
        y: 0
    }
};

// Functions to rotate the cube left and right
function rotateLeft(cube) {
    // Rotate left by decrementing the y rotation value
    cube.rotation.y -= 0.1;
    console.log(`Rotated Left: New rotation.y = ${cube.rotation.y}`);
}

function rotateRight(cube) {
    // Rotate right by incrementing the y rotation value
    cube.rotation.y += 0.1;
    console.log(`Rotated Right: New rotation.y = ${cube.rotation.y}`);
}

// Predicates to determine button presses
// Setting up event listeners for left (L key) and right (R key) presses

function setupButtonListeners() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'L' || e.key === 'l') {
            if (pressL(e)) {
                rotateLeft(cube);
            }
        } else if (e.key === 'R' || e.key === 'r') {
            if (pressR(e)) {
                rotateRight(cube);
            }
        }
    });
}

function pressL(e) {
    return e.key === 'L' || e.key === 'l';
}

function pressR(e) {
    return e.key === 'R' || e.key === 'r';
}

// Initialize the button listeners
setupButtonListeners();
