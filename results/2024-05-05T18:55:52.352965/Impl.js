// Function to calculate sine of x
function sin(x) {
    return Math.sin(x);
}

// Function to calculate sawtooth wave of x
function saw(x) {
    // Normalize x to a range of 0 to 2π
    let period = 2 * Math.PI; 
    x = x % period; 
    if (x < 0) {
        x += period;
    }
    
    // Compute and return the sawtooth value
    return (2 * x / period) - 1;
}
