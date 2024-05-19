always assume {
    // Define the predicates based on the 'total' cell
    isLessThanPoint75(total) <-> total < 0.75;
    isLessThanOne(total) <-> total < 1;
    isLessThanOnePoint25(total) <-> total < 1.25;

    // Define the predicates based on the 'e' cell (event or input received)
    pressD(e) <-> e == 'D';
    pressQ(e) <-> e == 'Q';
    pressO(e) <-> e == 'O';
    press1(e) <-> e == '1';
    press2(e) <-> e == '2';
    press3(e) <-> e == '3';
    pressR(e) <-> e == 'R';
}

always guarantee {
    // No specific actions to guarantee, as we're only defining predicates.
}
