always assume {
    // Total amount predicates
    isLessThanPoint75(total) -> (total < 0.75);
    isLessThanOne(total) -> (total < 1.0);
    isLessThanOnePoint25(total) -> (total < 1.25);

    // Key press predicates
    pressD(e) -> (e.key == 'd');
    pressQ(e) -> (e.key == 'q');
    pressO(e) -> (e.key == 'o');
    press1(e) -> (e.key == '1');
    press2(e) -> (e.key == '2');
    press3(e) -> (e.key == '3');
    pressR(e) -> (e.key == 'r');
}
always guarantee {
    // Describe how the system reacts to these inputs
    // This part would be specific to the vending machine logic, for example:
    pressQ(e) -> [displayMessage <- "Quit Requested"];
    pressD(e) -> [displayMessage <- "Drink Dispensed"] W pressR(e);
    isLessThanPoint75(total) -> [displayMessage <- "Insufficient Funds"] W (total >= 0.75);
}
