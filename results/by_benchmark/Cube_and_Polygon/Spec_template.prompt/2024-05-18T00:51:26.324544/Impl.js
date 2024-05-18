function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    const period = 2 * Math.PI;  // Assuming the period of the sawtooth wave is 2π
    return 2 * (x / period - Math.floor(0.5 + x / period));
}
