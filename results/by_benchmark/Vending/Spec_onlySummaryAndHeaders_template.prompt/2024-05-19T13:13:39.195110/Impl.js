always assume {
    // Definitions for "total" comparisons
    isLessThanPoint75: total < 0.75;
    isLessThanOne: total < 1;
    isLessThanOnePoint25: total < 1.25;
    
    // Definitions for "e" keypresses
    pressD: e == 'd';
    pressQ: e == 'q';
    pressO: e == 'o';
    press1: e == '1';
    press2: e == '2';
    press3: e == '3';
    pressR: e == 'r';
}

always guarantee {
    // This section would define the system's response to the predicates, but since we are not to implement functions, it remains empty.
}
