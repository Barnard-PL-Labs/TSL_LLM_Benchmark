// Predicates related to 'total'
function isLessThanPoint75(total) {
    return total < 0.75;
}

function isLessThanOne(total) {
    return total < 1;
}

function isLessThanOnePoint25(total) {
    return total < 1.25;
}

// Predicates related to 'e' (event object typically from user interaction)
function pressD(e) {
    return e.key === 'd';
}

function pressQ(e) {
    return e.key === 'q';
}

function pressO(e) {
    return e.key === 'o';
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
    return e.key === 'r';
}
