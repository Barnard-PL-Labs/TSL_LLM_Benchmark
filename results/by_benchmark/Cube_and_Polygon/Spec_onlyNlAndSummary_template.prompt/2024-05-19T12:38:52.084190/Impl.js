// Function to return the sine of x
function sin(x) {
    return Math.sin(x);
}

// Function to return the sawtooth wave of x
function saw(x) {
    // Normalize x to a range between 0 and 1 for a repeating sawtooth pattern
    return x - Math.floor(x);
}
