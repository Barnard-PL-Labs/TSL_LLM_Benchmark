// Assuming `cube` is an object available in the environment with a property `rotation` which is also an object having properties like `y`.

const cube = {
    rotation: {
        y: 0 // Initial rotation around the y-axis
    }
};

// Functions to manipulate cube's rotation
function rotateLeft(cube) {
    cube.rotation.y -= 90; // Rotate left by 90 degrees
    console.log(`Rotated Left: New y rotation = ${cube.rotation.y} degrees`);
}

function rotateRight(cube) {
    cube.rotation.y += 90; // Rotate right by 90 degrees
    console.log(`Rotated Right: New y rotation = ${cube.rotation.y} degrees`);
}

// Predicates to check button presses using keyboard events
function setupButtonListeners() {
    // Storing the state of button presses
    const buttonState = {
        leftPressed: false,
        rightPressed: false
    };

    // Function to be called when a key is pressed
    function onKeyDown(e) {
        if (e.key === 'ArrowLeft') {
            buttonState.leftPressed = true;
            console.log('Left button pressed');
        } else if (e.key === 'ArrowRight') {
            buttonState.rightPressed = true;
            console.log('Right button pressed');
        }
    }

    // Function to be called when a key is released
    function onKeyUp(e) {
        if (e.key === 'ArrowLeft') {
            buttonState.leftPressed = false;
        } else if (e.key === 'ArrowRight') {
            buttonState.rightPressed = false;
        }
    }

    // Adding event listeners to the document
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    // Return the predicate functions
    return {
        pressL: () => buttonState.leftPressed,
        pressR: () => buttonState.rightPressed
    };
}

// Set up the event listeners and get the predicate functions
const { pressL, pressR } = setupButtonListeners();

// Example usage:
setInterval(() => {
    if (pressL()) {
        rotateLeft(cube);
    } else if (pressR()) {
        rotateRight(cube);
    }
}, 100); // Check every 100 milliseconds
