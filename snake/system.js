//System controlled variables
let currentState = 0;
let currentState1 = 0;

let command;
let die = "die"
let idle = "idle"

//snake position and length stuff 
let headX=10;
let headY=10;
let tailLength=2;
let randX = 0;
let randY = 0;

//draw apple
let appleX=5;
let appleY=5;

//score
let score=0;

//Systems for updating snake position and checking collisions
function updateSnake() {
    if (currentState === 0) {
        if (!pressDown(e) && !pressR(e) && !pressUp(e)) {
          headX = headX - 1
          headY = headY
          currentState = 0
        }
        else if (!pressDown(e) && !pressR(e) && pressUp(e) && !pressL(e)) {
          headX = headX
          headY = headY - 1
          currentState = 1
        }
        else if (!pressDown(e) && pressR(e) && !pressUp(e) && !pressL(e)) {
          headY = headY
          headX = headX + 1
          currentState = 2
        }
        else if (pressDown(e) && pressR(e)) {
          currentState = 3
        }
        else if (pressDown(e) && pressUp(e)) {
          currentState = 3
        }
        else if (pressDown(e) && pressL(e)) {
          currentState = 3
        }
        else if (pressR(e) && pressUp(e)) {
          currentState = 3
        }
        else if (pressR(e) && pressL(e)) {
          currentState = 3
        }
        else if (pressUp(e) && pressL(e)) {
          currentState = 3
        }
        else if (pressDown(e) && !pressR(e) && !pressUp(e) && !pressL(e)) {
          headX = headX
          headY = headY + 1
          currentState = 3
        }
      }
      else if (currentState === 1) {
        if (!pressDown(e) && !pressR(e) && !pressUp(e) && pressL(e)) {
          headX = headX - 1
          headY = headY
          currentState = 0
        }
        else if (!pressDown(e) && !pressR(e) && !pressL(e)) {
          headX = headX
          headY = headY - 1
          currentState = 1
        }
        else if (!pressDown(e) && pressR(e) && !pressUp(e) && !pressL(e)) {
          headY = headY
          headX = headX + 1
          currentState = 2
        }
        else if (pressDown(e) && pressR(e)) {
          currentState = 3
        }
        else if (pressDown(e) && pressUp(e)) {
          currentState = 3
        }
        else if (pressDown(e) && pressL(e)) {
          currentState = 3
        }
        else if (pressR(e) && pressUp(e)) {
          currentState = 3
        }
        else if (pressR(e) && pressL(e)) {
          currentState = 3
        }
        else if (pressUp(e) && pressL(e)) {
          currentState = 3
        }
        else if (pressDown(e) && !pressR(e) && !pressUp(e) && !pressL(e)) {
          headX = headX
          headY = headY + 1
          currentState = 3
        }
      }
      else if (currentState === 2) {
        if (!pressDown(e) && !pressR(e) && !pressUp(e) && pressL(e)) {
          headX = headX - 1
          headY = headY
          currentState = 0
        }
        else if (!pressDown(e) && !pressR(e) && pressUp(e) && !pressL(e)) {
          headX = headX
          headY = headY - 1
          currentState = 1
        }
        else if (!pressDown(e) && !pressUp(e) && !pressL(e)) {
          headY = headY
          headX = headX + 1
          currentState = 2
        }
        else if (pressDown(e) && pressR(e)) {
          currentState = 3
        }
        else if (pressDown(e) && pressUp(e)) {
          currentState = 3
        }
        else if (pressDown(e) && pressL(e)) {
          currentState = 3
        }
        else if (pressR(e) && pressUp(e)) {
          currentState = 3
        }
        else if (pressR(e) && pressL(e)) {
          currentState = 3
        }
        else if (pressUp(e) && pressL(e)) {
          currentState = 3
        }
        else if (pressDown(e) && !pressR(e) && !pressUp(e) && !pressL(e)) {
          headX = headX
          headY = headY + 1
          currentState = 3
        }
      }
      else if (currentState === 3) {
        if (!pressDown(e) && !pressR(e) && !pressUp(e) && pressL(e)) {
          headX = headX - 1
          headY = headY
          currentState = 0
        }
        else if (!pressDown(e) && !pressR(e) && pressUp(e) && !pressL(e)) {
          headX = headX
          headY = headY - 1
          currentState = 1
        }
        else if (!pressDown(e) && pressR(e) && !pressUp(e) && !pressL(e)) {
          headY = headY
          headX = headX + 1
          currentState = 2
        }
        else if (pressDown(e) && pressR(e)) {
          currentState = 3
        }
        else if (pressDown(e) && pressUp(e)) {
          currentState = 3
        }
        else if (pressDown(e) && pressL(e)) {
          currentState = 3
        }
        else if (pressR(e) && pressUp(e)) {
          currentState = 3
        }
        else if (pressR(e) && pressL(e)) {
          currentState = 3
        }
        else if (pressUp(e) && pressL(e)) {
          currentState = 3
        }
        else if (!pressR(e) && !pressUp(e) && !pressL(e)) {
          headX = headX
          headY = headY + 1
          currentState = 3
        }
      }
}

