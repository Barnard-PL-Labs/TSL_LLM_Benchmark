always assume {
    // Define the conditions for key presses
    !(pressD(e) && (pressQ(e) || pressO(e) || press1(e) || press2(e) || press3(e) || pressR(e)));
    !(pressQ(e) && (pressD(e) || pressO(e) || press1(e) || press2(e) || press3(e) || pressR(e)));
    !(pressO(e) && (pressD(e) || pressQ(e) || press1(e) || press2(e) || press3(e) || pressR(e)));
    !(press1(e) && (pressD(e) || pressQ(e) || pressO(e) || press2(e) || press3(e) || pressR(e)));
    !(press2(e) && (pressD(e) || pressQ(e) || pressO(e) || press1(e) || press3(e) || pressR(e)));
    !(press3(e) && (pressD(e) || pressQ(e) || pressO(e) || press1(e) || press2(e) || pressR(e)));
    !(pressR(e) && (pressD(e) || pressQ(e) || pressO(e) || press1(e) || press2(e) || press3(e)));
}

always guarantee {
    // Define conditions under which certain keys are enabled based on total value
    isLessThanPoint75(total) -> (!press1(e) && !press2(e) && !press3(e));
    isLessThanOne(total) -> (!press2(e) && !press3(e));
    isLessThanOnePoint25(total) -> (!press3(e));

    // Define actions based on key presses
    pressD(e) -> [command <- dispenseDrink];
    pressQ(e) -> [command <- dispenseSnack];
    pressR(e) -> [command <- refund];
    pressO(e) -> [command <- openDoor];
    press1(e) -> [command <- selectOption1];
    press2(e) -> [command <- selectOption2];
    press3(e) -> [command <- selectOption3];
}
