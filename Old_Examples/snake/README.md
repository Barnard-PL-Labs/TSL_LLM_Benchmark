# Temporal Snake Logic (TSL) - Program Synthesis Seminar 2023

a Snake game created with TSL, JavaScript, and HTML5.

[Play a demo here!](https://ravenrothkopf.github.io/snakeTSL/)

## Project Overview and Game Rules
For this project, I sought to create a game governed by a system generated using program synthesis rather than manual programming. 
**Snake** is a game where the player controls a snake that moves around the screen through arrow key presses. The goal of the game is to collect the apples that appear on the screen without dying.

The rules of the game are simple:
1. If the snake hits itself, the game ends.
2. If the snake hits a wall, the game ends.
3. If the snake hits an apple, both the snake's length and the player's score increase by 1.

In program synthesis, Temporal Stream Logic (**TSL**) is a high-level, logical specification language used to synthesize reactive systems. With TSL, you can specify how a program will behave/react over **discrete time** and then generate a concrete code implementation that realizes that specification. One reason why game development is a well suited domain for reactive program synthesis because games almost always require inputs from some environment (mouse clicks, key presses, screen taps, etc.), and must respond to those inputs/interactions (collect the token, move the character, increment the score, etc.). 

## Reactive System Architecture 
The first step in TSL spec development is to figure out the inputs, outputs, and cells of your system.
I started out approaching this problem with one system in mind that dealt with updating the snake's position and reacting to collisions.
Further in the development process, I decided to split the reactive system up into two systems, one for controlling position and the other for controlling collisions. Two systems are better suited for this game because the snake's position must be updated and a new snake head be set before the head position can be used to check collisions.    

### Snake Position System
<div align=left><img src="figs/positionSystem.png" width="30%" height="30%"></div>
This reactive system controls the movement of the snake based on the up, down, left, and right arrow key presses.
The arrow key presses (<code>pressLeft(e)</code>,<**code**>pressUp(e)</**code**>, etc.) are inputs from the environment, and the snake's head position, <code>headX</code> and <code>headY</code>, are cells that are either incremented or decremented based on the inputs.

### Snake Collisions System
<div align=left><img src="figs/collisionSystem.png" width="40%" height="40%"></div>
This reactive system controls how the snake reacts to collisions with itself, the walls, and with apples.
The inputs from the environment are boolean values (<code>hitWall</code>, <code>hitSelf</code>, and <code>eatFood</code>) that return true or false depending on the position of the snake's head and the position of the respective objects they are checking. The player's <code>score</code> and the length of the snake's tail, <code>tailHead</code>, are cells that are incremented by one every time the snake eats an apple. The outputs from the system are apple's position, <code>appleX</code> and <code>appleY</code>, and a <code>command</code> that either signals for the game to end or to continue based on the inputs from the environment.

### System Flow
<div align=left><img src="figs/flow.png" width="50%" height="50%"></div>
Every time step, the snake's position will be updated and a new head will be set. Then, using that new head, the collision cases will be checked. The overall system flow is shown in the figure above. 

## TSL Spec Development
After building the overall architecture for my systems, I then wrote the specifications for each system in TSL.

### Snake Position Specification
~~~js
**  always assume {
    //mutual exculsion for all key inputs
   ! (pressL(e) && pressR(e));
   ! (pressL(e) && pressUp(e));
   ! (pressL(e) && pressDown(e));
   ! (pressR(e) && pressUp(e));
   ! (pressR(e) && pressDown(e));
   ! (pressUp(e) && pressDown(e));
  }

always guarantee {
    //mutual exclusion for X and Y pos updates, only one is updated at a time
    pressL(e) -> (([ headX <- headX - 1] && [headY <- headY]) W (pressR(e) || pressDown(e) || pressUp(e)));
    pressR(e) -> (([ headX <- headX + 1] && [headY <- headY]) W (pressL(e) || pressDown(e) || pressUp(e)));
    pressUp(e) -> (([ headY <- headY - 1] && [headX <- headX]) W (pressR(e) || pressL(e) || pressDown(e)));
    pressDown(e) -> (([ headY <- headY + 1] && [headX <- headX]) W (pressR(e) || pressL(e) || pressUp(e))); 
}**
~~~
This specification synthesizes a 4-state automaton. The 4 states are for the 4 different arrow key inputs.

### Snake Collisions Specification
~~~js
always assume {
  //mutual exclusion for inputs
  !(eatFood && hitSelf && hitWall);
}

always guarantee {
  //if an apple is eaten: increment the score and snake length, also reset apple position to a random value
  eatFood -> ([score <- score + 1] && [tailLength <- tailLength + 1] && [appleX <- randX] && [appleY <- randY]);
	
  //if self or wall is hit: signal game over
  (hitSelf || hitWall) -> [command <- die];
	
  //if there are no collisions, nothing should change
  ! (eatFood || hitSelf || hitWall) -> ([score <- score] && [tailLength <- tailLength] && [appleX <- appleX] && [appleY <- appleY] && [command <- idle]);
}
~~~
This specification synthesizes an automaton with 1 state. Not ideal, there is definitely a way to make the spec more interesting!
## Code Integration
After writing a TSL specification, the next step is integrating the synthesized code from that specification into your desired domain. I started with code for a JavaScript Snake game from an online tutorial[^1], and then refactored it so that function terms and predicates fit with those from my specifcations. I kept the boilerplate code for rendering snake, the apple, and the score count on the canvas. I also kept the function for adding a unit to the end of the snake based on the <code>tailLength</code> variable. I split up the rest of the code into 3 files:
~~~
├── index.js
├── functions.js
├── system.js
~~~

<code>index.js</code> contains most of the boilerplate for rendering the game, and the top-level <code>draw</code> function that is called 7 times a second. One call of this function represents one timestep for the reactive systems. <code>draw</code> calls the functions for drawing the snake, apple and score on the screen, along with the <code>updateSnake()</code> and <code>updateCollision()</code> functions which are located in <code>system.js</code>. These functions contain the code from the synthesized TSL specifications. <code>functions.js</code> has all of the  predicates that are used in the TSL specifications like <code>pressLeft(e)</code>, and <code>eatFood()</code>. 

## Final Result
The final result of this project is a [Snake](https://ravenrothkopf.github.io/snakeTSL/) game that looks like a normal Snake game lol. The fun part was incorporating the underlying program synthesis techniques into the game development process. My specifications are pretty basic, but they are a good foundation for future specification engineering that deals with more complex interactions and snake behaviors over time. Also, I'm sure there's a way to unite the two systems for position and collision handling, I just haven't had the time to figure it out!

[^1]: https://github.com/Kamau-ke/How-to-buid-snake-game-with-javaScript/tree/main/snake%20game
