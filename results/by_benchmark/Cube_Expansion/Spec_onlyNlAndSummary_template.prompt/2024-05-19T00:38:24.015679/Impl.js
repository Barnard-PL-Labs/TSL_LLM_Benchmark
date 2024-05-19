document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        cube.scale.x = 1; // or any operation you need to perform when the up key is pressed
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowUp') {
        cube.scale.x = 0; // reset or any other operation when the up key is released
    }
});
