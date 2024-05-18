always assume {
  // Predicate for the up arrow key press
  pressUp(e);
}

always guarantee {
  // When the up key is pressed, set the cube's x-scale to a specific value, e.g., 2
  pressUp(e) -> [cube.scale.x <- 2];

  // When the up key is not pressed, set the cube's x-scale to its default value, e.g., 1
  !pressUp(e) -> [cube.scale.x <- 1];
}
