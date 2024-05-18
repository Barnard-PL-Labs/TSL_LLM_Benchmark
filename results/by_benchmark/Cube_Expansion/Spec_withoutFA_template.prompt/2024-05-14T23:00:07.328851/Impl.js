// Assuming 'cube' is the 3D object and it has a property scale.x
let cube = {
    scale: {
        x: 1 // Initial scale of the cube along the x-axis
    }
};

// Function to check for the up arrow key press
function pressUp(e) {
    return e.keyCode === 38; // Key code for the up arrow key
}

// Event listener for keydown events on the document
document.addEventListener('keydown', function(e) {
    if (pressUp(e)) {
        console.log("Up arrow key is pressed.");
        cube.scale.x += 0.1; // Increase the cube's scale along x-axis for demonstration
        console.log(`Cube's new x scale: ${cube.scale.x}`);
    }
});

// Optionally, to demonstrate or debug, you might want to log the current scale of the cube
document.addEventListener('keyup', function(e) {
    if (e.keyCode === 38) { // Only when the up arrow key is released
        console.log(`Current scale of cube along x-axis: ${cube.scale.x}`);
    }
});
