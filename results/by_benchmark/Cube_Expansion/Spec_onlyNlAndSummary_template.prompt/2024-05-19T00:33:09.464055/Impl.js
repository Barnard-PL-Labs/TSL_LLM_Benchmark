always assume {
}

always guarantee {
    pressUp(e) -> [cube.scale.x <- 1.5];
    !pressUp(e) -> [cube.scale.x <- 1.0];
}
