always assume {
    // Define the predicates based on the conditions presented in the cell values
    isLessThanPoint75(total) <-> (total < 0.75);
    isLessThanOne(total) <-> (total < 1);
    isLessThanOnePoint25(total) <-> (total < 1.25);

    // Define the predicates based on the event cell 'e' for key presses
    pressD(e) <-> (e == 'd');
    pressQ(e) <-> (e == 'q');
    pressO(e) <-> (e == 'o');
    press1(e) <-> (e == '1');
    press2(e) <-> (e == '2');
    press3(e) <-> (e == '3');
    pressR(e) <-> (e == 'r');
}

always guarantee {
    // Assertions or guarantees about these predicates can be added here if required for the system's functioning
}
