always assume {
    // Define keyboard interactions
    // We assume an abstract representation where `upKeyPressed` is true when the up key is pressed
    (upKeyPressed -> pressUp(e));
}

always guarantee {
    // Response to the pressing of the up key
    pressUp(e) -> [cube.scale.x <- cube.scale.x * 1.1]; // Example response, scales cube on x-axis
}
