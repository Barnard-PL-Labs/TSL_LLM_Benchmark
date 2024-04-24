function rotateLeft(cube) {
    cube.rotation.y += 0.1;  // Increment y rotation, adjust the value based on needed rotation speed
    return cube;  // Return the new rotation for verification or further processing
}

function rotateRight(cube) {
    cube.rotation.y -= 0.1;  // Decrement y rotation, adjust the value based on needed rotation speed
    return cube;  // Return the new rotation for verification or further processing
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
