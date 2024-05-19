// Assuming ship is an object that can be manipulated via direct methods or properties
function moveLeft(ship) {
    ship.position -= 1; // Move the ship to the left by one unit
    return 'Moved Left';
}

function moveRight(ship) {
    ship.position += 1; // Move the ship to the right by one unit
    return 'Moved Right';
}

function shoot(ship) {
    // Trigger the ship's shooting mechanism
    ship.shoot();
    return 'Shot fired';
}

function die(ship) {
    // End game or decrement life, depending on game rules
    ship.lives -= 1;
    if (ship.lives <= 0) {
        console.log('Game Over');
    } else {
        console.log('Life lost, continue playing');
    }
    return 'Died';
}
