function rotateLeft(cube) {
    // Assuming rotationDelta is in radians and represents the angle for each rotation
    const rotationDelta = 0.1;  // Adjust this value as needed for smoother rotation
    cube.rotation.y -= rotationDelta;
}

function rotateRight(cube) {
    const rotationDelta = 0.1;  // Adjust this value as needed for smoother rotation
    cube.rotation.y += rotationDelta;
}
