function updateState({ currentState, button1, button2, button3, noteToPlay, noteToPlay2 }) {
    // Initialize output variables
    let outputNoteToPlay = noteToPlay;
    let outputNoteToPlay2 = noteToPlay2;

    // Check button states and assign notes accordingly
    if (button1) {
        // When button1 is pressed, play E4 on noteToPlay
        outputNoteToPlay = "E4";
    } else if (button2) {
        // When button2 is pressed, play G4 on noteToPlay
        outputNoteToPlay = "G4";
    }

    if (button3) {
        // When button3 is pressed, play A4 on noteToPlay2
        outputNoteToPlay2 = "A4";
    }

    // Additional rules based on the natural language description
    // Rule 5: If A4 is played on noteToPlay2, E4 cannot be played on noteToPlay at the same time
    if (outputNoteToPlay2 === "A4" && outputNoteToPlay === "E4") {
        outputNoteToPlay = null; // Prevent E4 from playing when A4 is active on noteToPlay2
    }

    // Rule 6: A4 cannot be played on noteToPlay2 until E4 has stopped being played on noteToPlay
    if (outputNoteToPlay === "E4") {
        outputNoteToPlay2 = null; // Delay playing A4 on noteToPlay2
    }

    // Prepare the output state
    const outputState = {
        currentState,
        noteToPlay: outputNoteToPlay,
        noteToPlay2: outputNoteToPlay2,
        button1,
        button2,
        button3
    };

    // Return the updated state
    return outputState;
}
