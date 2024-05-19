always assume {
  // Definitions of predicates for the "total" cell
  (isLessThanPoint75(total) <-> (total < 0.75));
  (isLessThanOne(total) <-> (total < 1));
  (isLessThanOnePoint25(total) <-> (total < 1.25));

  // Definitions of predicates for the "e" cell representing key presses
  (pressD(e) <-> (e == 'd'));
  (pressQ(e) <-> (e == 'q'));
  (pressO(e) <-> (e == 'o'));
  (press1(e) <-> (e == '1'));
  (press2(e) <-> (e == '2'));
  (press3(e) <-> (e == '3'));
  (pressR(e) <-> (e == 'r'));
}
always guarantee {
  // The guarantee block is left empty as there are no specific actions or reactions to define in this context,
  // assuming no functions to implement as per the instruction.
}
