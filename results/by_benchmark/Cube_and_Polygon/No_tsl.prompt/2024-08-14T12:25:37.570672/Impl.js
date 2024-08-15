function updateState({ currentState, count, event }) {
    const { cube, polygon } = currentState;

    // Initial state setup if not provided
    if (cube === undefined) {
        cube = { position: { x: 1 }, rotation: { y: 0 } };
    }
    if (polygon === undefined) {
        polygon = { position: { x: 3 }, rotation: { y: 0 } };
    }
    if (count === undefined) {
        count = 0;
    }

    // Update count based on key presses
    if (pressR(event)) {
        count += 0.1;
    } else if (pressL(event)) {
        count -= 0.1;
    }

    // Update rotations based on updated count
    cube.rotation.y = Math.sin(2 * count);
    polygon.rotation.y = saw(0.5 * (1 + count));

    return { currentState: { cube, polygon }, count };
}

// Helper functions simulating the environment interaction
function pressL(e) {
    // Simulate the left key press
    return e.key === 'ArrowLeft';
}

function pressR(e) {
    // Simulate the right key press
    return e.key === 'ArrowRight';
}

// Sample sawtooth wave function
function saw(x) {
    return x - Math.floor(x);
}

// Example of using the function with an initial state and a simulated key press event
let state = {
    currentState: {
        cube: { position: { x: 1 }, rotation: { y: 0 } },
        polygon: { position: { x: 3 }, rotation: { y: 0 } }
    },
    count: 0
};

// Simulated right key press event
let event = { key: 'ArrowRight' };

// Update state based on the event
state = updateState({...state, event});
console.log(state);

// Update state again with another key press
event = { key: 'ArrowLeft' };
state = updateState({...state, event});
console.log(state);
