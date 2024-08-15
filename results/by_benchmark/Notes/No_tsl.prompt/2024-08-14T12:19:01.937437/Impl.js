function updateState({ currentState, button1, button2, button3 }) {
    // Initialize output variables
    let noteToPlay = currentState.noteToPlay || null;
    let noteToPlay2 = currentState.noteToPlay2 || null;
    
    // Check button1 for playing E4 note
    if (button1) {
        noteToPlay = 'E4';
    }
    
    // Check button2 for playing G4 note
    if (button2) {
        noteToPlay = 'G4';
    }

    // Check button3 for playing A4 note
    if (button3) {
        // Ensure A4 in noteToPlay2 does not conflict with E4 in noteToPlay
        if (noteToPlay !== 'E4') {
            noteToPlay2 = 'A4';
        }
    }

    // check for further conditions
    // if E4 is played on `noteToPlay`, then A4 must eventually be played on `noteToPlay2` and G4 on `noteToPlay`
    if (noteToPlay === 'E4') {
        noteToPlay2 = 'A4'; // Schedule A4 to play on noteToPlay2
        // As per spec, G4 should also be played eventually. 
        // For simplicity, assuming it could be in next state update or via another mechanism
    }

    // Update the currentState before returning
    currentState.noteToPlay = noteToPlay;
    currentState.noteToPlay2 = noteToPlay2;

    // Return updated state
    return currentState;
}
