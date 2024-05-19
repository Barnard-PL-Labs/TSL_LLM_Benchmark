always assume {
    // Define the relationship between pressing the up arrow key and the cube's scaling
    // Predicate pressUp(e) is true when the up arrow key is pressed
}

always guarantee {
    // The cube's x-axis scale increases when the up arrow key is pressed
    pressUp(e) -> [cube.scale.x <- cube.scale.x + 1];

    // The cube's x-axis scale remains the same when the up arrow key is not pressed
    !pressUp(e) -> [cube.scale.x <- cube.scale.x];
}
