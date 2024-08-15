function updateState({ currentState, button1, button2, button3, noteToPlay, noteToPlay2 }) {
    // Initialize output variables
    let outputNoteToPlay = noteToPlay;
    let outputNoteToPlay2 = noteToPlay2;

    // Check button presses and update notes accordingly
    if (button1) {
        // If button1 is pressed, set noteToPlay to E4
        outputNoteToPlay = "E4";

        // Check if E4 is already playing, schedule A4 to play on noteToPlay2 later
        if (noteToPlay === "E4") {
            outputNoteToPlay2 = "A4";
        }
    }

    if (button2) {
        // If button2 is pressed, set noteToPlay to G4
        outputNoteToPlay = "G4";
    }

    if (button3) {
        // If button3 is pressed and E4 is not currently playing, set noteToPlay2 to A4
        if (noteToPlay !== "E4") {
            outputNoteToPlay2 = "A4";
        }
    }

    // Ensuring that E4 and A4 do not play at the same time on noteToPlay and noteToPlay2
    if (outputNoteToPlay === "E4" && outputNoteToPlay2 === "A4") {
        // Clear noteToPlay2 if E4 is set to play at the same time
        outputNoteToPlay2 = null;
    }

    return { 
        currentState, 
        noteToPlay: outputNoteToPlay, 
        noteToPlay2: outputNoteToPlay2 
    };
}
