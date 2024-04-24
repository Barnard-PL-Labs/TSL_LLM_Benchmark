<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>


# TSL LLM Benchmark

This project explores the capabilities of LLMs in expediting code synthesis tasks. 

## Benchmark Overview
We propose a set of benchmarks to test the capability of LLMs in generating TSL specs for reactive synthesis.
### Ball
This benchmark uses a simple TSL spec to generate a complex state machine to simulate a bouncing ball.
<table>
<tr>
  <!-- Column for the GIF -->
  <td>
    <img src="media/ball.gif" width="500" height="500" **alt**="Demo Animation">
  </td>

  <!-- Column for the first code block -->
  <td>
    <pre style="height: 500px; width: 500px; max-height: 500px; max-width: 500px ; overflow-y: auto;"><code>    
always assume {
        // Assumption 1: Moving left ensures the ball is not at the rightmost wall next
        ([ ball.pos <- moveLeft(ball.pos) ] -> X !rightmost(ball.pos)) ;
        // Assumption 2: Moving right ensures the ball is not at the leftmost wall next
        ([ ball.pos <- moveRight(ball.pos) ] -> X !leftmost(ball.pos)) ;
        // Assumption 3: The ball cannot be at both walls at the same time
        (!leftmost(ball.pos) || !rightmost(ball.pos)) ;
    }
    always guarantee {
        // Guarantee 4: If the ball is at the rightmost wall, it must eventually move left
        rightmost(ball.pos) -> F [ ball.pos <- moveLeft(ball.pos) ] ;
        // Guarantee 5: If the ball is at the leftmost wall, it must eventually move right
        leftmost(ball.pos) -> F [ ball.pos <- moveRight(ball.pos) ] ;
        // Guarantee 6: If the ball is neither at the leftmost nor at the rightmost wall,
        // it must eventually move either left or right
        (!leftmost(ball.pos) && !rightmost(ball.pos)) -> F ([ ball.pos <- moveLeft(ball.pos) ] || [ ball.pos <- moveRight(ball.pos) ]) ;
        // Guarantee 7: If the ball is moving away from the leftmost wall, it must not move left until it reaches the rightmost wall
        ([ ball.pos <- moveRight(ball.pos) ] && leftmost(ball.pos)) -> (! [ ball.pos <- moveLeft(ball.pos) ] W rightmost(ball.pos)) ;
        // Guarantee 8: If the ball is moving away from the rightmost wall, it must not move right until it reaches the leftmost wall
        ([ ball.pos <- moveLeft(ball.pos) ] && rightmost(ball.pos)) -> (! [ ball.pos <- moveRight(ball.pos) ] W leftmost(ball.pos)) ;
    }
    </code></pre>
  </td>

<td>
<pre style="height: 500px; width: 500px; max-height: 500px; max-width: 500px ; overflow-y: auto;">
<code>    
        &lt;style&gt;
            #debug {
                margin: 50px;
                font-size: 25px;
            }

            #ball {
                width: 100px;
                height: 100px;
                background-color: red;
                border-radius: 50%;
                position: absolute;
                bottom: 0;
                animation: bounce 2s infinite ease-in-out;
            }

            @keyframes bounce {

                0%,
                100% {
                    transform: translateY(0);
                }

                50% {
                    transform: translateY(-500px);
                }
            }
        &lt;/style&gt;

        &lt;div id=&quot;debug&quot;&gt;&lt;/div&gt;
        &lt;div id=&quot;ball&quot;&gt;&lt;/div&gt;

        &lt;script src=&quot;computed/Impl.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
        &lt;script src=&quot;computed/Synth.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;

        &lt;script&gt;

            (async () =&gt; {


                // Wrapper

                const X_STEP_DURATION = 200;

                class Ball {
                    constructor() {
                        this.pos = 0
                    }

                    render() {
                        const ball = document.getElementById('ball');
                        ball.style.transition = `left ${X_STEP_DURATION}ms linear`;
                        ball.style.left = `${this.pos / 10 * (screen.availWidth - 100)}px`;

                        const debug = document.querySelector('#debug');
                        debug.textContent = 'Current State: ' + currentState
                    }
                }

                window.currentState = 0

                const ball = new Ball()
                ball.render()

                // /*

                // Wait for 1s to sync the up-and-down animationw with bouncing, in order to make it look like the
                // ball is bouncing.

                // */
                // await new Promise(((resolve) =&gt; resolve()), 1000)

                setInterval(
                    (() =&gt; {

                        ball_pos = ball.pos;
                        ({ currentState, ball_pos }) = updateState({ currentState, ball_pos })
                        ball.pos = ball_pos
                        console.log('currentState', currentState, ball)
                        ball.render()

                    }),
                    X_STEP_DURATION
                )

            })()

        &lt;/script&gt;
