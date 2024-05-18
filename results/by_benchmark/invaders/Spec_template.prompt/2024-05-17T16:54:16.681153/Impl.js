// Function to move the ship to the left by one unit
function moveLeft(ship) {
  if (!leftmost(ship)) {
    ship.position.x -= 1;  // Adjust this according to how your coordinate system is defined
    return "Moved left";
  }
  return "Cannot move left";
}

// Function to move the ship to the right by one unit
function moveRight(ship) {
  if (!rightmost(ship)) {
    ship.position.x += 1;  // Adjust this according to how your coordinate system is defined
    return "Moved right";
  }
  return "Cannot move right";
}

// Function to make the ship shoot
function shoot(ship) {
  // Assuming ship has a method to initiate shooting
  ship.fire();
  return "Shot fired";
}

// Function to handle the ship's destruction or death
function die(ship) {
  // Assuming there's a method to handle game over or life reduction
  ship.endGame();
  return "Game over";
}
