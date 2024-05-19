always assume {
    // Predicates for the "total" cell
    (total < 0.75) ;
    (total < 1) ;
    (total < 1.25) ;
  
    // Predicates for the "e" cell identifying key presses
    (e == 'd') ;
    (e == 'q') ;
    (e == 'o') ;
    (e == '1') ;
    (e == '2') ;
    (e == '3') ;
    (e == 'r') ;
}

always guarantee {
    // Example of how guarantees might be used:
    // If e is 'd', do some action (this is just an illustration, as no specific actions are requested)
    (e == 'd') -> [ /* action to perform */ ];
}
