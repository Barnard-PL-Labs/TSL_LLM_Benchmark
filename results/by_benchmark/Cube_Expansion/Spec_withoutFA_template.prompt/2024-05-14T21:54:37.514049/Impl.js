always assume {
    // Define an input for detecting the 'up' arrow key press
    isUpKeyPressed: Boolean;
}

always guarantee {
    // The predicate 'pressUp' returns true if the 'up' arrow key is pressed
    pressUp(e) <-> isUpKeyPressed;
}
