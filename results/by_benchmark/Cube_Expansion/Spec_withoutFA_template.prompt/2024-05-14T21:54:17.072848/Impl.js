// Predicate implementation for checking if the up arrow key is pressed
class Environment {
    constructor() {
        this.upKeyPressed = false;
        
        // Setting up event listeners for keydown and keyup
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        document.addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleKeyDown(event) {
        // Check if the key pressed is the up arrow key
        if (event.key === "ArrowUp") {
            this.upKeyPressed = true;
        }
    }

    handleKeyUp(event) {
        // Reset the flag when the up arrow key is released
        if (event.key === "ArrowUp") {
            this.upKeyPressed = false;
        }
    }

    // Predicate to check if the up arrow key is currently pressed
    pressUp() {
        return this.upKeyPressed;
    }
}

// Example usage
const env = new Environment();

// To use in an update loop or similar context to check the state dynamically
function checkUpKeyPress() {
    if (env.pressUp()) {
        console.log("Up arrow key is pressed.");
        // additional logic can be implemented here when the up key is pressed
    } else {
        console.log("Up arrow key is not pressed.");
    }
}

// You could set an interval to simulate checking repeatedly, like in a game loop
setInterval(checkUpKeyPress, 1000);  // Check the state every second
