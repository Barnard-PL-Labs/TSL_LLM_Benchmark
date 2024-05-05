always assume {
  // Define the behavior when the up arrow key is pressed.
  // "pressUp(e)" becomes true when the "up" arrow key is pressed.
  // System environment's API allows to identify keys; assuming API provides keycode or similar identification.
  pressUp(e) <-> key == 'UP_ARROW'; // "key" is hypothetically the pressed key identifier
}
