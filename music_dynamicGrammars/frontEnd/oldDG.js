var currentState = 0
let noteToPlay = ""
let rhythm = "8n"
var buttonPress = false

function callSynth(id) {
    //reset updateStateMachine() after every synthesis
    let prevSynthesized = document.getElementById("synth_script");
    if(prevSynthesized) {
        prevSynthesized.remove();
    }
    reset();
    //switch between interfaces
    if (id==0){
        // structured editor
        tslSpec = delDel(extractContent(document.getElementById("assume").innerText,
            document.getElementById("guarantee").innerText));
    }
    else if (id==1){
        // text editor
        tslSpec = document.getElementById("specBox").value;
    }
    tslSpec = encodeURIComponent(tslSpec.replace(/\n/g, " "));
    targetLang = document.getElementById("targetLang").value;
    fetch("https://graphviz-web-vvxsiayuzq-ue.a.run.app/tslsynth?tsl="+tslSpec+"&target="+targetLang)
        .then(response => {
            response.text().then(function(text) {
                document.getElementById("codeBox").value = text;
                if(text == "Internal Server Error") {
                    console.log("error")
                }
                else {
                    //append generated script code to client side
                    let script = document.createElement("script");
                    let temp = "function updateStateMachine(){\n" + text + "}"
                    //gotta change this at some point!
                    temp = temp.replaceAll("G4", "\"G4\"")
                    temp = temp.replaceAll("E4", "\"E4\"")
                    temp = temp.replaceAll("eigthnote", "\"8n\"")
                    temp = temp.replaceAll("halfnote", "\"2n\"")
                    script.text = temp;
                    script.setAttribute("id", "synth_script");
                    document.body.appendChild(script);
                }
            });
        })
        .catch(error => console.error(error));
}

function toTE() {
    document.getElementById('specBox').innerHTML = delDel(extractContent(document.getElementById("assume").innerText,
        document.getElementById("guarantee").innerText));
    document.getElementsByClassName('SE')[0].
        style.display = 'none';
    document.getElementsByClassName('TE')[0].
        style.display = 'initial';
    editorNum = 1;
}

function toSE() {
    document.getElementsByClassName('TE')[0].
        style.display = 'none';
    document.getElementsByClassName('SE')[0].
        style.display = 'initial';
    editorNum = 0;
}

function extractContent (assumeBody, guaranteeBody) {
    let htmlBody = assumeBody + '\n' + guaranteeBody;
    const logicText = document.createElement('span')
    logicText.innerHTML = htmlBody;
    return logicText.innerText;
}

function reset() {
    currentState = 0
    noteToPlay = ""
    rhythm = "8n"
    buttonPress = false
}

// Button toggles false if user clicks on it again
const pressed = () => {buttonPress = true;};
const released = () => {buttonPress = false;};

//template
var first = true;
let playButton = document.getElementById("play-button")

playButton.addEventListener("click", function() {
    if (first) {
        playButton.innerText = "Pause Music!"
        const synthA = new Tone.Synth().toDestination();
        //play a note every quarter-note
        const loopA = new Tone.Loop(time => {
            updateStateMachine();
            console.log(time);
            if (noteToPlay === "") {
                console.log("no note")
            }
            else {
                synthA.triggerAttackRelease(noteToPlay, rhythm, time);
            }
        }, "4n").start(0);
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






