// Functions
function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    // simplified sawtooth wave using modulo for periodicity
    return 2 * (x / Math.PI - Math.floor(0.5 + x / Math.PI));
}

// Predicates State (to track button presses)
let leftPressed = false;
let rightPressed = false;

function setupEventListeners() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            leftPressed = true;
        }
        if (e.key === 'ArrowRight') {
            rightPressed = true;
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowLeft') {
            leftPressed = false;
        }
        if (e.key === 'ArrowRight') {
            rightPressed = false;
        }
    });
}

// Predicates
function pressL() {
    return leftPressed;
}

function pressR() {
    return rightPressed;
}

// Set up event listeners when the script loads
setupEventListeners();
