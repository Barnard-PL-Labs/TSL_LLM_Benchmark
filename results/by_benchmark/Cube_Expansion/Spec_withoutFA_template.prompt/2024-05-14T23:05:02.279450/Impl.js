always assume {
  // This would hypothetically check if the up arrow key is pressed
  pressUp(e);
}

always guarantee {
  // React to the up arrow key being pressed, like moving an object up
  pressUp(e) -> [object.position.y <- object.position.y + 1];
}
