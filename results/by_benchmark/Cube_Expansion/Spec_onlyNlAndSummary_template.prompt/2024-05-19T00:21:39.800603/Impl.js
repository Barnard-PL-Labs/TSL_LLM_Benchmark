always assume {
    // Define an event listener for keydown events and check if the 'up' arrow key is pressed
    pressUp(e) <-> keyCode(e, 38);
}

always guarantee {
    // Example guarantee using the pressUp predicate, which could trigger some action
    pressUp(e) -> [action <- triggered];
}
