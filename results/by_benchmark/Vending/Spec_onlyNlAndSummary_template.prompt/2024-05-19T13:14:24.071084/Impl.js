// Predicates that compare the total with specific values
function isLessThanPoint75(total) {
    return total < 0.75;
}

function isLessThanOne(total) {
    return total < 1.0;
}

function isLessThanOnePoint25(total) {
    return total < 1.25;
}

// Predicates that check if specific keys are pressed in the 'e' cell
function pressD(e) {
    return e === 'd';
}

function pressQ(e) {
    return e === 'q';
}

function pressO(e) {
    return e === 'o';
}

function press1(e) {
    return e === '1';
}

function press2(e) {
    return e === '2';
}

function press3(e) {
    return e === '3';
}

function pressR(e) {
    return e === 'r';
}
