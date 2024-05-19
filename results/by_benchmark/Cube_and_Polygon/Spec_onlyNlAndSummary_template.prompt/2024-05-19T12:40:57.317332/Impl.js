function sin(x) {
    return Math.sin(x);
}

function saw(x) {
    // Sawtooth wave function: period of 2π, range -1 to 1
    return 2 * (x / (2 * Math.PI) - Math.floor(0.5 + x / (2 * Math.PI)));
}
