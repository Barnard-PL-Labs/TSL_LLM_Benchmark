// Function that returns the sine of x
function sin(x) {
    return Math.sin(x);
}

// Function that returns the sawtooth wave of x
function saw(x) {
    // A simple sawtooth wave generator
    return 2 * (x / (2 * Math.PI) - Math.floor(0.5 + x / (2 * Math.PI)));
}
