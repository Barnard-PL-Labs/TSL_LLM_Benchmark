function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    // Normalize x to a 0 to 1 range for a sawtooth pattern
    return x - Math.floor(x);
}
