// Functions
function moveLeft(ship) {
    // Assuming ship has a method to modify its horizontal position
    if (!leftmost(ship)) { // Check if not at the leftmost position
        ship.position.x -= 1; // Move left by one unit
    }
    return "Moved Left";
}

function moveRight(ship) {
    // Assuming ship has a method to modify its horizontal position
    if (!rightmost(ship)) { // Check if not at the rightmost position
        ship.position.x += 1; // Move right by one unit
    }
    return "Moved Right";
}

function shoot(ship) {
    // Assuming ship can trigger its shooting mechanism
    return "Shoot";
}

function die(ship) {
    // Assuming this function ends the game or reduces life
    console.log("Game Over or Life Lost");
}

// Predicates
function leftmost(ship) {
    // Assuming there is a known left boundary, perhaps at position x=0
    return ship.position.x === 0;
}

function rightmost(ship) {
    // Assuming there is a known right boundary, perhaps at position x=width-1 where width is the width of the playable area.
    return ship.position.x === ship.boundary.right;
}

function hit(ship) {
    // Assuming ship has a property 'hitStatus' that is true if hit
    return ship.hitStatus === true;
}
