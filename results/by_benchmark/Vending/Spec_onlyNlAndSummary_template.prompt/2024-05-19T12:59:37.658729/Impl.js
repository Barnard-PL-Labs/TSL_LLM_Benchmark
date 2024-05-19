always assume {
    // Assumptions about the input signals and their mutual exclusions if necessary

    // Define the mutual exclusions for key presses
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
    // Predicates for checking the total

    // is the total less than 0.75?
    isLessThanPoint75(total);  // Represented as: total < 0.75

    // is the total less than 1?
    isLessThanOne(total);  // Represented as: total < 1

    // is the total less than 1.25?
    isLessThanOnePoint25(total);  // Represented as: total < 1.25

    // Predicates for key presses

    // did the user press the d key?
    pressD(e);  // This could be an event listener or input check for 'd'

    // did the user press the q key?
    pressQ(e);  // Similarly, this checks for 'q'

    // did the user press the o key?
    pressO(e);  // Checking for 'o'

    // did the user press the 1 key?
    press1(e);  // Event check for '1'

    // did the user press the 2 key?
    press2(e);  // And '2'

    // did the user press the 3 key?
    press3(e);  // And '3'

    // did the user press the r key?
    pressR(e);  // Lastly, for 'r'
}
