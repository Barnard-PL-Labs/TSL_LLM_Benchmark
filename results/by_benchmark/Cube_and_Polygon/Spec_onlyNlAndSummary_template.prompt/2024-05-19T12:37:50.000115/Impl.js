// Function to compute the sine of x
function sin(x) {
    return Math.sin(x);
}

// Function to compute the sawtooth wave of x
function saw(x) {
    // `x % (2 * Math.PI)` normalizes x to a repetitive interval [0, 2*PI)
    // `(2/Math.PI)` scales it to range [-1, 1]
    return 2 * (x / Math.PI - Math.floor(0.5 + x / Math.PI));
}
