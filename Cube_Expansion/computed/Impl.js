// Assuming the 'cube' object and its properties are accessible globally
// and initialized somewhere in your environment

// Predicate to check if the up arrow key is pressed
function pressUp() {
    // Initializes a flag to keep track of the up arrow key press state
    let isUpKeyPressed = false;

    // Event listener to detect keydown events and update the flag if the up arrow key is pressed
    document.addEventListener('keydown', function(event) {
        if (event.key === "ArrowUp") {
            isUpKeyPressed = true;
        }
    });

    // Event listener to reset the flag on keyup
    document.addEventListener('keyup', function(event) {
        if (event.key === "ArrowUp") {
            isUpKeyPressed = false;
        }
    });

    // Returns a function that when called, gives the current state of the up arrow key
    return () => isUpKeyPressed;
}

// Example of using pressUp
const isUpArrowPressed = pressUp();

// Function to be executed in an interval or driven by some other part of your application
function checkUpArrowKey() {
    if (isUpArrowPressed()) {
        console.log('Up arrow key is currently pressed.');
        // You can perform actions here based on the key press
    } else {
        console.log('Up arrow key is not pressed.');
    }
}

// You might set up an interval or call checkUpArrowKey in response to some other event
setInterval(checkUpArrowKey, 1000);  // Checking the key press state every second
