function updateState({ currentState, leftPressed, rightPressed, shootPressed }) {
    const { ship } = currentState;

    if (hit(ship)) {
        // If the ship is hit, trigger game over or damage sequence
        die(ship);
        return {
            currentState: {
                ...currentState,
                dead: 1,  // Setting a flag or similar action to indicate the ship has been hit
            }
        };
    } else {
        let action = null;

        // Process movement inputs with mutual exclusions
        if (leftPressed && !rightPressed) {
            // Move left if not at the leftmost position
            if (!leftmost(ship)) {
                action = moveLeft(ship);
            }
        } else if (rightPressed && !leftPressed) {
            // Move right if not at the rightmost position
            if (!rightmost(ship)) {
                action = moveRight(ship);
            }
        }

        // Process shooting action
        if (shootPressed) {
            action = shoot(ship);
        }

        // Return the new state; no change to the ship state itself beyond actions performed
        return {
            currentState: {
                ...currentState,
                action: action  // action here can be the result of moveLeft, moveRight, or shoot
            }
        };
    }
}
