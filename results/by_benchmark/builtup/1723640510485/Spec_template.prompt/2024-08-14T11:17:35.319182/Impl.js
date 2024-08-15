// Define the array to store requests where the index represents the truck id.
let requests = [];

// Define a function to simulate coin flipping between two trucks.
// This will randomly return true or false.
function coinFlip() {
    return Math.random() > 0.5;
}

// Predicate (r i): Evaluates to true when truck i is requesting to go across the road.
function r(i) {
    return requests[i] === true;
}

// Predicate (p i j): Returns true if truck i wins the coin flip against truck j.
function p(i, j) {
    return coinFlip();  // Assuming true means truck i wins.
}

// Function to set the 'g' cell value based on requesting trucks.
// This function grants the request to the first truck in the list of requests.
function grantRequest() {
    // Find the first truck that made the request.
    let grantedTruck = requests.findIndex(r);
    
    // If there's a valid truck, set 'g' to that truck's index.
    if (grantedTruck !== -1) {
        g = grantedTruck;
    } else {
        g = null;  // No truck has its request granted.
    }
}

// Example usage:
// Simulate requests
requests[0] = true;  // Truck 0 is requesting
requests[1] = true;  // Truck 1 is requesting

// Evaluate predicates
console.log(r(0));  // Should print: true
console.log(r(1));  // Should print: true
console.log(p(0, 1));  // Random outcome of a coin flip

// Grant a request
grantRequest();
console.log(g);  // Should print the index of the truck that gets to go, either 0 or 1 in this example
