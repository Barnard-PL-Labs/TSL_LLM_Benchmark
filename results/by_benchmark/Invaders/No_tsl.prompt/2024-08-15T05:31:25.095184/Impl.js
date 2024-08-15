function updateState({ currentState, inputL, inputR, inputS, ship }) {
  let output = {};
  
  // Handling the case where the ship is hit by an enemy
  if (hit(ship)) {
    output.command = die(ship); // Execute the die function, game over or lose life
    output.dead = 1; // Set dead flag to 1
    return { ...currentState, ...output, ship };
  }

  // Process left movement input
  if (inputL && !inputR && !leftmost(ship)) {
    // Move left only if not at the leftmost position
    output.ship = moveLeft(ship);
  }

  // Process right movement input
  if (inputR && !inputL && !rightmost(ship)) {
    // Move right only if not at the rightmost position
    output.ship = moveRight(ship);
  }

  // Process shooting action
  if (inputS) {
    output.command = shoot(ship); // Execute the shoot function to trigger shooting
  }

  // Ensure only valid updates are returned, or return unchanged ship if no valid input
  return { ...currentState, ...output, ship: output.ship || ship };
}

// Example usage:
const gameState = {
  currentState: {},
  inputL: true, // left key pressed
  inputR: false, // right key not pressed
  inputS: false, // shoot key not pressed
  ship: { position: 5, health: 100 } // Initial state of the ship
};

const newState = updateState(gameState);
console.log(newState);
