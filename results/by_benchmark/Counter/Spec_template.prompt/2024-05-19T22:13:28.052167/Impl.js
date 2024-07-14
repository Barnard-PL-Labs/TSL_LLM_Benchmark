// Initialize cells
let stepsize = 1; // stepsize starts at 1 each program start
let e = { key: '' }; // e will store the last key pressed

// Event listener for keypresses to update the cell `e`
document.addEventListener('keydown', (event) => {
    e.key = event.key; // store the last key pressed in `e`
});
