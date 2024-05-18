// Function to return the sine of x
function sin(x) {
  return Math.sin(x);
}

// Function to return the sawtooth wave of x
function saw(x) {
  // Modulo operation to create a repeating pattern with a period from 0 to 2π
  return 2 * (x - Math.floor(x / (2 * Math.PI)) * 2 * Math.PI) / (2 * Math.PI) - 1;
}
