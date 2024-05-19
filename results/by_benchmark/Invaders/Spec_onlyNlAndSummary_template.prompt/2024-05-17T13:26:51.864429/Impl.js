// Assuming an API object that allows interaction with the ship
const shipAPI = {
    // Mock implementations that interact with the ship
    moveLeft: (ship) => ship.position.x -= 1,
    moveRight: (ship) => ship.position.x += 1,
    shoot: (ship) => console.log("Shooting from", ship.position),
    die: (ship) => console.log("Game Over for ship at", ship.position),
    checkLeftmost: (ship) => ship.position.x === 0,
    checkRightmost: (ship) => ship.position.x === ship.maxX,
    checkHit: (ship) => ship.hitStatus
};

// Functions
function moveLeft(ship) {
    if (!shipAPI.checkLeftmost(ship)) {
        shipAPI.moveLeft(ship);
        return "Moved Left";
    }
    return "Cannot move left";
}

function moveRight(ship) {
    if (!shipAPI.checkRightmost(ship)) {
        shipAPI.moveRight(ship);
        return "Moved Right";
    }
    return "Cannot move right";
}

function shoot(ship) {
    return shipAPI.shoot(ship);
}

function die(ship) {
    return shipAPI.die(ship);
}

// Predicates
function leftmost(ship) {
    return shipAPI.checkLeftmost(ship);
}

function rightmost(ship) {
    return shipAPI.checkRightmost(ship);
}

function hit(ship) {
    return shipAPI.checkHit(ship);
}

// Example usage with a ship object
const ship = {
    position: { x: 5, y: 3 },
    maxX: 10,
    hitStatus: false
};

console.log(moveLeft(ship));  // Moves the ship left
console.log(moveRight(ship)); // Moves the ship right
console.log(shoot(ship));     // Ship shoots
console.log(die(ship));       // Simulate game over

console.log(leftmost(ship));  // Checks if ship is at leftmost position
console.log(rightmost(ship)); // Checks if ship is at rightmost position
console.log(hit(ship));       // Checks if ship has been hit
