// Functions to manipulate the ship state
function moveLeft(ship) {
    // Assuming ship can decrement its position on x-axis to move left
    if (!leftmost(ship)) {
        ship.position.x -= 1;
    }
    return "Moved Left";
}

function moveRight(ship) {
    // Assuming ship can increment its position on x-axis to move right
    if (!rightmost(ship)) {
        ship.position.x += 1;
    }
    return "Moved Right";
}

function shoot(ship) {
    // Assuming ship shoots a projectile
    console.log("Ship fires a projectile!");
    return "Shoot";
}

function die(ship) {
    // Assuming this function handles end game or loses life
    console.log("Game Over or Life Lost!");
    return "Die";
}

// Predicates to check ship state
function leftmost(ship) {
    // Assuming there is a boundary check for the leftmost position
    return ship.position.x === 0;
}

function rightmost(ship) {
    // Assuming there is a boundary check for the rightmost position
    return ship.position.x === ship.maxX;
}

function hit(ship) {
    // Assuming ship has a status that shows if it has been hit
    return ship.isHit;
}

// Usage example:
const ship = {
    position: { x: 5, y: 10 },
    maxX: 10,
    isHit: false
};

console.log(moveLeft(ship)); // Move the ship left
console.log(ship.position.x); // Output new position for verification

console.log(rightmost(ship)); // Check if ship is at the rightmost position
console.log(hit(ship)); // Check if the ship has been hit
