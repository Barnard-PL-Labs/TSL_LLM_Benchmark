always assume {
    // Define the conditions for the different monetary limits
    isLessThanPoint75(total) <-> total < 0.75;
    isLessThanOne(total) <-> total < 1.0;
    isLessThanOnePoint25(total) <-> total < 1.25;

    // Define the conditions for key presses
    pressD(e) <-> e == 'd';
    pressQ(e) <-> e == 'q';
    pressO(e) <-> e == 'o';
    press1(e) <-> e == '1';
    press2(e) <-> e == '2';
    press3(e) <-> e == '3';
    pressR(e) <-> e == 'r';
}
