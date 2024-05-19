always assume {
    // Assuming the environment provides these signals correctly
    (total < 0.75) <-> isLessThanPoint75(total);
    (total < 1) <-> isLessThanOne(total);
    (total < 1.25) <-> isLessThanOnePoint25(total);
    (e.key == 'd') <-> pressD(e);
    (e.key == 'q') <-> pressQ(e);
    (e.key == 'o') <-> pressO(e);
    (e.key == '1') <-> press1(e);
    (e.key == '2') <-> press2(e);
    (e.key == '3') <-> press3(e);
    (e.key == 'r') <-> pressR(e);
}

always guarantee {
    // Define system behaviors based on predicates
    // You can specify operations or transitions that the system should make
    // when these predicates are true. For example:

    // If total is less than 0.75, some operations can be disabled
    isLessThanPoint75(total) -> [operationEnabled <- false];

    // When key 'd' is pressed, execute some function or update
    pressD(e) -> [performOperationD <- true];

    // Reset or update states when specific keys are pressed
    pressQ(e) -> [resetMachine <- true];
    pressO(e) -> [openSettings <- true];
    press1(e) || press2(e) || press3(e) -> [selectOption <- true];
    pressR(e) -> [reloadResources <- true];
}
