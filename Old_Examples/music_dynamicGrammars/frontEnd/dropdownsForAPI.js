var 
    currentState = 0,
    editorNum = 0,
    buttonPress = false,
    first = true,
    demoOn = false,
    sliderDiv = document.getElementById("sliderAmount"),
    slideAmount = sliderDiv.innerHTML,
    rev = document.getElementById('reverseToggle'),
    playButton = document.getElementById("play-button")
;

let
    noteToPlay = "",
    rhythm = "8n",
    effect = "",
    rand = 0,
    tempoSpeed = "Times4",
    dem1 = "https://graphviz-web-vvxsiayuzq-ue.a.run.app/tslsynth?tsl=always%20assume%20%7B%20%20%20%20!%20(greaterThan3(rand)%20%20%26%26%20lessThan3(rand))%20%7D%20%20always%20guarantee%20%7B%20%20%20%20%20F%20(greaterThan3(rand)%20-%3E%20%5BnoteToPlay%20%3C-%20E4%5D)%3B%20%20%20%20%20F%20(lessThan3(rand)%20-%3E%20%20%5BnoteToPlay%20%3C-%20G4%5D)%3B%20%7D&target=js",
    dem2 = "https://graphviz-web-vvxsiayuzq-ue.a.run.app/tslsynth?tsl=always%20assume%20%7B%20%20%20%20!%20(greaterThan3(rand)%20%20%26%26%20lessThan3(rand))%3B%20%7D%20%20always%20guarantee%20%7B%20%20%20%20%20F%20(lessThan3(rand)%20-%3E%20%5BnoteToPlay%20%3C-%20E4%5D%20%26%26%20%5Beffect%20%3C-%20Wah%5D)%3B%20%20%20%20%20F%20(greaterThan3(rand)%20-%3E%20%20%5BnoteToPlay%20%3C-%20G4%5D)%3B%20%7D&target=js",
    dem3 = "https://graphviz-web-vvxsiayuzq-ue.a.run.app/tslsynth?tsl=always%20assume%20%7B%20%20%20%20!%20(greaterThan3(rand)%20%20%26%26%20lessThan3(rand))%3B%20%7D%20%20always%20guarantee%20%7B%20%20%20%20%20F%20(greaterThan3(rand)%20-%3E%20%5BnoteToPlay%20%3C-%20G4%5D%20%26%26%20%5BtempoSpeed%20%3C-%20Times8%5D)%3B%20%20%20%20%20F%20(lessThan3(rand)%20-%3E%20%20%5BnoteToPlay%20%3C-%20G4%5D%20%26%26%20%5BtempoSpeed%20%3C-%20Times4%5D)%3B%20%7D&target=js",
    demSpec = ""
;

slideAmount = sliderDiv.innerHTML;
// slideAmount is the integer value of sliderDiv 
const toneRow = ["E4", "G4", "D4"] // might cause problems because i dont know if D4 can be played yet

document.getElementById("button-press").onmousedown = function() {
    this.style.backgroundColor = "lightgreen";
    pressed();
};
document.getElementById("button-press").onmouseup = function() {
    this.style.backgroundColor = "red";
    released();
};
 
const pressed = () => {buttonPress = true;};

const released = () => {buttonPress = false;};

/*
//transpose
function transpose(num) {
    var transposed = [];
    for (var i = 0; i < toneRow.length; i++) {
        transposed.push((toneRow[i] + num) % 3);
        
        //used to be % 12 (to accomodate for 12 tones) but we are testing a 3-tone row.
        //same applies for inversion()
    }
    return transposed;
}

//inversion
function inversion() {
    var inverted = [];
    for (var i = 0; i < toneRow.length; i++) {
        inverted.push((3 - toneRow[i]) % 3);
    }
    return inverted;
}

//retrograde
function retrograde() {
    return toneRow.reverse(); 
}
*/

