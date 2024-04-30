function sin(x) {
    return Math.sin(x);
}

function pressL(e) {
    if (e instanceof KeyboardEvent) {
        return e.keyCode === 37;
    }
}
function pressR(e) {
    if (e instanceof KeyboardEvent) {
        return e.keyCode === 39;
    }
}