// Assuming there's a global state or way to interact with the system, which isn't specified
let currentState = {
    requests: {}, // store requests by truck ids
    coinFlips: {} // store results of coin flips, key as a string "i,j"
};

// Function to simulate granting a request
function grantRequest(truckId) {
    // Assuming 'g' is a function to set some global or external state
    currentState.granted = truckId; // example of setting this state
}

// Predicate to check if a truck is requesting to cross
function r(i) {
    // Check if truck 'i' is requesting to go across
    return currentState.requests[i] === true;
}

// Predicate for simulating a coin flip between two trucks
function p(i, j) {
    const key = `${Math.min(i, j)},${Math.max(i, j)}`;
    if (key in currentState.coinFlips) {
        return currentState.coinFlips[key] === i; // return true if i won the stored result
    } else {
        // Simulate coin flip and store the result
        const result = Math.random() < 0.5 ? i : j;
        currentState.coinFlips[key] = result;
        return result === i;
    }
}

// Example usage:
// Let's say trucks 2 and 5 are requesting to go across
currentState.requests[2] = true;
currentState.requests[5] = true;

// Decide to grant request to truck 2
grantRequest(2);

// Check if truck 2 has requested to cross
console.log(r(2)); // Expected output: true

// Simulate a coin flip between truck 2 and 5
console.log(p(2, 5)); // Outputs: true or false, randomly chosen
