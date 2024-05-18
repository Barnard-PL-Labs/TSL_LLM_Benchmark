always assume {
    // Predicate to check if the up key is pressed
    pressUp(e);
}

always guarantee {
    // If the up key is pressed, increase the cube's scale along the x-axis
    pressUp(e) -> [cube.scale.x <- cube.scale.x + 1];

    // When the up key is not pressed, maintain the current scale
    !pressUp(e) -> [cube.scale.x <- cube.scale.x];
}