</code>
</pre>
</td>
</tr>
</table>

### Game of Life

<table>
<tr>
  <!-- Column for the GIF -->
  <td>
    <img src="media/gol.gif" width="500" height="500" alt="Demo Animation">
  </td>
  <td>
    <pre style="height: 500px; width: 500px; max-height: 500px; max-width: 500px ; overflow-y: auto;"><code>    
always assume {
!(comeAlive(index) && comeDead(index));
}

always guarantee {
    comeAlive(index) -> [alive <- alive + 1];
    comeDead(index) -> [alive <- alive - 1];
}


</code></pre>
</td>

  <!-- Column for the first code block -->
  <td>
    <pre style="height: 500px; width: 500px; max-height: 500px; max-width: 500px ; overflow-y: auto;"><code>    
    &lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot; /&gt;
        &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
        &lt;title&gt;Game of Life Simulation&lt;/title&gt;
        &lt;style&gt;
            body,
            html {
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #f0f0f0;
            }

            #gameOfLifeGrid {
                display: grid;
                border: 2px solid #333;
            }

            .cell {
                width: 20px;
                /* You can adjust size here */
                height: 20px;
                background-color: #fff;
                border: 1px solid #666;
            }

            .alive {
                background-color: #000;
                /* Color for alive cells */
            }
        &lt;/style&gt;
    &lt;/head&gt;

    &lt;body&gt;
        &lt;div id=&quot;gameOfLifeGrid&quot;&gt;&lt;/div&gt;

        &lt;script&gt;
            function gameOfLife(N) {
                let grid = new Array(N).fill().map(() =&gt; new Array(N).fill(0))
                let nextGrid = new Array(N)
                    .fill()
                    .map(() =&gt; new Array(N).fill(0))
                let gridContainer = document.getElementById('gameOfLifeGrid')
                gridContainer.style.gridTemplateColumns = `repeat(${N}, 20px)` // Set the grid columns

                // Initialize the grid with random values and HTML elements
                for (let i = 0; i &lt; N; i++) {
                    for (let j = 0; j &lt; N; j++) {
                        grid[i][j] = Math.random() &gt; 0.5 ? 1 : 0
                        let cell = document.createElement('div')
                        cell.className =
                            'cell' + (grid[i][j] === 1 ? ' alive' : '')
                        gridContainer.appendChild(cell)
                    }
                }

                // Count live neighbors
                function countLiveNeighbors(x, y) {
                    let count = 0
                    for (let i = -1; i &lt;= 1; i++) {
                        for (let j = -1; j &lt;= 1; j++) {
                            if (i === 0 &amp;&amp; j === 0) continue
                            let nx = x + i
                            let ny = y + j
                            if (nx &gt;= 0 &amp;&amp; nx &lt; N &amp;&amp; ny &gt;= 0 &amp;&amp; ny &lt; N) {
                                count += grid[nx][ny]
                            }
                        }
                    }
                    return count
                }

                function simulateStep() {
                    let cells = document.getElementsByClassName('cell')
                    let index = 0
                    for (let i = 0; i &lt; N; i++) {
                        for (let j = 0; j &lt; N; j++) {
                            const currentState = grid[i][j]
                            let nextState = currentState
                            const neighbors = countLiveNeighbors(i, j)

                            if (currentState === 0 &amp;&amp; neighbors === 3) {
                                nextState = 1
                            } else if (
                                currentState === 1 &amp;&amp;
                                (neighbors &lt; 2 || neighbors &gt; 3)
                            ) {
                                nextState = 0
                            }

                            nextGrid[i][j] = nextState
                            cells[index].className =
                                'cell' + (nextState === 1 ? ' alive' : '')
                            index++
                        }
                    }

                    // Swap grids
                    ;[grid, nextGrid] = [nextGrid, grid]
                }

                return {
                    simulateStep,
                }
            }

            const gol = gameOfLife(10) // Example for a 10x10 grid
            setInterval(gol.simulateStep, 500) // Update every 500 ms
        &lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;
    </code></pre>
  </td>
</tr>
</table>



