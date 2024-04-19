// PREDICATE AND FUNCTION TERM IMPLEMENTATIONS

//------------------SNAKE MOVEMENTS------------------//

var e;
document.onkeydown = function (event) {
    e =  event || window.event; 
};

function pressL(e){
    if(e instanceof KeyboardEvent){
        return e.key == "ArrowLeft";
    }
}
function pressR(e){
    if(e instanceof KeyboardEvent){
        return e.key == "ArrowRight";
    }
}
function pressUp(e){
    if(e instanceof KeyboardEvent){
        return e.key == "ArrowUp";
    }
}
function pressDown(e){
    if(e instanceof KeyboardEvent){
        return e.key == "ArrowDown";
    }
}

//------------------SNAKE COLLISIONS------------------//

//snake collides with apple
function eatFood(){
    return (appleX==headX && appleY==headY)
 }

//snake collides with wall
function hitWall(){
    let gameOver = false
    if(headX<0){
        gameOver=true;
    }
    else if(headX===tileCount){
        gameOver=true;
    }
    else if(headY<0){
        gameOver=true;
    }
    else if(headY===tileCount){
        gameOver=true;
    }
    gameOverScreen(gameOver);
    return gameOver;
}

//snake collides with snake
function hitSelf(){
    let gameOver = false
    for(let i=0; i<snake.length;i++){
        let part=snake[i];
        if(part.x===headX && part.y===headY){
            gameOver=true;
            console.log("hit self")
            break;
        }
    }
    gameOverScreen(gameOver);
    return gameOver;
}

function gameOverScreen(gameOver){
    if(gameOver){
        ctx.fillStyle="white";
        ctx.font="45px Changa one";
        ctx.fillText("GAME OVER", canvas.clientWidth/6.5, canvas.clientHeight/2);
       }
}