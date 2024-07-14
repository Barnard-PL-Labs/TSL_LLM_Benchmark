always assume {
    // Define the monetary thresholds for the vending machine
    (total < 0.75) ;
    (total < 1) ;
    (total < 1.25) ;

    // Define the key presses and their exclusive nature
    (pressD(e) || pressQ(e) || pressO(e) || press1(e) || press2(e) || press3(e) || pressR(e)) ;
    !(pressD(e) && pressQ(e)) ;
    !(pressD(e) && pressO(e)) ;
    !(pressD(e) && press1(e)) ;
    !(pressD(e) && press2(e)) ;
    !(pressD(e) && press3(e)) ;
    !(pressD(e) && pressR(e)) ;
    !(pressQ(e) && pressO(e)) ;
    !(pressQ(e) && press1(e)) ;
    !(pressQ(e) && press2(e)) ;
    !(pressQ(e) && press3(e)) ;
    !(pressQ(e) && pressR(e)) ;
    !(pressO(e) && press1(e)) ;
    !(pressO(e) && press2(e)) ;
    !(pressO(e) && press3(e)) ;
    !(pressO(e) && pressR(e)) ;
    !(press1(e) && press2(e)) ;
    !(press1(e) && press3(e)) ;
    !(press1(e) && pressR(e)) ;
    !(press2(e) && press3(e)) ;
    !(press2(e) && pressR(e)) ;
    !(press3(e) && pressR(e)) ;
}

always guarantee {
  // Implement the press checks directly in predicates
  total < 0.75 -> [ isLessThanPoint75 <- true ];
  total >= 0.75 -> [ isLessThanPoint75 <- false ];

  total < 1 -> [ isLessThanOne <- true ];
  total >= 1 -> [ isLessThanOne <- false ];

  total < 1.25 -> [ isLessThanOnePoint25 <- true ];
  total >= 1.25 -> [ isLessThanOnePoint25 <- false ];

  pressD(e) -> [ pressD <- true ];
  !pressD(e) -> [ pressD <- false ];

  pressQ(e) -> [ pressQ <- true ];
  !pressQ(e) -> [ pressQ <- false ];

  pressO(e) -> [ pressO <- true ];
  !pressO(e) -> [ pressO <- false ];

  press1(e) -> [ press1 <- true ];
  !press1(e) -> [ press1 <- false ];

  press2(e) -> [ press2 <- true ];
  !press2(e) -> [ press2 <- false ];

  press3(e) -> [ press3 <- true ];
  !press3(e) -> [ press3 <- false ];

  pressR(e) -> [ pressR <- true ];
  !pressR(e) -> [ pressR <- false ];
}
