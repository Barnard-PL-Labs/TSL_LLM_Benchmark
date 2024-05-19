// Here are your ship control functions and predicates:

// Functions for controlling the ship
function moveLeft(ship) {
    // Assuming there's a method or property to adjust the ship's position
    if (!leftmost(ship)) {  // Check if not against the leftmost boundary
        ship.position.x -= 1;  // Move the ship left by one unit
        return "Moved Left";
    }
    return "Move Blocked: Leftmost position reached";
}

function moveRight(ship) {
    // Assuming there's a method or property to adjust the ship's position
    if (!rightmost(ship)) {  // Check if not against the rightmost boundary
        ship.position.x += 1;  // Move the ship right by one unit
        return "Moved Right";
    }
    return "Move Blocked: Rightmost position reached";
}

function shoot(ship) {
    // Assuming there's a method to trigger shooting
    ship.shoot();  // Trigger ship's shooting action
    return "Fired Weapon";
}

function die(ship) {
    // Assuming there's a method or property to handle game over or life loss
    ship.gameOver();  // Trigger the end game or life loss
    return "Game Over: Ship has been destroyed";
}

// Predicates for checking ship's state
function leftmost(ship) {
    // Assuming there's a way the ship knows its position or the game world boundaries
    return ship.position.x === 0;  // True if ship is at the leftmost position
}

function rightmost(ship) {
    // Assuming there's a way to know the world width or max allowed x position
    const worldWidth = 10;  // Assuming world width is 10 units
    return ship.position.x >= worldWidth;  // True if ship is at the rightmost position
}

function hit(ship) {
    // Assuming there's a method or property to check if the ship has been hit
    return ship.isHit;  // True if the ship has been hit by an enemy
}
