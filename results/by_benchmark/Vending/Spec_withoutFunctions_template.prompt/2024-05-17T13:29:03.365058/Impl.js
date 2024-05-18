always assume {
    // Assumptions about the inputs (states of signals 'total' and 'e')
}

always guarantee {
    // Guarantees based on the predicates defined
}

// Predicates based on the 'total' cell
isLessThanPoint75(total) -> (total < 0.75);
isLessThanOne(total) -> (total < 1.00);
isLessThanOnePoint25(total) -> (total < 1.25);

// Predicates based on the 'e' cell for different key presses
pressD(e) -> (e == 'd'); // Assuming 'e' holds the last key pressed
pressQ(e) -> (e == 'q');
pressO(e) -> (e == 'o');
press1(e) -> (e == '1');
press2(e) -> (e == '2');
press3(e) -> (e == '3');
pressR(e) -> (e == 'r');