### Vending Machine
This state machine simulates a vending machine with a more complex set of states and conditions demonstrating the power of TSL as we are able to go from a short spec to a long implementation.
<table>
<tr>
  <!-- Column for the GIF -->
  <td>
    <img src="media/vending.gif" width="500" height="500" alt="Demo Animation">
  </td>
  <td>
    <pre style="height: 500px; width: 500px; max-height: 500px; max-width: 500px ; overflow-y: auto;"><code>    
always assume {
  // Handling button presses and ensuring only one button action occurs at a time
  (pressD(e) -> ! (pressQ(e) || pressO(e) || press1(e) || press2(e) || press3(e) || pressR(e))) ;
  (pressQ(e) -> ! (pressD(e) || pressO(e) || press1(e) || press2(e) || press3(e) || pressR(e))) ;
  (pressO(e) -> ! (pressD(e) || pressQ(e) || press1(e) || press2(e) || press3(e) || pressR(e))) ;
  (press1(e) -> ! (pressD(e) || pressQ(e) || pressO(e) || press2(e) || press3(e) || pressR(e))) ;
  (press2(e) -> ! (pressD(e) || pressQ(e) || pressO(e) || press1(e) || press3(e) || pressR(e))) ;
  (press3(e) -> ! (pressD(e) || pressQ(e) || pressO(e) || press1(e) || press2(e) || pressR(e))) ;
  (pressR(e) -> ! (pressD(e) || pressQ(e) || pressO(e) || press1(e) || press2(e) || press3(e))) ;

  // Check the conditions for allowing a purchase
  (press1(e) -> isLessThanPoint75(total)) ;
  (press2(e) -> isLessThanOne(total)) ;
  (press3(e) -> isLessThanOnePoint25(total)) ;
}

always guarantee {
  // Updating the total value based on button presses
  pressD(e) -> [ total <- total + 0.1 ] ;
  pressQ(e) -> [ total <- total + 0.25 ] ;
  pressO(e) -> [ total <- total + 1 ] ;

  // Handling product selection and refunds
  press1(e) && isLessThanPoint75(total) -> [ total <- total - 0.75 ] ;
  press2(e) && isLessThanOne(total) -> [ total <- total - 1 ] ;
  press3(e) && isLessThanOnePoint25(total) -> [ total <- total - 1.25 ] ;
  pressR(e) -> [ total <- 0 ] ;
}

</code></pre>
</td>

  <!-- Column for the first code block -->