function updateCollision(){
    if (currentState1 === 0) {
        if (!eatFood() && hitSelf()) {
          score = score
          tailLength = tailLength
          appleX = randX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score
          tailLength = tailLength
          appleX = randX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score
          tailLength = tailLength
          appleX = appleX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score
          tailLength = tailLength
          appleX = appleX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score
          tailLength = tailLength + 1
          appleX = randX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score
          tailLength = tailLength + 1
          appleX = randX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score
          tailLength = tailLength + 1
          appleX = appleX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score
          tailLength = tailLength + 1
          appleX = appleX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score + 1
          tailLength = tailLength
          appleX = randX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score + 1
          tailLength = tailLength
          appleX = randX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score + 1
          tailLength = tailLength
          appleX = appleX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score + 1
          tailLength = tailLength
          appleX = appleX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score + 1
          tailLength = tailLength + 1
          appleX = randX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score + 1
          tailLength = tailLength + 1
          appleX = randX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score + 1
          tailLength = tailLength + 1
          appleX = appleX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitSelf()) {
          score = score + 1
          tailLength = tailLength + 1
          appleX = appleX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score
          tailLength = tailLength
          appleX = randX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score
          tailLength = tailLength
          appleX = randX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score
          tailLength = tailLength
          appleX = appleX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score
          tailLength = tailLength
          appleX = appleX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score
          tailLength = tailLength + 1
          appleX = randX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score
          tailLength = tailLength + 1
          appleX = randX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score
          tailLength = tailLength + 1
          appleX = appleX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score
          tailLength = tailLength + 1
          appleX = appleX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score + 1
          tailLength = tailLength
          appleX = randX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score + 1
          tailLength = tailLength
          appleX = randX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score + 1
          tailLength = tailLength
          appleX = appleX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score + 1
          tailLength = tailLength
          appleX = appleX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score + 1
          tailLength = tailLength + 1
          appleX = randX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score + 1
          tailLength = tailLength + 1
          appleX = randX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score + 1
          tailLength = tailLength + 1
          appleX = appleX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (!eatFood() && hitWall()) {
          score = score + 1
          tailLength = tailLength + 1
          appleX = appleX
          appleY = appleY
          command = die
          currentState1 = 0
        }
        else if (eatFood() && !hitSelf() && !hitWall()) {
          score = score + 1
          tailLength = tailLength + 1
          appleX = randX
          appleY = randY
          command = idle
          currentState1 = 0
        }
        else if (eatFood() && !hitSelf() && !hitWall()) {
          score = score + 1
          tailLength = tailLength + 1
          appleX = randX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (eatFood() && !hitSelf() && !hitWall()) {
          score = score + 1
          tailLength = tailLength + 1
          appleX = randX
          appleY = randY
          command = command
          currentState1 = 0
        }
        else if (eatFood() && !hitSelf() && hitWall()) {
          score = score + 1
          tailLength = tailLength + 1
          appleX = randX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (eatFood() && hitSelf() && !hitWall()) {
          score = score + 1
          tailLength = tailLength + 1
          appleX = randX
          appleY = randY
          command = die
          currentState1 = 0
        }
        else if (eatFood() && hitSelf() && hitWall()) {
            currentState1 = 0
        }
        else if (!eatFood() && !hitSelf() && !hitWall()) {
          score = score
          tailLength = tailLength
          appleX = appleX
          appleY = appleY
          command = idle
          currentState1 = 0
        }
      }
}