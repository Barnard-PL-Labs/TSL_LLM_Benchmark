from openai import OpenAI

client = OpenAI()

PRE_PROMPT = """This GPT creates TSL templates from natural language descriptions.

TSL bases of LTL (or Linear Temporal Logic). 

Temporal logic is all about using logical expressions to describes the truth values of things over time, and each expression can be evaluated as either true or false. There are the constants:

- `true`
- `false`

With those constants, we can add what’s called the logical connectives to express more complex situations:

- `&&`: logical and
- `||`: local or
- `not`: negation
- `->` implication

### Next
“X” denotes the immediate next state 
X (isHoliday); //expressed in TSL

### Globally
“G” denotes all states are true all the time
G (isHoliday);

### FINALLY 
“F” denotes that a state will eventually exist sometime in the future, but when will is happen is not determined.
F (isHoliday);

### Until
“U” denotes that A stays true up to the point when B turns true, and B is guaranteed to turn true at some point.
isHoliday U isMonday;

### Weak Until
“W” is almost equivalent to “U” except that B is not required to turn true. That is A can be true in all the states.
isHoliday W asteroidHit;

### Implies
“→” means whenever A is true, B is true. However, there are more nuances to just A being true implies that B is true:
- A’s truth value contains B’s truth value, but not vice versa.
- When A is false, B can do whatever.
wakeUpLate -> isHoliday;

### If and only if
“<->” means A and B turns true together! One side will only be true when another one is true as well.
- A’s and B’s truth value contains each other.

### Not
“!” denotes negation, which is not unique to TSL or temporal logic. However, where “!” is put matters: look out which part is actually negated.
//It is NOT the case that 
//the next day you will have a holiday.     
!(X (isHoliday));
//The next day you will NOT have a holiday.
(X !(isHoliday));
//NOT everyday is a holiday.
! (G isHoliday);
//Everyday is NOT a holiday./NO day is a holiday.
G !(isHoliday);
//an equivalent expression:
! F(isHoliday);

### F (G isHoliday) //Some day you will have holidays forever.
### G (F isHoliday) // You have holidays from time to time
### isStudent U (G graduated) // You are a student until the day you graduate
### G (inCollege -> (careless U isSenior)) // when you are in college you are careless until you become a senior
### G (isMonday -> X isTuesday) // when it is monday, the next day is always tuesday


# Here are some TSL examples

## Basic setup
always assume {

//describes inputs from the environment

}

always guarantee {

//describes how the agent react to those inputs

}

## A rotating cube
always assume{
}

always guarantee{
//rotate the cube with the value of t (increments by 1 every frame)
    [cube.rotation.y <- t];
}

## A cube on the left side that teleports to the right side when a button is pressed
always assume{
//Define the exclusive relationship between pressing the right button and the left button
    !(pressR(e) && pressL(e));
}
always guarantee{
//When right is pressed, set y position as 2 this until left is pressed
		pressR(e) -> [cube.position.y <- 2] W pressL(e);
//When left is pressed, set y position as a sin(t) value until right is pressed, where t=0 increments over time
		pressL(e) -> [cube.position.y <- sin(t)] W pressR(e);
}

# More examples

```
always assume {
  (room.somebodyEnters
    -> (! room.empty W room.somebodyLeaves)) ;
  ((room.somebodyLeaves && room.empty)
    -> (room.empty W room.somebodyEnters)) ;
  (cm.ready || cm.standby || cm.busy) ;
  (cm.ready -> (!cm.standby && !cm.busy)) ;
  (cm.standby -> (!cm.busy && !cm.ready)) ;
  (cm.busy -> (!cm.ready && !cm.standby)) ;
  ([ cm.ctrl <- turnOn() ] && cm.standby
    -> X cm.busy U ([ cm.ctrl <- makeCoffee() ] || [ cm.ctrl <- turnOff() ] R cm.ready)) ;
  ([ cm.ctrl <- turnOff() ] && cm.ready
    -> X cm.busy U ([ cm.ctrl <- turnOn() ] R cm.standby)) ;
  ([ cm.ctrl <- makeCoffee() ] && cm.ready
    -> X cm.busy U (cm.finished && ([ cm.ctrl <- makeCoffee() ] || [ cm.ctrl <- turnOff() ] R cm.ready)));
 }
always guarantee {
  room.somebodyEnters
    -> F (cm.ready W (room.somebodyLeaves && room.empty));
}
```

```
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
```

```
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
```

"""

# TODO Add three prompts. One for no html template, one for rudimentary, one for skeleton
NO_CODE_GEN = """Using this description of a program, write a single html file that runs this in the script section"""
NO_TEMPLATE_REGEN = """Using this code as insipiration generate a single html file that runs the js code
{}"""
SKELETON_REGEN = """Using this synthesized code and the following html template as an example complete the html. The html should run the functionality defined by the code, feel free to add any functionality you deem necessary.
This is a nl prompt that describes the code and is what you should implement: 
{}

This is the html:
{}

This is the synthesized code:
{}"""

BASE_HTML = """
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Game of Life Simulation</title>
    <style>

    </style>
</head>

<body>
    <div id="gameOfLifeGrid"></div>
    <script>
    </script>
    <script src="computed/Synth.js" type="text/javascript"></script>
</body>

</html>"""

MODELS = ["gpt-4o", "gpt-4o-mini", "gpt-4-turbo", "gpt-4", "gpt-3.5-turbo"]


def ask_chatgpt(prompt, model="gpt-4-turbo"):
    response = client.chat.completions.create(
        model = model,
        messages=[
            {"role": "system", "content": PRE_PROMPT},
            {"role": "user", "content": prompt},
        ],
        temperature=0.8,
    )

    return response
