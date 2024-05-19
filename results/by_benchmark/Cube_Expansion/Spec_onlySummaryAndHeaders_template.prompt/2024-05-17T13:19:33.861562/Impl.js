// Predicate to check if the up arrow key is pressed
function pressUp(e) {
  // Initialize a variable to keep the state of the up arrow key
  let upKeyPressed = false;

  // Add an event listener for the 'keydown' event to check for the up arrow key
  document.addEventListener('keydown', function(event) {
    // Check if the key pressed is the up arrow key
    if (event.key === "ArrowUp") {
      upKeyPressed = true;
    } else {
      upKeyPressed = false;
    }
  });

  // Add an event listener for the 'keyup' event to reset the key state
  document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowUp") {
      upKeyPressed = false;
    }
  });

  // Return the state of the up arrow key
  return upKeyPressed;
}

// Note: Since JavaScript event listeners are asynchronous,
// the return statement in the `pressUp` function will not work as expected in synchronous code.
// Instead, the state of the `upKeyPressed` should be used in an asynchronous context or checked within the event handlers.
