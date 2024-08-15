function updateState({currentState, r, p, g}) {
  // Initialize an array for keeping track of requests
  const requests = [1, 2, 3, 4].filter(i => r(i));

  // Function to determine if all conditions are met for granting access to a truck
  function canGrant(current, others) {
    // Check all constraints as described
    return others.every(o => {
      if (p(1, 2) && currentState.g === 3 && current === 1) return currentState.g === 2;
      if (p(1, 2) && currentState.g === 4 && current === 1) return currentState.g === 2;
      if (p(1, 3) && currentState.g === 2 && current === 1) return currentState.g === 3;
      if (p(1, 3) && currentState.g === 4 && current === 1) return currentState.g === 3;
      if (p(1, 4) && currentState.g === 2 && current === 1) return currentState.g === 4;
      if (p(1, 4) && currentState.g === 3 && current === 1) return currentState.g === 4;
      if (p(2, 1) && currentState.g === 3 && current === 2) return currentState.g === 1;
      if (p(2, 1) && currentState.g === 4 && current === 2) return currentState.g === 1;
      if (p(2, 3) && currentState.g === 1 && current === 2) return currentState.g === 3;
      if (p(2, 3) && currentState.g === 4 && current === 2) return currentState.g === 3;
      return true;
    });
  }

  // Decide who to grant access to
  let granted = null;
  for (let i = 0; i < requests.length; i++) {
    const truck = requests[i];
    const otherTrucks = requests.filter(t => t !== truck);
    if (canGrant(truck, otherTrucks)) {
      granted = truck;
      break;
    }
  }

  // Update the current state with the truck granted access
  currentState.g = granted;

  return currentState;
}