const callSynth = id => {
    //reset updateStateMachine() after every synthesis
    let prevSynthesized = document.getElementById("synth_script");
    if(prevSynthesized) {
        prevSynthesized.remove();
    }
    reset();
    //switch between interfaces
    if (id == 0) {
        debugger;
    } else if (id==1){
        // text editor
        tslSpec = document.getElementById("specBox").value;
    } else {
        // structured editor
        tslSpec = delDel(extractContent(document.getElementById("assume").innerText,
            document.getElementById("guarantee").innerText));
    }
    tslSpec = encodeURIComponent(tslSpec.replace(/\n/g, " "));
    targetLang = document.getElementById("targetLang").value;
    fetch("https://graphviz-web-vvxsiayuzq-ue.a.run.app/tslsynth?tsl="+tslSpec+"&target="+targetLang)
        .then(response => {
            response.text().then(function(text) {
                document.getElementById("codeBox").value = text;
                //append generated script code to client side
                let script = document.createElement("script");
                let temp = "function updateStateMachine(){\n" + text + "}"
                let toneFX = ["G4", "E4", "Times2", "Times4", "Times8", "None", "Wah", "Reverb", "hihat", "snare", "eigthnote", "halfnote", "quarternote"];
                for (var i = 0; i < toneFX.length; i++) {
                    temp = temp.replaceAll(toneFX[i], "\""+toneFX[i]+"\"")
                }
                script.text = temp;
                script.setAttribute("id", "synth_script");
                document.body.appendChild(script);
                console.log(script);
            });
        })
        .catch(error => console.error(error));
};

let dem1Assume = "always assume {\n   !(greaterThan3(rand) && lessThan3(rand));\n}";
let dem1Guarantee = "always guarantee {\n   F(greaterThan3(rand) -> [noteToPlay <- E4]);\n   F(lessThan3(rand) -> [noteToPlay <- G4]);\n}";
let dem2Guarantee = "always guarantee {\n   F(lessThan3(rand) -> [noteToPlay <- E4] && [effect <- Wah]);\n   F(greaterThan3(rand) -> [noteToPlay <- G4]);\n}";
let dem3Guarantee = "always guarantee {\n   F(greaterThan3(rand) -> [noteToPlay <- G4] && [tempoSpeed <- Times8]);\n   F(lessThan3(rand) -> [noteToPlay <- G4] && [tempoSpeed <- Times4]);\n}";


// switch to the text editor
// update the text editor content when changed from structured editor to text editor
const toTE = () => {
    if(document.getElementById("targetSpec").value == "Demo1")
    {
        document.getElementById('specBox').innerHTML = delDel(extractContent(dem1Assume,
        dem1Guarantee));
    }
    else if (document.getElementById("targetSpec").value == "Demo2")
    {
        document.getElementById('specBox').innerHTML = delDel(extractContent(dem1Assume,
            dem2Guarantee));
    }
    else if (document.getElementById("targetSpec").value == "Demo3")
    {
        document.getElementById('specBox').innerHTML = delDel(extractContent(dem1Assume,
            dem3Guarantee));
    }
    else {
        document.getElementById('specBox').innerHTML = delDel(extractContent(document.getElementById("assume").innerText,
        document.getElementById("guarantee").innerText));
    }
    document.getElementsByClassName('SE')[0].
        style.display = 'none';
    document.getElementsByClassName('TE')[0].
        style.display = 'initial';
    // editorNum = 1 for text editor
    editorNum = 1;
};

function playAudio(newSound)
{
    console.log(newSound);
    const player = new Tone.Player("./vocal_cymantics/" + newSound + ".wav").toDestination();
    player.autostart = true;
}

// switch to the structured editor
const toSE = () => {
    document.getElementsByClassName('TE')[0].
        style.display = 'none';
    document.getElementsByClassName('SE')[0].
        style.display = 'initial';
    // editorNum = 0 for structure editor
    editorNum = 0;
};

const extractContent = (assumeBody, guaranteeBody) => {
    let htmlBody = assumeBody + '\n' + guaranteeBody;
    const logicText = document.createElement('span')
    logicText.innerHTML = htmlBody;
    return logicText.innerText;
};

const reset = () => {
    currentState = 0
    noteToPlay = ""
    effect = ""
    tempoSpeed = "Times4"
    rhythm = "8n"
    buttonPress = false
};


const 
    snare = new Tone.Player("./vocal_cymantics/" + "snare" + ".wav").toDestination(),
    hihat = new Tone.Player("./vocal_cymantics/" + "hihat" + ".wav").toDestination(),
    reverb = new Tone.JCReverb(0.3).toDestination(),
    delay = new Tone.FeedbackDelay(0+0.2).toDestination(),
    autoWah = new Tone.AutoWah(50, 6, -30).toDestination(),
    synthWah = new Tone.Synth().connect(autoWah),
    synth = new Tone.DuoSynth().chain(delay, reverb)
;

snare.loop = false;
hihat.loop = false;
samplePlayers = {"snare": snare, "hihat": hihat};
autoWah.Q.value = (1.1);


