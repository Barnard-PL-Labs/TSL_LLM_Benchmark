always assume {
    // Assume that the total and e signals are always available
}

always guarantee {
    // Define predicates using the environment signals 'total' and 'e'
    // Check if the total is less than various thresholds
    isLessThanPoint75(total) -> (total < 0.75);
    isLessThanOne(total) -> (total < 1);
    isLessThanOnePoint25(total) -> (total < 1.25);

    // Check if certain keys are pressed based on 'e' signal
    pressD(e) -> (e == 'd');
    pressQ(e) -> (e == 'q');
    pressO(e) -> (e == 'o');
    press1(e) -> (e == '1');
    press2(e) -> (e == '2');
    press3(e) -> (e == '3');
    pressR(e) -> (e == 'r');
}
