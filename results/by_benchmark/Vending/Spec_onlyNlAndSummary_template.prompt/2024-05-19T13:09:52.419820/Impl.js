// Predicates for checking the total amount
function isLessThanPoint75(total) {
    return total < 0.75;
}

function isLessThanOne(total) {
    return total < 1.0;
}

function isLessThanOnePoint25(total) {
    return total < 1.25;
}

// Predicates for checking key presses based on event 'e'
function pressD(e) {
    return e.key === 'd' || e.key === 'D';
}

function pressQ(e) {
    return e.key === 'q' || e.key === 'Q';
}

function pressO(e) {
    return e.key === 'o' || e.key === 'O';
}

function press1(e) {
    return e.key === '1';
}

function press2(e) {
    return e.key === '2';
}

function press3(e) {
    return e.key === '3';
}

function pressR(e) {
    return e.key === 'r' || e.key === 'R';
}
