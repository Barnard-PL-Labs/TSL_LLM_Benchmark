always assume {
    // Define the behavior of the total cell and e cell based on signals
    (total >= 0.0); // Total should be non-negative
    // Define exclusive key presses using the e cell
    !(pressD(e) && pressQ(e));
    !(pressD(e) && pressO(e));
    !(pressD(e) && press1(e));
    !(pressD(e) && press2(e));
    !(pressD(e) && press3(e));
    !(pressD(e) && pressR(e));
    !(pressQ(e) && pressO(e));
    !(pressQ(e) && press1(e));
    !(pressQ(e) && press2(e));
    !(pressQ(e) && press3(e));
    !(pressQ(e) && pressR(e));
    !(pressO(e) && press1(e));
    !(pressO(e) && press2(e));
    !(pressO(e) && press3(e));
    !(pressO(e) && pressR(e));
    !(press1(e) && press2(e));
    !(press1(e) && press3(e));
    !(press1(e) && pressR(e));
    !(press2(e) && press3(e));
    !(press2(e) && pressR(e));
    !(press3(e) && pressR(e));
}

always guarantee {
    // Define actions based on the total value and key presses
    isLessThanPoint75(total) -> (pressD(e) W isLessThanOne(total));
    isLessThanOne(total) -> (pressQ(e) W isLessThanOnePoint25(total));
    isLessThanOnePoint25(total) -> (pressO(e));

    // Handling vending machine selection based on key presses
    press1(e) -> [selectProduct1()]; // Action function not implemented here
    press2(e) -> [selectProduct2()];
    press3(e) -> [selectProduct3()];

    // If the `r` key is pressed, reset the machine
    pressR(e) -> [resetMachine()];
}
