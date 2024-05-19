// Define a state variable to track the "up" key press status
let upKeyPressed = false;

// Function to update the upKeyPressed state based on keydown and keyup events
function setupKeyPressListeners() {
    document.addEventListener('keydown', function(event) {
        // Check if the key pressed is the up arrow key
        if (event.key === "ArrowUp") {
            upKeyPressed = true;
        }
    });

    document.addEventListener('keyup', function(event) {
        // Check if the key released is the up arrow key
        if (event.key === "ArrowUp") {
            upKeyPressed = false;
        }
    });
}

// Call the setup function to start listening to key events
setupKeyPressListeners();

// Predicate function to check if the up key is pressed
function pressUp() {
    return upKeyPressed;
}

// Example usage
// You can call pressUp() anywhere in your code to check if the up arrow key is currently pressed
// It will return true if the up key is pressed, false otherwise
console.log(pressUp());  // Output depends on whether the up arrow key is pressed or not
