function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    // Assuming the period of the sawtooth wave is 2π (similar to sine and cosine)
    const period = 2 * Math.PI;
    return (x % period) / period;
}
