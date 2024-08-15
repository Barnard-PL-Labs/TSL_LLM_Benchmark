function updateState({ currentState, g, r1, r2, r3, r4, p12, p13, p14 }) {
  // Assuming r1, r2, r3, and r4 are representing requests from trucks 1, 2, 3, and 4 respectively
  // Assuming p12, p13, p14 are predicates that represent the outcome of the coin flips
  
  // Reset the grant at the beginning of each timestep
  let grant = null;

  // Logic to determine which truck is granted access to the bridge
  if (r1 && !r2 && !r3 && !r4) {
    grant = 1; // Truck 1 is granted if it's the only one requesting
  } else if (r2 && !r1 && !r3 && !r4) {
    grant = 2; // Truck 2 is granted if it's the only one requesting
  } else if (r3 && !r1 && !r2 && !r4) {
    grant = 3; // Truck 3 is granted if it's the only one requesting
  } else if (r4 && !r1 && !r2 && !r3) {
    grant = 4; // Truck 4 is granted if it's the only one requesting
  } else {
    // More complex logic when multiple trucks request simultaneously
    if (p12 && r1 && r2) {
      if (g === 3) {
        grant = 2; // Guarantee 1
      } else if (g === 4) {
        grant = 2; // Guarantee 2
      }
    }
    if (p13 && r1 && r3) {
      if (g === 2) {
        grant = 3; // Guarantee 3
      } else if (g === 4) {
        grant = 3; // Guarantee 4
      }
    }
    if (p14 && r1 && r4) {
      if (g === 2) {
        grant = 4; // Guarantee 5
      }
    }
    // Default to granting the lowest numbered truck if no other conditions are met
    if (!grant) {
      if (r1) {
        grant = 1;
      } else if (r2) {
        grant = 2;
      } else if (r3) {
        grant = 3;
      } else if (r4) {
        grant = 4;
      }
    }
  }

  // Update the current state with the truck that is granted access
  currentState.g = grant;

  return currentState;
}
