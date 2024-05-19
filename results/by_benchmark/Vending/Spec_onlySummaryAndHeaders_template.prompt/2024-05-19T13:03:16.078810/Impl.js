always assume {
    // States of the 'total' cell
    isLessThanPoint75(total) == (total < 0.75);
    isLessThanOne(total) == (total < 1);
    isLessThanOnePoint25(total) == (total < 1.25);

    // Key press states from the 'e' cell
    pressD(e) == (e == 'D' || e == 'd');
    pressQ(e) == (e == 'Q' || e == 'q');
    pressO(e) == (e == 'O' || e == 'o');
    press1(e) == (e == '1');
    press2(e) == (e == '2');
    press3(e) == (e == '3');
    pressR(e) == (e == 'R' || e == 'r');
}

always guarantee {
    // Here, the behaviors or actions based on the states can be defined.
    // For example, if a key 'D' is pressed and the total is less than 0.75:
    (pressD(e) && isLessThanPoint75(total)) -> [performSomeAction()];

    // You can define more behaviors based on the predicates.
}
