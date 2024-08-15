function updateState({ currentState, cells, predicates }) {
    // Extract cells and predicates for easier reference
    let { g } = cells;
    const { r, p } = predicates;

    // Determine the requesting trucks
    let requestingTrucks = [];
    for (let i = 1; i <= 4; i++) {
        if (r(i)) {
            requestingTrucks.push(i);
        }
    }

    // Decide which truck to grant access to:
    // Only one truck can be on the bridge at a time, so we choose one truck from the requesting list.
    let grantedTruck = null;

    if (requestingTrucks.length > 0) {
        // If some trucks are requesting access, choose one based on a simple arbiter logic (first come, first served for simplicity)
        // But we also must respect the coinflip rule:
        // "if 1 wins the coinflip against 2 and 3 is granted, then 1 must not be granted until 2 is"
        if (p(1, 2) && g === 3) {
            // If truck 1 wins the coinflip against 2 and 3 is currently granted,
            // truck 1 must not be granted until truck 2 is granted.
            let index1 = requestingTrucks.indexOf(1);
            let index2 = requestingTrucks.indexOf(2);

            if (index1 !== -1 && index2 !== -1) {
                // Both truck 1 and 2 are requesting
                grantedTruck = 2; // Grant truck 2 to comply with the rule
            } else if (index2 !== -1) {
                // Only truck 2 is requesting
                grantedTruck = 2; 
            } else {
                // Default to the first available truck that is not truck 1
                grantedTruck = requestingTrucks.find(truck => truck !== 1) || null;
            }
        } else {
            // Regular granting, first come first served
            grantedTruck = requestingTrucks[0];
        }
    }

    // Update the cell 'g' to be the index of the truck that is granted a request to go across the road
    g = grantedTruck;

    // Return updated state
    return {
        currentState,
        cells: { g },
        predicates
    };
}
