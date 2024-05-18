// Assuming we have a system or object to register predicates
const system = {
  // This object holds the state of the key press
  keyPressed: {
    up: false
  }
};

// Registering the keydown and keyup event listeners on the document
document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowUp") {
    system.keyPressed.up = true;  // Set the up key state to true when the up arrow key is pressed
  }
});

document.addEventListener('keyup', function(e) {
  if (e.key === "ArrowUp") {
    system.keyPressed.up = false;  // Reset the up key state when the up arrow key is released
  }
});

// Predicate function to check if the up arrow key is currently pressed
function pressUp() {
  return system.keyPressed.up;
}

// Example of how the predicate might be used or tested
console.log("Is the UP arrow key pressed? ", pressUp());  // Logs false initially or true when the up key is pressed
