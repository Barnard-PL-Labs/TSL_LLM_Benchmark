// Define the module to handle cube operations and input events
const CubeController = (() => {
    const cube = {
        scale: {
            x: 1, // Initial scale of the cube along the x-axis
        }
    };

    // Function to get or set the cube's scale along the x-axis
    const getCubeScaleX = () => cube.scale.x;
    const setCubeScaleX = (newScale) => cube.scale.x = newScale;

    // Function to return the sine of x
    function sin(x) {
        return Math.sin(x);
    }

    // Function to return the sawtooth wave of x
    function saw(x) {
        // Implementing a simple sawtooth wave function
        return x - Math.floor(x);
    }

    // Predicate to check if the left button is pressed
    let leftPressed = false;
    function pressL() {
        return leftPressed;
    }

    // Predicate to check if the right button is pressed
    let rightPressed = false;
    function pressR() {
        return rightPressed;
    }

    // Event listeners for button presses
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            leftPressed = true;
        }
        if (e.key === 'ArrowRight') {
            rightPressed = true;
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowLeft') {
            leftPressed = false;
        }
        if (e.key === 'ArrowRight') {
            rightPressed = false;
        }
    });

    // Expose public methods and properties
    return {
        getCubeScaleX,
        setCubeScaleX,
        sin,
        saw,
        pressL,
        pressR
    };
})();

// Usage examples
console.log('Sine of PI:', CubeController.sin(Math.PI));  // Should log approximately 0
console.log('Sawtooth of 1.5:', CubeController.saw(1.5)); // Should log 0.5

// To set the cube's scale along the x-axis
CubeController.setCubeScaleX(2);
console.log('Cube\'s scale x:', CubeController.getCubeScaleX());  // Should log 2

// The predicates `pressL` and `pressR` will depend on key press events
