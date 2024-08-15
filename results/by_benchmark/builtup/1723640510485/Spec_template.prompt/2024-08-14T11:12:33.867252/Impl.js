// Simulated environment methods (Assumed)
function requestTruckCrossing(i) {
    // This should return true if truck i is requesting to cross the road
    // Implementation detail depends on the system
}

function coinFlip(i, j) {
    // Simulate a 50-50 chance for either truck winning
    return Math.random() < 0.5 ? i : j;
}

// Truck crossing request management
let grantedTruck = null; // Global variable to keep track of the granted truck
