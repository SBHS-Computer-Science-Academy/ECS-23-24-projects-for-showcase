let responses = 0;
let multiplayer = false;
let continueResponding = false;
let originalResp = "";

function getUserResponse() {
    return document.getElementById('userInput').value.toLowerCase();
}

function respond() {
    responses = responses + 1;
    originalResp = getUserResponse(); 

    let botResponse = "";

    if (responses === 1) {
        if (originalResp === "yes") {
            multiplayer = true;
            botResponse = "Do you like Fighting Games";
        } else {
            botResponse = "Do you like a game with Puzzles";
        }
    }

    if (responses === 2) {
        if (multiplayer) {
            if (originalResp === "yes") {
                botResponse = "I recommend you play <i>Back 4 Blood/Left 4 Dead</i>!";
            } else {
                botResponse = "I recommend you play <i>Phasmophobia</i>!";
            }
        } else {
            if (originalResp === "yes") {
                botResponse = "I recommend you play <i>Hello Neighbor</i>!";
            } else {
                continueResponding = true;
                botResponse = "Do you like games with Weapons";
            }
        }
    }

    if (responses === 3) {
        if (continueResponding) {
            if (originalResp === "yes") {
                botResponse = "I recommend you play <i>Resident Evil 1-8</i>!";
            } else {
                botResponse = "I recommend you play <i>Five Nights at Freddy's 1-4</i>!";
            }
        }
    }

    document.getElementById('convoDiv').innerHTML += `<p class="user">${originalResp}</p>`;
    document.getElementById('convoDiv').innerHTML += `<p class="bot">${botResponse}</p>`;

    return false;
}