function moveLeft(ship) {
    // This function should send a signal to move the ship left by one unit.
    // Assuming there is a system API function called `moveShipLeft`.
    systemAPI.moveShipLeft(ship);
}

function moveRight(ship) {
    // This function should send a signal to move the ship right by one unit.
    // Assuming there is a system API function called `moveShipRight`.
    systemAPI.moveShipRight(ship);
}

function shoot(ship) {
    // This function should send a signal to perform a shooting action.
    // Assuming there is a system API function called `shipShoot`.
    systemAPI.shipShoot(ship);
}

function die(ship) {
    // This function could either end the game or reduce life, depending on game logic.
    // Assuming there is a system API function called `endGame` or `loseLife`.
    systemAPI.endGame(ship);  // or systemAPI.loseLife(ship); depending on the specific game rules
}
