// Calculate the sine of x
function sin(x) {
    return Math.sin(x);
}

// Calculate the sawtooth wave of x
function saw(x) {
    // Sawtooth wave increases linearly and drops back to 0 periodically
    // Assuming the period is 2π for demonstration
    return (x % (2 * Math.PI)) / (2 * Math.PI);
}
