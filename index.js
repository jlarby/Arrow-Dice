// Calculate Dice Number
let randomNum = () => Math.floor(Math.random()*6 + 1);
// Get Document By Id Short
let getDoc = document.getElementById.bind(document);
// Query Selector
let getQuery = document.querySelector.bind(document);

// Get Players
const players = prompt('How many players are playing? 2-4.')
if (+players === 2) {
    var p1Name = prompt(`What is Player 1's Name?`)
    var p2Name = prompt(`What is Player 2's Name?`)
    var p1RollsLeft = 3;
    var p2RollsLeft = 3;
    var p3RollsLeft = 3;
    var p4RollsLeft = 3;
} else if (+players === 3) {
    var p1Name = prompt(`What is Player 1's Name?`)
    var p2Name = prompt(`What is Player 2's Name?`)
    var p3Name = prompt(`What is Player 3's Name?`)
    var p1RollsLeft = 3;
    var p2RollsLeft = 3;
    var p3RollsLeft = 3;
} else if (+players === 4) {
    var p1Name = prompt(`What is Player 1's Name?`)
    var p2Name = prompt(`What is Player 2's Name?`)
    var p3Name = prompt(`What is Player 3's Name?`)
    var p4Name = prompt(`What is Player 4's Name?`)
    var p1RollsLeft = 3;
    var p2RollsLeft = 3;
    var p3RollsLeft = 3;
    var p4RollsLeft = 3;
} else {
    location.reload();
}

// Player 1 Rolling
let p1Total;
let p1Roll = (p1Roll1, p1Roll2, p1Roll3) => {
    if (p1RollsLeft === 0) {
        getQuery('.p1GoRoll').disabled = true;
        getDoc("p1GoBtn").classList.remove("green");
        getDoc("p1GoBtn").classList.add("disabled");
        getDoc("p1GoBtn").textContent = `No Rolls Left!`;
    } else {
        getDoc("p1Roll1").src = `./assets/Alea_${p1Roll1}.png`;
        getDoc("p1Roll1").classList.remove("diceSpin");
        getDoc("p1Roll2").src = `./assets/Alea_${p1Roll2}.png`;
        getDoc("p1Roll2").classList.remove("diceSpin");
        getDoc("p1Roll3").src = `./assets/Alea_${p1Roll3}.png`;
        getDoc("p1Roll3").classList.remove("diceSpin");
       p1RollsLeft --;
       getQuery('.p1RollsLeft').innerHTML = p1RollsLeft;
       p1Total = p1Roll1 + p1Roll2 + p1Roll3;
       getQuery('#p1Scoretxt').textContent = `Your score: ${p1Total}`;
    }
}
// Player 1 Stay
let p1Stay = () => {
    if (p1Total === undefined) {
        getDoc("p1Scoretxt").textContent = `You haven't rolled yet!`
    } else {
        getDoc("p1GoBtn").style.display = "none";
        getDoc("p1GoStay").style.display = "none";
        getDoc("p1Scoretxt").textContent = `You Stayed on ${p1Total}`
    }
}

// Player 2 Rolling
let p2Total;
let p2Roll = (p2Roll1, p2Roll2, p2Roll3) => {
    if (p2RollsLeft === 0) {
        getQuery('.p2GoRoll').disabled = true;
        getDoc("p2GoBtn").classList.remove("green");
        getDoc("p2GoBtn").classList.add("disabled");
        getDoc("p2GoBtn").textContent = `No Rolls Left!`;
    } else {
        getDoc("p2Roll1").src = `./assets/Alea_${p2Roll1}.png`;
        getDoc("p2Roll1").classList.remove("diceSpin");
        getDoc("p2Roll2").src = `./assets/Alea_${p2Roll2}.png`;
        getDoc("p2Roll2").classList.remove("diceSpin");
        getDoc("p2Roll3").src = `./assets/Alea_${p2Roll3}.png`;
        getDoc("p2Roll3").classList.remove("diceSpin");
       p2RollsLeft --;
       getQuery('.p2RollsLeft').innerHTML = p2RollsLeft;
       p2Total = p2Roll1 + p2Roll2 + p2Roll3;
       getQuery('#p2Scoretxt').textContent = `Your score: ${p2Total}`;
    }
}
// Player 2 Stay
let p2Stay = () => {
    if (p2Total === undefined) {
        getDoc("p2Scoretxt").textContent = `You haven't rolled yet!`
    } else {
        getDoc("p2GoBtn").style.display = "none";
        getDoc("p2GoStay").style.display = "none";
        getDoc("p2Scoretxt").textContent = `You Stayed on ${p2Total}`
    }
}

