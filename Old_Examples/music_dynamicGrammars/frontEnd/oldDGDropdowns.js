let ruleMap = ""
async function loadGrammar() {
    let grammarDef = await fetch(grammarFile) //grammarFile defined in .html
        .then(response => {return response.text();});

    let rules = grammarDef.trim().split("\n")

    rules = rules.reduce((rs, r) => {

        if (r.startsWith(" ")) { //any newlines need to be indented
            addedToRule = rs[rs.length - 1] + r
            return [...(rs.slice(0, -1)), addedToRule]
        }
        else {
            return [...rs, r]
        }
    }, []);

    ruleMap = new Map();
    rules.forEach(r => {
        let rule = r.split(" -> ");
        let left = rule[0]
        let right = rule[1].split(" | ").map(v => v.trim())
        ruleMap.set(left, right)
    });
}
loadGrammar();

function removeSelector(num,obj) {
    if (num == 1) {
        document.getElementById('assumeSelector').removeChild(obj.parentNode);
    }
    if (num == 0) {
        document.getElementById('guaranteeSelector').removeChild(obj.parentNode);
    }
}

//function creates a selector element by appending it to
//existing selector div and adding it to the selector class
//separate selectors depending on if it resides in

//always assume or always guarantee (could simplify this)
var numRows = 0;
function createSelector (num) {
    let semi = document.createElement('semi');
    semi.innerHTML = ";"

    //add remove button after each line
    let removeButton = document.createElement("removeButton");
    removeButton.innerHTML = "<button class=\"remove\" id=\"removeButton\">-</button>";

    var selector = document.createElement("div");
    selector.setAttribute("class", "selector");
    selector.appendChild(genDropdown(Array.from(ruleMap.keys())[0]));
    selector.appendChild(semi);
    selector.appendChild(removeButton);

    if (num == 1) {
        document.getElementById("assumeSelector").appendChild(selector);
        removeButton.setAttribute('onclick', 'removeSelector(1,this)');
    }
    else if (num == 0) {
        document.getElementById("guaranteeSelector").appendChild(selector);
        removeButton.setAttribute('onclick', 'removeSelector(0,this)');
    }

}

function genDropdown(k) {
    let select = document.createElement('select');
    select.ariaLabel="tsl dropdown";
    select.onchange = onchangeListener;
    ruleMap.get(k).forEach(elem => {
        let option = document.createElement('option');
        option.text = option.value = elem;
        select.add(option, 0);
    })
    select.selectedIndex = -1;
    return select;
}

//uses event.target.parentNode to access the selector that the listener
//is being called on, instead of a specific id
function onchangeListener(event) {
    //if rule if a simple non terminal
    if (ruleMap.has(this.value)) {
        event.target.parentNode.insertBefore(genDropdown(this.value), this);
    }
    //if rule combines non terminals
    else if (Array.from(ruleMap.keys()).map(l => (this.value).includes(l))) {
        //generate dropdowns for all nonterminals, and insert text as needed
        //expects rule components to be space seperated
        let newDropdowns = this.value.split(" ").map(e => {
            let replacementVal = document.createElement('span');
            //more hacky overloading solution
            if (this.value === "E4" || this.value === "G4" || this.value === "eigthnote"
                || this.value === "halfnote") {
                replacementVal.innerHTML = " " + this.value + " ";
            }
            //deal with spacing here
            else {
                replacementVal.innerHTML = " " + e.slice(1, -1) + " ";
                Array.from(ruleMap.keys()).forEach(g => {
                    if (g == e) {
                        replacementVal = genDropdown(g);
                    }
                })
            }
            return replacementVal;
        })

        if (newDropdowns.length > 1) {
            newDropdowns = addParens(newDropdowns);
        }

        if (newDropdowns[0].innerText === " noteToPlay "){
            changeDropdown("note")
        }
        else if(newDropdowns[0].innerText === " rhythm ") {
            changeDropdown("rhythm")
        }

        newDropdowns.forEach(elem => {
            event.target.parentNode.insertBefore(elem, this);
        });

    }
    this.remove();
}

//super hacky way to solve function overloading problem
function changeDropdown(fxn) {
    let nextDrop = event.target.nextSibling.nextSibling
    if (fxn === "note") {
        nextDrop[0].value = nextDrop[0].text = "E4";
        nextDrop[1].value = nextDrop[1].text = "G4";
    }
    else{
        nextDrop[0].value = nextDrop[0].text = "eigthnote";
        nextDrop[1].value = nextDrop[1].text = "halfnote";
    }
}

function addParens(ds) {
    const openParen = document.createElement('span');
    openParen.innerHTML = "(";
    const closeParen = document.createElement('span');
    closeParen.innerHTML = ")";
    return [openParen, ...ds, closeParen];
}

//extract button and function, right now can only console.log logic
//should probably make a condition where you can only extract if there are no empty dropdowns
function download(text, name, type) {
    var a = document.getElementById("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
}

function extractContents (assumeBody, guaranteeBody) {
    document.getElementById("a").style.visibility = "visible";
    let htmlBody = assumeBody + '\n' + guaranteeBody;
    const logicText = document.createElement('span')
    logicText.innerHTML = htmlBody;
    return logicText.innerText;
}

//delete -
function delDel(text){
    text = text.replaceAll(";-", ";");
    return text;
}

//Create buttons for adding and removing new lines, calls
//create selector/remove selector function when button is clicked
let addButton1 = document.getElementById("addButton1");
addButton1.innerHTML = "+";
addButton1.onclick = function() {
    createSelector(1);
}

let addButton2 = document.getElementById("addButton2");
addButton2.innerHTML = "+";
addButton2.onclick = function() {
    createSelector(0);
}
