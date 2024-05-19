always assume {
    // Predicates about the value of 'total'
    isLessThanPoint75(total): (total < 0.75);
    isLessThanOne(total): (total < 1);
    isLessThanOnePoint25(total): (total < 1.25);

    // Predicates about the key press events in 'e'
    pressD(e): (e == 'd');
    pressQ(e): (e == 'q');
    pressO(e): (e == 'o');
    press1(e): (e == '1');
    press2(e): (e == '2');
    press3(e): (e == '3');
    pressR(e): (e == 'r');
}

always guarantee {
    // The reaction of the system based on the predicates isn't specified
    // Placeholder for system guarantees
}
