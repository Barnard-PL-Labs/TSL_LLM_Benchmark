// Function to return the sine of x
function sin(x) {
    return Math.sin(x);
}

// Function to return the sawtooth wave of x
function saw(x) {
    // Normalize x to range from 0 to 2π
    x = x % (2 * Math.PI);
    
    // Calculate sawtooth from sine function, translating it to a sawtooth pattern
    if (x < Math.PI) {
        return x / Math.PI;
    } else {
        return (x - 2 * Math.PI) / Math.PI;
    }
}
