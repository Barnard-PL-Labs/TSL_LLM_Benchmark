// Assuming we have an HTML element representing the cube on which we can listen to events
const cube = document.getElementById('cube');

// Functions for rotating the cube
function rotateLeft(cube) {
    // Increase the rotation along the y-axis to rotate left
    cube.style.transform = `rotateY(${cube.rotation.y - 90}deg)`;
    // Update the rotation state
    cube.rotation.y -= 90;
}

function rotateRight(cube) {
    // Increase the rotation along the y-axis to rotate right
    cube.style.transform = `rotateY(${cube.rotation.y + 90}deg)`;
    // Update the rotation state
    cube.rotation.y += 90;
}

// Initialize cube rotation property if not existent
if (!cube.rotation) {
    cube.rotation = { y: 0 };
}

// Predicates to check button presses
function pressL(e) {
    // Returns true if the left button (key code 37 - Arrow Left) is pressed
    return e.keyCode === 37;
}

function pressR(e) {
    // Returns true if the right button (key code 39 - Arrow Right) is pressed
    return e.keyCode === 39;
}

// Event listener to handle keydown events and perform rotation
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        rotateLeft(cube);
    } else if (pressR(e)) {
        rotateRight(cube);
    }
});
