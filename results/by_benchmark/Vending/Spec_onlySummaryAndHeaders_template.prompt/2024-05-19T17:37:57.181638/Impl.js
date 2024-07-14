always assume {
    // Assuming the API provides these methods directly
    total < 0.75;
    total < 1;
    total < 1.25;
    pressD(e);
    pressQ(e);
    pressO(e);
    press1(e);
    press2(e);
    press3(e);
    pressR(e);
}

always guarantee {
    // Define the behavior based on the predicates
    isLessThanPoint75(total) -> total < 0.75;
    isLessThanOne(total)     -> total < 1;
    isLessThanOnePoint25(total) -> total < 1.25;
    pressD(e) -> pressD(e);
    pressQ(e) -> pressQ(e);
    pressO(e) -> pressO(e);
    press1(e) -> press1(e);
    press2(e) -> press2(e);
    press3(e) -> press3(e);
    pressR(e) -> pressR(e);
}