<td>
<pre style="height: 500px; width: 500px; max-height: 500px; max-width: 500px ; overflow-y: auto;"><code>    
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Vending Machine Simulation&lt;/title&gt;
    &lt;style&gt;
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        .vending-machine {
            width: 300px;
            background: #333;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .display {
            background: #fff;
            padding: 5px;
            text-align: center;
            margin-bottom: 10px;
            border-radius: 5px;
            font-family: Arial, sans-serif;
            color: #333;
        }
        .product-slot {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }
        .product {
            background: #fff;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            font-family: Arial, sans-serif;
            cursor: pointer;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class=&quot;vending-machine&quot;&gt;
        &lt;div class=&quot;display&quot; id=&quot;balance-display&quot;&gt;Balance: $0.00&lt;/div&gt;
        &lt;div class=&quot;product-slot&quot;&gt;
            &lt;div class=&quot;product&quot; id=&quot;A1&quot; onclick=&quot;vendProduct('1')&quot;&gt;Product 1 ($0.75)&lt;/div&gt;
            &lt;div class=&quot;product&quot; id=&quot;A2&quot; onclick=&quot;vendProduct('2')&quot;&gt;Product 2 ($1)&lt;/div&gt;
            &lt;div class=&quot;product&quot; id=&quot;A3&quot; onclick=&quot;vendProduct('3')&quot;&gt;Product 3 ($1.25)&lt;/div&gt;
        &lt;/div&gt;
        &lt;button onclick=&quot;insertMoney('d')&quot;&gt;Insert Dime ($0.10)&lt;/button&gt;
        &lt;button onclick=&quot;insertMoney('q')&quot;&gt;Insert Quarter ($0.25)&lt;/button&gt;
        &lt;button onclick=&quot;insertMoney('o')&quot;&gt;Insert Dollar ($1.00)&lt;/button&gt;
        &lt;button onclick=&quot;refund()&quot;&gt;Refund&lt;/button&gt;
    &lt;/div&gt;
    &lt;script&gt;
        let total = 0.00;

        function updateDisplay() {
            document.getElementById('balance-display').innerText = 'Balance: $' + total.toFixed(2);
        }

        function insertMoney(type) {
            if (type === 'd') total += 0.10;
            else if (type === 'q') total += 0.25;
            else if (type === 'o') total += 1.00;
            updateDisplay();
        }

        function vendProduct(product) {
            if (product === '1' &amp;&amp; total &gt;= 0.75) {
                total -= 0.75;
                alert('Product 1 Dispensed');
            } else if (product === '2' &amp;&amp; total &gt;= 1.00) {
                total -= 1.00;
                alert('Product 2 Dispensed');
            } else if (product === '3' &amp;&amp; total &gt;= 1.25) {
                total -= 1.25;
                alert('Product 3 Dispensed');
            } else {
                alert('Insufficient funds for this product');
            }
            updateDisplay();
        }

        function refund() {
            alert('Refunding: $' + total.toFixed(2));
            total = 0;
            updateDisplay();
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
</td>
</tr>
</table>

### Snake Game
**The last death is due to the spec not allowing two keypresses at once** Due to user error we are unable to show the final state of the snake game...
<table>
<tr>
  <!-- Column for the GIF -->
  <td>
    <img src="media/snake.gif" width="500" height="500" alt="Demo Animation">
  </td>
  <td>
    <pre style="height: 500px; width: 500px; max-height: 500px; max-width: 500px ; overflow-y: auto;"><code>    
  always assume {
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
}

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

</code></pre>
</td>

  <!-- Column for the first code block -->
<td>
<pre style="height: 500px; width: 500px; max-height: 500px; max-width: 500px ; overflow-y: auto;"><code>    
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
</code></pre>
</td>
</tr>
</table>
## File Organization

**Root Directory:** The files in the root directory are used for the generation of any state machine. For each particular state machine, there is a folder with the model-specific files. The state machines created each serve as a benchmark.

-   _Impl_template.prompt_: The template to be filled in by _wrapper_template.html_ and _Headers.txt_ to create _Impl.prompt_.
-   _run.py_: Runs the program. Takes files from a benchmark folder which aren't in the _computed_ folder and creates the files of the _computed_ folder.
-   _shotPrompt.txt_: A text file which provides documentation for TSL and NL->TSL examples. This can help the model with ICL and improves NL to TSL translation.
-   _Spec_template.prompt_: The prompt template which is used as the query to the LLM in order to generate the TSL specification.

**Benchmark Folders:** The files within each folder (e.g. Ball, GameOfLife, etc.) are used to create that benchmark.

-   _NL.summary.txt_: The natural language, high-level summary of the benchmark.
-   _NL.txt_: The natural language description of the benchmark with a clear list of requirements (Assumptions & Guarantees).
-   _Headers.txt_: The function and predicate term header definitions.
-   _wrapper_template.html_: The template html file that the LLM will implement from the _Impl.js_ and _Synth.js_ files that it generates.
-   _computed_: This folder contains files generated by the LLM (this is where the benchmark part comes in).
    -   _Spec.tsl_: The TSL specification that the LLM generates.
    -   _Spec.prompt_: The prompt which is used to query the LLM for a TSL specification.
    -   _Impl.prompt_: The prompt which is used to query the LLM for a javascript implementation of the function and predicates.
    -   _Synth.js_: The javascript translation from the LLM generated TSL specification. This translation is performed by the [TSL API](https://barnard-pl-labs.github.io/tsl-api/).
    -   _<BENCHMARK_NAME>.html_: The LLM generated html implementation.

## Benchmark Walkthrough

1. _NL.txt_, _NL.summary.txt_, and _Headers.txt_ are handmade and used to fill in _Spec_template.prompt_ and create _Spec.prompt_, which is fed into the LLM.
2. The LLM outputs _Spec.tsl_, its formulation of TSL.
3. This TSL specification is passed into the [TSL API](https://barnard-pl-labs.github.io/tsl-api/) and a javascript translation is stored in _Synth.js_.
4. The handmade _Headers.txt_ and _wrapper_template.html_ are used to fill in _Impl_template.prompt_ and create _Impl.prompt_, which is fed into the LLM.
5. The LLM outputs _Impl.js_, its javascript implementation of the functions and predicates.
6. Finally, using _wrapper_template.html_, _Synth.js_, and _Impl.js_, the LLM fills in _<BENCHMARK_NAME>.html_ for the final benchmark implementation.

### TODO: How are _wrapper_template.html_ and _Headers.txt_ used in _Impl_template.prompt_ to create _Impl.prompt_?
