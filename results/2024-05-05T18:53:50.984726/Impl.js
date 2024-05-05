// Predicate: pressUp
// This predicate returns true if the up arrow key is pressed.

function setupPressUpListener() {
    let upKeyPressed = false;

    window.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp') {
            upKeyPressed = true;
        }
    });

    window.addEventListener('keyup', function(event) {
        if (event.key === 'ArrowUp') {
            upKeyPressed = false;
        }
    });

    // Function to return the current state of the up key
    return function pressUp() {
        return upKeyPressed;
    };
}

// Creating an instance of the pressUp function
const pressUp = setupPressUpListener();

// Now, you can use pressUp() anywhere in your project like so:
// if (pressUp()) {
//     console.log('Up arrow key is pressed.');
// }
