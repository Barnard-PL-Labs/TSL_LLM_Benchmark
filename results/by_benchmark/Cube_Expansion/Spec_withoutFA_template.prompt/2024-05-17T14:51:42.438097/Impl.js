document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        pressUp(true);
    } else {
        pressUp(false);
    }
});

function pressUp(isPressed) {
    console.log('Up arrow key pressed:', isPressed);
    return isPressed;
}
