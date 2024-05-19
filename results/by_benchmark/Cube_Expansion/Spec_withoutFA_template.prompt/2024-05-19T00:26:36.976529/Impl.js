always assume {
  // No specific assumptions for external inputs other than the user pressing keys
}

always guarantee {
  // Guarantee to monitor the up arrow key press and update cube.scale.x accordingly (hypothetical)
  pressUp(e) -> [cube.scale.x <- updatedScale];
}
