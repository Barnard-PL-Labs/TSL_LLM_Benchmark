always assume {
    // Define the total cell and the input event cell 'e'
    (total) ;
    (e) ;
  
    // Define the predicates based on the conditions given
    (isLessThanPoint75(total) == (total < 0.75)) ;
    (isLessThanOne(total) == (total < 1)) ;
    (isLessThanOnePoint25(total) == (total < 1.25)) ;
    (pressD(e) == (e.key == 'd')) ;
    (pressQ(e) == (e.key == 'q')) ;
    (pressO(e) == (e.key == 'o')) ;
    (press1(e) == (e.key == '1')) ;
    (press2(e) == (e.key == '2')) ;
    (press3(e) == (e.key == '3')) ;
    (pressR(e) == (e.key == 'r')) ;
}

always guarantee {
    // Example guarantees based on the predicates defined above:
    // If the user presses 'd', then the total should be less than 0.75 until a different key is pressed
    pressD(e) -> (isLessThanPoint75(total) W !(pressQ(e) || pressO(e) || press1(e) || press2(e) || press3(e) || pressR(e)));

    // If the user presses 'q', then the total should be less than 1 until a different key is pressed
    pressQ(e) -> (isLessThanOne(total) W !(pressD(e) || pressO(e) || press1(e) || press2(e) || press3(e) || pressR(e)));

    // If the user presses 'o', then the total should be less than 1.25 until a different key is pressed
    pressO(e) -> (isLessThanOnePoint25(total) W !(pressD(e) || pressQ(e) || press1(e) || press2(e) || press3(e) || pressR(e)));

    // Ensuring mutual exclusions between key presses
    !(pressD(e) && pressQ(e)) ;
    !(pressD(e) && pressO(e)) ;
    !(pressD(e) && press1(e)) ;
    !(pressD(e) && press2(e)) ;
    !(pressD(e) && press3(e)) ;
    !(pressD(e) && pressR(e)) ;

    // Similarly define for other keys...
}
