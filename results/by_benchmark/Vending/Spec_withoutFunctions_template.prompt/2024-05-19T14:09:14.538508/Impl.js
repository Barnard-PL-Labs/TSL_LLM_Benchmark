always assume {
    // Define the predicates for checking the total value
    isLessThanPoint75(total) <-> (total < 0.75);
    isLessThanOne(total) <-> (total < 1);
    isLessThanOnePoint25(total) <-> (total < 1.25);

    // Define the predicates for key presses
    pressD(e) <-> (e.key == 'D');
    pressQ(e) <-> (e.key == 'Q');
    pressO(e) <-> (e.key == 'O');
    press1(e) <-> (e.key == '1');
    press2(e) <-> (e.key == '2');
    press3(e) <-> (e.key == '3');
    pressR(e) <-> (e.key == 'R');
}

always guarantee {
    // Implement reactions or guarantees based on these predicates if required.
}