playButton.addEventListener("click", function() {
    if (first) {
        playButton.innerText = "Pause Music!"
        const synthA = new Tone.Synth().toDestination();
        sliderDiv = document.getElementById("sliderAmount");
        // loopSpeed is the last digit of "tempoSpeed" + "n"
        console.log("Tempo Speed: " + tempoSpeed);
        var loopSpeed = tempoSpeed.substring(tempoSpeed.length - 1) + "n";
        console.log(loopSpeed); 
        console.log("Loop speed original: " + loopSpeed);
        const loopA = new Tone.Loop(time => {
            rand = genRandom(Math.random(), 1, 5);
            sliderDiv = document.getElementById("sliderAmount");
            slideAmount = sliderDiv.innerHTML;
            console.log("Slide amount is: " + slideAmount);
            console.log("Random Generated is: " + rand);
            updateStateMachine();
            // loopSpeed is the last digit of "tempoSpeed" + "n"
            if (loopSpeed == tempoSpeed.substring(tempoSpeed.length - 1) + "n")
            {
                console.log("Note Played Success: " + noteToPlay);
                 if (noteToPlay == "E4" || noteToPlay == "G4") {
                    if (effect == "Reverb") {
                        synth.triggerAttackRelease(noteToPlay, rhythm);
                    }
                    else if (effect == "Wah") {
                        synthWah.triggerAttackRelease(noteToPlay, rhythm);
                    }
                    else{
                        synthA.triggerAttackRelease(noteToPlay, rhythm, time);
                    }
                }
                else {
                        samplePlayers[noteToPlay].start().stop("+16n");
                }
            }
            else{
                loopSpeed = tempoSpeed.substring(tempoSpeed.length - 1) + "n";
                loopA.interval = loopSpeed;
                loopA.start(0);
            }
           
        }, loopSpeed).start(0);
        first = false;
    }
    if (Tone.Transport.state !== 'started') {
        // the loop starts when the Transport is started
        Tone.Transport.start()
        playButton.innerText = "Pause Music!"
    }
    else {
        Tone.Transport.stop();
        playButton.innerText = "Play Music!"
        reset();
    }
});


function updateSlider(slideAmount) {
    sliderDiv.innerHTML = slideAmount;
}

const colorchange = () => {
    var currentClass = rev.getAttribute("class");
    if(currentClass == 'btnPRESSED')
    {
        rev.setAttribute("class", "btnOFF");
        rev.value = "Reverse On";
        console.log(rev.value);
        pressed();
    } else {
        rev.setAttribute("class", "btnPRESSED");
        rev.value = "Reverse Off";
        console.log(rev.value);
        released();
    }
};


function greaterThan3(input) {
    return input > 3;
}

function lessThan3(input) {
    return input < 3;
}

function sliderLessEQ4(slideAmount) {
    return slideAmount <= 4;
}

function sliderGreater4(slideAmount) {
    return slideAmount > 4;
}

function sliderLessEQ2(slideAmount) {
    return slideAmount <= 2;
}

function sliderGreater2(slideAmount) {
    return slideAmount > 2;
}

function sliderLessEQ6(slideAmount) {
    return slideAmount <= 6;
}

function sliderGreater6(slideAmount) {
    return slideAmount > 6;
}


function genRandom(random, min, max) {
    return random * (max - min) + min;
}

function loadSpec()
{
    toTE();
    demoOn = true;
    targetSpec = document.getElementById("targetSpec").value;
     //reset updateStateMachine() after every synthesis
     let prevSynthesized = document.getElementById("synth_script");
     if(prevSynthesized) {
         prevSynthesized.remove();
     }
     reset();
    if (targetSpec == "Demo1")
    {
    demSpec = dem1;
    }
    else if (targetSpec == "Demo2")
    {
        demSpec = dem2;
    }
    else
    {
        demSpec = dem3;
    }
     fetch(demSpec)
         .then(response => {
            response.text().then(function(text) {
                document.getElementById("codeBox").value = text;
                //append generated script code to client side
                let script = document.createElement("script");
                let temp = "function updateStateMachine(){\n" + text + "}"
                //gotta change this at some point!
                let toneFX = ["G4", "E4", "Times2", "Times4", "Times8", "None", "Wah", "Reverb", "hihat", "snare", "eigthnote", "halfnote", "quarternote"];
                for (var i = 0; i < toneFX.length; i++) {
                    temp = temp.replaceAll(toneFX[i], "\""+toneFX[i]+"\"")
                }
                script.text = temp;
                script.setAttribute("id", "synth_script");
                document.body.appendChild(script);
                console.log(script);
            });
         })
         .catch(error => console.error(error));
}







