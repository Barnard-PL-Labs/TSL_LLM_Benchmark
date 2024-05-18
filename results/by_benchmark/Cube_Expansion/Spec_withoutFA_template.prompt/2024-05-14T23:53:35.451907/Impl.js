document.addEventListener('keydown', function(e) {
    if (e.keyCode === 38) { // 38 is the keyCode for the up arrow key
        console.log("Up arrow key is pressed.");
        // Trigger your predicate logic or set a flag here.
    }
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 38) { // When the up arrow key is released
        console.log("Up arrow key is released.");
        // Reset your predicate logic or flag here.
    }
});
