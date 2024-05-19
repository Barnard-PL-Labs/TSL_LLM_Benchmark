always assume {
    // Predicates determining if the total is less than specific amounts
    isLessThanPoint75(total) -> (total < 0.75);
    isLessThanOne(total) -> (total < 1);
    isLessThanOnePoint25(total) -> (total < 1.25);

    // Predicates determining if specific keys are pressed
    pressD(e) -> (e.key == 'd');
    pressQ(e) -> (e.key == 'q');
    pressO(e) -> (e.key == 'o');
    press1(e) -> (e.key == '1');
    press2(e) -> (e.key == '2');
    press3(e) -> (e.key == '3');
    pressR(e) -> (e.key == 'r');
}

always guarantee {
    // Usage of predicates could be defined here based on the system's need. For example:
    // If 'd' is pressed and total is less than 0.75, some action can be triggered
    pressD(e) && isLessThanPoint75(total) -> [action <- triggerSomeAction];

    // Similarly, other combinations can enforce different behaviors:
    pressQ(e) && isLessThanOne(total) -> [action <- anotherAction];
    pressO(e) && isLessThanOnePoint25(total) -> [action <- yetAnotherAction];
}
