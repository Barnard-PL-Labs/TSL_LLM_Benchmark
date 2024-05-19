always assume {
    // Define the nature of the total and e cells, assuming they correctly reflect the system state.
    (total >= 0);
    (e != null);
}

always guarantee {
    // Predicates for the cell "total"
    isLessThanPoint75(total) <-> (total < 0.75);
    isLessThanOne(total) <-> (total < 1);
    isLessThanOnePoint25(total) <-> (total < 1.25);

    // Predicates for the cell "e" representing user inputs
    pressD(e) <-> (e == 'd');
    pressQ(e) <-> (e == 'q');
    pressO(e) <-> (e == 'o');
    press1(e) <-> (e == '1');
    press2(e) <-> (e == '2');
    press3(e) <-> (e == '3');
    pressR(e) <-> (e == 'r');
}
