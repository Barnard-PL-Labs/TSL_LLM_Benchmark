let dead = 0
let pos = 0 // Ship's initial position.
let shoot = 0 // Initial shoot count.

// Key press states.
const keys = {
    L: false,
    R: false,
    Up: false,
    Down: false,
    S: false,
}

// Ship status.
let ship = {
    hit: false,
}

// Function to simulate ship being hit.
function hit(ship) {
    return ship.hit
}

// Key press detection functions.
function pressL() {
    return keys.L
}

function pressR() {
    return keys.R
}

function pressUp() {
    return keys.Up
}

function pressDown() {
    return keys.Down
}

function pressS() {
    return keys.S
}

// Key event listeners.
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'a': // Left
            keys.L = true
            break
        case 'd': // Right
            keys.R = true
            break
        case 'w': // Up
            keys.Up = true
            break
        case 's': // Down
            keys.Down = true
            break
        case ' ': // Spacebar for shoot
            keys.S = true
            break
    }
})

document.addEventListener('keyup', function (event) {
    switch (event.key) {
        case 'a': // Left
            keys.L = false
            break
        case 'd': // Right
            keys.R = false
            break
        case 'w': // Up
            keys.Up = false
            break
        case 's': // Down
            keys.Down = false
            break
        case ' ': // Spacebar for shoot
            keys.S = false
            break
    }
})

// Game logic execution based on state and key presses.
function updateGameState() {
    if (hit(ship)) {
        dead = 1
    }

    if (pressL() && !pressR() && !pressUp() && !pressDown() && !hit(ship)) {
        pos -= 1
    }

    if (pressR() && !pressL() && !pressUp() && !pressDown() && !hit(ship)) {
        pos += 1
    }

    if (pressS()) {
        shoot += 1
    }

    // Logging the current state for debugging.
    console.log(`Dead: ${dead}, Position: ${pos}, Shoot: ${shoot}`)
}

// Set an interval to regularly update the game state based on inputs.
setInterval(updateGameState, 100) // Update every 100 milliseconds.
