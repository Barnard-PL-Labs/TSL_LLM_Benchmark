always assume {
    // Describes the state of the 'total' cell and 'e' cell (event or signal from user interaction)
}

always guarantee {
    // Predicate definitions based on cell 'total'
    (total < 0.75) -> [isLessThanPoint75 <- true];
    !(total < 0.75) -> [isLessThanPoint75 <- false];

    (total < 1) -> [isLessThanOne <- true];
    !(total < 1) -> [isLessThanOne <- false];

    (total < 1.25) -> [isLessThanOnePoint25 <- true];
    !(total < 1.25) -> [isLessThanOnePoint25 <- false];

    // Predicate definitions based on cell 'e' for key presses
    (e == 'd') -> [pressD <- true];
    !(e == 'd') -> [pressD <- false];

    (e == 'q') -> [pressQ <- true];
    !(e == 'q') -> [pressQ <- false];

    (e == 'o') -> [pressO <- true];
    !(e == 'o') -> [pressO <- false];

    (e == '1') -> [press1 <- true];
    !(e == '1') -> [press1 <- false];

    (e == '2') -> [press2 <- true];
    !(e == '2') -> [press2 <- false];

    (e == '3') -> [press3 <- true];
    !(e == '3') -> [press3 <- false];

    (e == 'r') -> [pressR <- true];
    !(e == 'r') -> [pressR <- false];
}
