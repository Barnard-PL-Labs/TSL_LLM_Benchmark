// Sine function
function sin(x) {
    return Math.sin(x);
}

// Sawtooth wave function
function saw(x) {
    // A typical implementation of a sawtooth function using modulo and division
    return (x - Math.floor(x)) * 2 - 1;
}
