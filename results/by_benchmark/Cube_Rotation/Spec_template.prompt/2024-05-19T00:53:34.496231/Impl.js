// Assumed HTML structure for testing purposes:
// <div id="cube" style="width: 100px; height: 100px; background: red;"></div>
// <button id="leftButton">Left</button>
// <button id="rightButton">Right</button>

// Represents the cube in the DOM for manipulation
const cube = document.getElementById('cube');
cube.rotation = { y: 0 };  // Simulate a rotation property

// Function to rotate the cube left
function rotateLeft() {
    cube.rotation.y -= 10;  // Decrease the y rotation by 10 degrees
    console.log(`Rotated Left: ${cube.rotation.y} degrees`);
}

// Function to rotate the cube right
function rotateRight() {
    cube.rotation.y += 10;  // Increase the y rotation by 10 degrees
    console.log(`Rotated Right: ${cube.rotation.y} degrees`);
}

// Predicate to detect left button press
function pressL(e) {
    return e.key === 'ArrowLeft';  // Returns true if the left arrow key is pressed
}

// Predicate to detect right button press
function pressR(e) {
    return e.key === 'ArrowRight';  // Returns true if the right arrow key is pressed
}

// Adding event listeners to document to handle key presses
document.addEventListener('keydown', function(e) {
    if (pressL(e)) {
        rotateLeft();  // Rotate the cube left if the left arrow key is pressed
    } else if (pressR(e)) {
        rotateRight();  // Rotate the cube right if the right arrow key is pressed
    }
});

// Optionally, for button elements in HTML, we can add click listeners
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

leftButton.addEventListener('click', rotateLeft);
rightButton.addEventListener('click', rotateRight);
