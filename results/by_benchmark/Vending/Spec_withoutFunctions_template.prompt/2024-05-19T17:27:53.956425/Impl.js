always assume {
    // Define how signals from cell 'e' (events) are mutually exclusive
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
    // Event based responses
    pressD(e) -> [handleDpress()];
    pressQ(e) -> [handleQpress()];
    pressO(e) -> [handleOpress()];
    press1(e) -> [handle1press()];
    press2(e) -> [handle2press()];
    press3(e) -> [handle3press()];
    pressR(e) -> [handleRpress()];

    // Condition based responses
    isLessThanPoint75(total) -> [handleLessThanPoint75()];
    isLessThanOne(total) -> [handleLessThanOne()];
    isLessThanOnePoint25(total) -> [handleLessThanOnePoint25()];
}

// Predicate Implementations
// Assume total is a variable that represents the total amount in the vending machine
// Assume e is a variable that represents the event occurring at the vending machine interface
predicate isLessThanPoint75(total) {
    return total < 0.75;
}

predicate isLessThanOne(total) {
    return total < 1;
}

predicate isLessThanOnePoint25(total) {
    return total < 1.25;
}

predicate pressD(e) {
    return e == 'd';
}

predicate pressQ(e) {
    return e == 'q';
}

predicate pressO(e) {
    return e == 'o';
}

predicate press1(e) {
    return e == '1';
}

predicate press2(e) {
    return e == '2';
}

predicate press3(e) {
    return e == '3';
}

predicate pressR(e) {
    return e == 'r';
}
