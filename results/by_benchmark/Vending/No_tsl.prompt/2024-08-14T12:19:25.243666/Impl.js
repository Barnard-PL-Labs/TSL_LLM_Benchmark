function updateState({ total, e }) {
    // Handle inserting a dime
    if (pressD(e)) {
        total += 0.1;
    }

    // Handle inserting a quarter
    if (pressQ(e)) {
        total += 0.25;
    }

    // Handle inserting a dollar
    if (pressO(e)) {
        total += 1;
    }

    // Handle purchasing product option 1
    if (press1(e) && !isLessThanPoint75(total)) {
        total -= 0.75;
    }

    // Handle purchasing product option 2
    if (press2(e) && !isLessThanOne(total)) {
        total -= 1;
    }

    // Handle purchasing product option 3
    if (press3(e) && !isLessThanOnePoint25(total)) {
        total -= 1.25;
    }

    // Handle refunding money
    if (pressR(e)) {
        total = 0;
    }

    // Return the updated state
    return { total };
}
