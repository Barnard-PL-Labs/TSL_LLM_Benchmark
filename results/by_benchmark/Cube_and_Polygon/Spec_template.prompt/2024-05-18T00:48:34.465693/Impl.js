// sin(x): Returns the sine of x
function sin(x) {
    return Math.sin(x);
}

// saw(x): Returns the sawtooth wave of x
function saw(x) {
    const period = 2 * Math.PI; // Define the period of the wave
    const normalizedX = x % period; // Normalize x to a value within the period
    return 2 * (normalizedX / period) - 1; // Scale and shift to range [-1, 1]
}
