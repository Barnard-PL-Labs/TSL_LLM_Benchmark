class CounterSystem {
    constructor() {
        this.stepsize = 1;  // Initialize stepsize to 1 at program start
        this.e = null;      // e will be used to store the latest event

        // Setting up event listeners for key presses
        document.addEventListener('keydown', (event) => {
            this.handleKeyPress(event.key);
        });
    }

    // Function to handle key press and update 'e'
    handleKeyPress(key) {
        this.e = key;
    }

    // Function to multiply stepsize by 3
    multiplyByThree() {
        this.stepsize *= 3;
    }

    // Predicate to check if 'a' was pressed
    pressA() {
        return this.e === 'a';
    }

    // Predicate to check if 'b' was pressed
    pressB() {
        return this.e === 'b';
    }

    // Predicate to check if 'c' was pressed
    pressC() {
        return this.e === 'c';
    }
}

// Example of usage:
const counterSystem = new CounterSystem();

// Simulate key presses
counterSystem.handleKeyPress('a');  // Simulate pressing 'a'
if (counterSystem.pressA()) {
    console.log("Key 'A' was pressed.");
    counterSystem.multiplyByThree();
    console.log(`Stepsize multiplied by three is now: ${counterSystem.stepsize}`);
}

counterSystem.handleKeyPress('b');  // Simulate pressing 'b'
if (counterSystem.pressB()) {
    console.log("Key 'B' was pressed.");
}

counterSystem.handleKeyPress('c');  // Simulate pressing 'c'
if (counterSystem.pressC()) {
    console.log("Key 'C' was pressed.");
}
