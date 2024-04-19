//source code taken from https://github.com/Kamau-ke/How-to-buid-snake-game-with-javaScript/tree/main/snake%20game

const canvas=document.getElementById('game');
const ctx=canvas.getContext('2d');

//increase snake size 
class snakePart{
    constructor(x, y){
        this.x=x;
        this.y=y;
    }
}

let speed=7;
let tileCount=20; 
let tileSize=canvas.clientWidth/tileCount-2;

// array for snake parts
const snake=[];

// create game loop-to continously update screen
function drawGame(){
    randX = Math.floor(Math.random()*tileCount);
    randY = Math.floor(Math.random()*tileCount);

    //system to update snake position
    updateSnake();

    //system to check collisions after position has been updated
    updateCollision();
    if(command == "die"){
        return;
    }

    //drawing the game updates to canvas
    clearScreen();
    drawSnake();
    drawApple();
  
    drawScore();
    setTimeout(drawGame, 1000/speed);
}

// score function
function drawScore(){
    ctx.fillStyle="white"
    ctx.font="45px Changa one"
    ctx.fillText(score, canvas.clientWidth-50,50);
}

// clear our screen
function clearScreen(){
    ctx.fillStyle= 'black'// make screen black
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight)// black color start from 0px left, right to canvas width and canvas height
 }

 function drawSnake(){
    ctx.fillStyle="green";
    //loop through our snakeparts array
    for(let i=0;i<snake.length;i++){
        //draw snake parts
        let part=snake[i]
         ctx.fillRect(part.x *tileCount, part.y *tileCount, tileSize,tileSize)
    }
    //add parts to snake --through push
    snake.push(new snakePart(headX,headY));//put item at the end of list next to the head
    if(snake.length > tailLength){
        snake.shift();//remove furthest item from  snake part if we have more than our tail size
    }
    ctx.fillStyle="orange";
    ctx.fillRect(headX* tileCount,headY* tileCount, tileSize,tileSize)
 }
 function drawApple(){
     ctx.fillStyle="red";
     ctx.fillRect(appleX*tileCount, appleY*tileCount, tileSize, tileSize)
 }

function restart(){
    clearScreen();
    speed=7;
    snake.length = 0;

    currentState = 0;
    currentState1 = 0;
    command = "idle"

    headX=10;
    headY=10;
    tailLength=2;

    appleX=5;
    appleY=5;
    score=0;
    drawGame();
}
//  drawGame(); 
