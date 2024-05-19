// Functions to manipulate the cube's rotation
function rotateLeft(cube) {
    // Assuming counter-clockwise rotation is desired for 'left'
    cube.rotation.y -= 0.1; // Adjust rotation step as needed
}

function rotateRight(cube) {
    // Assuming clockwise rotation is desired for 'right'
    cube.rotation.y += 0.1; // Adjust rotation step as needed
}

// Predicate functions using event listeners
function setupButtonListeners() {
    let leftPressed = false;
    let rightPressed = false;

    // Event listeners for key presses
    window.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            leftPressed = true;
        }
        if (e.key === 'ArrowRight') {
            rightPressed = true;
        }
    });

    window.addEventListener('keyup', function(e) {
        if (e.key === 'ArrowLeft') {
            leftPressed = false;
        }
        if (e.key === 'ArrowRight') {
            rightPressed = false;
        }
    });

    // Predicates for button presses
    function pressL() {
        return leftPressed;
    }

    function pressR() {
        return rightPressed;
    }

    // To use the predicates outside of this function, you might want to return or expose them
    // For example, via object or module exports
    return { pressL, pressR };
}

// Example usage
const { pressL, pressR } = setupButtonListeners();

// Now pressL and pressR can be used as predicates in your system
