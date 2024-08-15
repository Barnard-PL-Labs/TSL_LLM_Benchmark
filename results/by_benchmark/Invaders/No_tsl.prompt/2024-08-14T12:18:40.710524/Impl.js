function updateState({ currentState, inputL, inputR, inputS, ship }) {
    let output = {
        currentState: currentState,
        action: null,
        ship: ship
    };

    // Check if the ship has been hit
    if (hit(ship)) {
        output.action = die(ship);
        output.currentState = "dead";
        return output;
    }

    // Process movement input with mutual exclusion
    if (inputL && !inputR) {
        // Move left if not at the leftmost position
        if (!leftmost(ship)) {
            output.action = moveLeft(ship);
        }
    } else if (inputR && !inputL) {
        // Move right if not at the rightmost position
        if (!rightmost(ship)) {
            output.action = moveRight(ship);
        }
    }

    // Process shooting action
    if (inputS) {
        output.action = shoot(ship);
    }

    return output;
}

// Example of calling updateState with some inputs
const shipInitialState = {
    position: 5, // some arbitrary position
    status: "active" // active, dead, etc.
};

const inputs = {
    currentState: "playing",
    inputL: false,
    inputR: true,
    inputS: false,
    ship: shipInitialState
};

console.log(updateState(inputs));
