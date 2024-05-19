    function moveLeft(ball) {
        // Assuming 'ball.position' exists and represents the x-coordinate
        if (!leftmost(ball)) {  // Check to prevent moving into the wall
            ball.position -= 1;
        }
        return ball;  // Return the updated state of 'ball'
    }
    