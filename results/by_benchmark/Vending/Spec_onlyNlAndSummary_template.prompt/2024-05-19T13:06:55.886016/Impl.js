always assume {
    // Define input signals from the environment
    // Conditions for total amount checks
    (total < 0.75);
    (total < 1);
    (total < 1.25);

    // Conditions for key presses
    (pressD(e));
    (pressQ(e));
    (pressO(e));
    (press1(e));
    (press2(e));
    (press3(e));
    (pressR(e));
}

always guarantee {
    // System response based on the input conditions
    // Respond to total amount checks
    (total < 0.75) -> [isLessThanPoint75(total) <- true];
    (total < 1) -> [isLessThanOne(total) <- true];
    (total < 1.25) -> [isLessThanOnePoint25(total) <- true];

    // React to key presses
    (pressD(e)) -> [pressD(e) <- true];
    (pressQ(e)) -> [pressQ(e) <- true];
    (pressO(e)) -> [pressO(e) <- true];
    (press1(e)) -> [press1(e) <- true];
    (press2(e)) -> [press2(e) <- true];
    (press3(e)) -> [press3(e) <- true];
    (pressR(e)) -> [pressR(e) <- true];
}
