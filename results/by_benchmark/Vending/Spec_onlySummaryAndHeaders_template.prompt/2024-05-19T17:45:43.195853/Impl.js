always assume {
    // Predicate to check if total is less than 0.75
    isLessThanPoint75(total) = total < 0.75;

    // Predicate to check if total is less than 1
    isLessThanOne(total) = total < 1;

    // Predicate to check if total is less than 1.25
    isLessThanOnePoint25(total) = total < 1.25;

    // Predicate to check if key 'd' is pressed
    pressD(e) = e.key == 'd';

    // Predicate to check if key 'q' is pressed
    pressQ(e) = e.key == 'q';

    // Predicate to check if key 'o' is pressed
    pressO(e) = e.key == 'o';

    // Predicate to check if key '1' is pressed
    press1(e) = e.key == '1';

    // Predicate to check if key '2' is pressed
    press2(e) = e.key == '2';

    // Predicate to check if key '3' is pressed
    press3(e) = e.key == '3';

    // Predicate to check if key 'r' is pressed
    pressR(e) = e.key == 'r';
}