// Player 3 Rolling
let p3Total;
let p3Roll = (p3Roll1, p3Roll2, p3Roll3) => {
    if (p3RollsLeft === 0) {
        getQuery('.p3GoRoll').disabled = true;
        getDoc("p3GoBtn").classList.remove("green");
        getDoc("p3GoBtn").classList.add("disabled");
        getDoc("p3GoBtn").textContent = `No Rolls Left!`;
    } else {
        getDoc("p3Roll1").src = `./assets/Alea_${p3Roll1}.png`;
        getDoc("p3Roll1").classList.remove("diceSpin");
        getDoc("p3Roll2").src = `./assets/Alea_${p3Roll2}.png`;
        getDoc("p3Roll2").classList.remove("diceSpin");
        getDoc("p3Roll3").src = `./assets/Alea_${p3Roll3}.png`;
        getDoc("p3Roll3").classList.remove("diceSpin");
       p3RollsLeft --;
       getQuery('.p3RollsLeft').innerHTML = p3RollsLeft;
       p3Total = p3Roll1 + p3Roll2 + p3Roll3;
       getQuery('#p3Scoretxt').textContent = `Your score: ${p3Total}`;
    }
}
// Player 3 Stay
let p3Stay = () => {
    if (p3Total === undefined) {
        getDoc("p3Scoretxt").textContent = `You haven't rolled yet!`
    } else {
        getDoc("p3GoBtn").style.display = "none";
        getDoc("p3GoStay").style.display = "none";
        getDoc("p3Scoretxt").textContent = `You Stayed on ${p3Total}`
    }
}

// Player 4 Rolling
let p4Total;
let p4Roll = (p4Roll1, p4Roll2, p4Roll3) => {
    if (p4RollsLeft === 0) {
        getQuery('.p4GoRoll').disabled = true;
        getDoc("p4GoBtn").classList.remove("green");
        getDoc("p4GoBtn").classList.add("disabled");
        getDoc("p4GoBtn").textContent = `No Rolls Left!`;
    } else {
        getDoc("p4Roll1").src = `./assets/Alea_${p4Roll1}.png`;
        getDoc("p4Roll1").classList.remove("diceSpin");
        getDoc("p4Roll2").src = `./assets/Alea_${p4Roll2}.png`;
        getDoc("p4Roll2").classList.remove("diceSpin");
        getDoc("p4Roll3").src = `./assets/Alea_${p4Roll3}.png`;
        getDoc("p4Roll3").classList.remove("diceSpin");
       p4RollsLeft --;
       getQuery('.p4RollsLeft').innerHTML = p4RollsLeft;
       p4Total = p4Roll1 + p4Roll2 + p4Roll3;
       getQuery('#p4Scoretxt').textContent = `Your score: ${p4Total}`;
    }
}
// Player 4 Stay
let p4Stay = () => {
    if (p4Total === undefined) {
        getDoc("p4Scoretxt").textContent = `You haven't rolled yet!`
    } else {
        getDoc("p4GoBtn").style.display = "none";
        getDoc("p4GoStay").style.display = "none";
        getDoc("p4Scoretxt").textContent = `You Stayed on ${p4Total}`
    }
}

// Find Winner
let findWinner = () => {
    if (p1Total === undefined) {
        getDoc("winner").textContent = `Please Roll all Players!`
    } else {
        if (+players === 2) {
            if (p1Total > p2Total) {
                getDoc("winner").textContent = `${p1Name} is the winner!`
            } else if (p2Total > p1Total) {
                getDoc("winner").textContent = `${p2Name} is the winner!`
            } else {
                getDoc("winner").textContent = `Its a draw!`
            }
        } else if (+players === 3) {
            if (p1Total > p2Total && p1Total > p3Total) {
                getDoc("winner").textContent = `${p1Name} is the winner!`
            } else if (p2Total > p1Total && p2Total > p3Total) {
                getDoc("winner").textContent = `${p2Name} is the winner!`
            } else if (p3Total > p2Total && p3Total > p2Total) {
                getDoc("winner").textContent = `${p3Name} is the winner!`
            } else {
                getDoc("winner").textContent = `Its a draw!`
            }
        } else if (+players === 4) {
            if (p1Total > p2Total && p1Total > p3Total) {
                getDoc("winner").textContent = `${p1Name} is the winner!`
            } else if (p2Total > p1Total && p2Total > p3Total) {
                getDoc("winner").textContent = `${p2Name} is the winner!`
            } else if (p3Total > p2Total && p3Total > p2Total) {
                getDoc("winner").textContent = `${p3Name} is the winner!`
            } else if (p4Total > p1Total && p4Total > p2Total && p4Total > p3Total) {
                getDoc("winner").textContent = `${p4Name} is the winner!`
            } else {
                getDoc("winner").textContent = `Its a draw!`
            
        }
    }
}
}