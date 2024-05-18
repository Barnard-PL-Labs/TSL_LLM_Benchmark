// Define a predicate that checks for pressing the up arrow key
let upKeyPressed = false;

// Adding an event listener to the document to listen for keydown events
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) {  // 38 is the keyCode for the up arrow key
        upKeyPressed = true;
    }
});

// Adding an event listener to reset the predicate on keyup
document.addEventListener('keyup', function(event) {
    if (event.keyCode === 38) {
        upKeyPressed = false;
    }
});

// Example of using the predicate
console.log('Up key pressed:', upKeyPressed);

// You can check this predicate in any part of the code to see if the up arrow key is currently pressed
