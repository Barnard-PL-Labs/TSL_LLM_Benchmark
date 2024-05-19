always assume {
}

always guarantee {
    // Predicates on the 'total' cell, evaluating different monetary conditions
    // These predicates check if the total amount in the vending machine is below certain thresholds
    isLessThanPoint75(total) -> (total < 0.75);
    isLessThanOne(total) -> (total < 1.00);
    isLessThanOnePoint25(total) -> (total < 1.25);

    // Predicates on the 'e' cell, checking for specific key presses
    // These check if specific keys are pressed, where 'e' holds the current key press state
    pressD(e) -> (e == 'd');
    pressQ(e) -> (e == 'q');
    pressO(e) -> (e == 'o');
    press1(e) -> (e == '1');
    press2(e) -> (e == '2');
    press3(e) -> (e == '3');
    pressR(e) -> (e == 'r');
}
