always assume {
    // Define the behavior of the pressUp predicate
    pressUp(e); // This would be true whenever the "up" arrow key is pressed
}

always guarantee {
    // When the "up" arrow key is pressed, adjust the cube's scale along the x-axis
    pressUp(e) -> [cube.scale.x <- cube.scale.x + 0.1];
}
