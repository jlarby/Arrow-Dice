// Get Game Window
const gameWindow = document.querySelector('.game');
if (+players === 2) {
    gameWindow.innerHTML = `
            <div class="card">
                <div class="card-title"><p class="playerName">${p1Name}</p></div>
                <div class="card-body">
                    <p>Roll 1: <span><img id="p1Roll1" class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
                    <p>Roll 2: <span><img id="p1Roll2"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
                    <p>Roll 3: <span><img id="p1Roll3"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
                    <p class="rollsleft text-sm">You have <span class="p1RollsLeft text-bold">${p1RollsLeft}</span>/3 Rolls Left.</p>
                </div>
                <div class="card-footer">
                    <button id="p1GoBtn" class="p1GoRoll btn green" onclick="p1Roll(randomNum(), randomNum(), randomNum());">Roll Dice</button>
                    <button id="p1GoStay" class="p1GoStay btn btn-sm red" onclick="p1Stay();">Stay</button>
                </div>
                <hr>
                <div class="scores">
                    <p id="p1Scoretxt" class="score-text">Your Score: <span class="p1Score score">0</span></p>
                </div>    
            </div>

            <div class="card">
            <div class="card-title"><p class="playerName">${p2Name}</p></div>
            <div class="card-body">
                <p>Roll 1: <span><img id="p2Roll1" class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
                <p>Roll 2: <span><img id="p2Roll2"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
                <p>Roll 3: <span><img id="p2Roll3"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
                <p class="rollsleft text-sm">You have <span class="p2RollsLeft text-bold">${p2RollsLeft}</span>/3 Rolls Left.</p>
            </div>
            <div class="card-footer">
                <button id="p2GoBtn" class="p2GoRoll btn green" onclick="p2Roll(randomNum(), randomNum(), randomNum());">Roll Dice</button>
                <button id="p2GoStay" class="p2GoStay btn btn-sm red" onclick="p2Stay();">Stay</button>
            </div>
            <hr>
            <div class="scores">
                <p id="p2Scoretxt" class="score-text">Your Score: <span class="p2Score score">0</span></p>
            </div>    
        </div>
    `;
} else if (+players === 3) {
    gameWindow.innerHTML = `
            <div class="card">
            <div class="card-title"><p class="playerName">${p1Name}</p></div>
            <div class="card-body">
                <p>Roll 1: <span><img id="p1Roll1" class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
                <p>Roll 2: <span><img id="p1Roll2"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
                <p>Roll 3: <span><img id="p1Roll3"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
                <p class="rollsleft text-sm">You have <span class="p1RollsLeft text-bold">${p1RollsLeft}</span>/3 Rolls Left.</p>
            </div>
            <div class="card-footer">
                <button id="p1GoBtn" class="p1GoRoll btn green" onclick="p1Roll(randomNum(), randomNum(), randomNum());">Roll Dice</button>
                <button id="p1GoStay" class="p1GoStay btn btn-sm red" onclick="p1Stay();">Stay</button>
            </div>
            <hr>
            <div class="scores">
                <p id="p1Scoretxt" class="score-text">Your Score: <span class="p1Score score">0</span></p>
            </div>    
        </div>

        <div class="card">
        <div class="card-title"><p class="playerName">${p2Name}</p></div>
        <div class="card-body">
            <p>Roll 1: <span><img id="p2Roll1" class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p>Roll 2: <span><img id="p2Roll2"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p>Roll 3: <span><img id="p2Roll3"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p class="rollsleft text-sm">You have <span class="p2RollsLeft text-bold">${p2RollsLeft}</span>/3 Rolls Left.</p>
        </div>
        <div class="card-footer">
            <button id="p2GoBtn" class="p2GoRoll btn green" onclick="p2Roll(randomNum(), randomNum(), randomNum());">Roll Dice</button>
            <button id="p2GoStay" class="p2GoStay btn btn-sm red" onclick="p2Stay();">Stay</button>
        </div>
        <hr>
        <div class="scores">
            <p id="p2Scoretxt" class="score-text">Your Score: <span class="p2Score score">0</span></p>
        </div>    
        </div>

        <div class="card">
        <div class="card-title"><p class="playerName">${p3Name}</p></div>
        <div class="card-body">
            <p>Roll 1: <span><img id="p3Roll1" class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p>Roll 2: <span><img id="p3Roll2"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p>Roll 3: <span><img id="p3Roll3"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p class="rollsleft text-sm">You have <span class="p3RollsLeft text-bold">${p3RollsLeft}</span>/3 Rolls Left.</p>
        </div>
        <div class="card-footer">
            <button id="p3GoBtn" class="p3GoRoll btn green" onclick="p3Roll(randomNum(), randomNum(), randomNum());">Roll Dice</button>
            <button id="p3GoStay" class="p3GoStay btn btn-sm red" onclick="p3Stay();">Stay</button>
        </div>
        <hr>
        <div class="scores">
            <p id="p3Scoretxt" class="score-text">Your Score: <span class="p3Score score">0</span></p>
        </div>    
        </div>
    `
} else if (+players === 4) {
    gameWindow.innerHTML = `
            <div class="card">
            <div class="card-title"><p class="playerName">${p1Name}</p></div>
            <div class="card-body">
                <p>Roll 1: <span><img id="p1Roll1" class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
                <p>Roll 2: <span><img id="p1Roll2"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
                <p>Roll 3: <span><img id="p1Roll3"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
                <p class="rollsleft text-sm">You have <span class="p1RollsLeft text-bold">${p1RollsLeft}</span>/3 Rolls Left.</p>
            </div>
            <div class="card-footer">
                <button id="p1GoBtn" class="p1GoRoll btn green" onclick="p1Roll(randomNum(), randomNum(), randomNum());">Roll Dice</button>
                <button id="p1GoStay" class="p1GoStay btn btn-sm red" onclick="p1Stay();">Stay</button>
            </div>
            <hr>
            <div class="scores">
                <p id="p1Scoretxt" class="score-text">Your Score: <span class="p1Score score">0</span></p>
            </div>    
        </div>

        <div class="card">
        <div class="card-title"><p class="playerName">${p2Name}</p></div>
        <div class="card-body">
            <p>Roll 1: <span><img id="p2Roll1" class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p>Roll 2: <span><img id="p2Roll2"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p>Roll 3: <span><img id="p2Roll3"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p class="rollsleft text-sm">You have <span class="p2RollsLeft text-bold">${p2RollsLeft}</span>/3 Rolls Left.</p>
        </div>
        <div class="card-footer">
            <button id="p2GoBtn" class="p2GoRoll btn green" onclick="p2Roll(randomNum(), randomNum(), randomNum());">Roll Dice</button>
            <button id="p2GoStay" class="p2GoStay btn btn-sm red" onclick="p2Stay();">Stay</button>
        </div>
        <hr>
        <div class="scores">
            <p id="p2Scoretxt" class="score-text">Your Score: <span class="p2Score score">0</span></p>
        </div>    
        </div>

        <div class="card">
        <div class="card-title"><p class="playerName">${p3Name}</p></div>
        <div class="card-body">
            <p>Roll 1: <span><img id="p3Roll1" class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p>Roll 2: <span><img id="p3Roll2"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p>Roll 3: <span><img id="p3Roll3"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p class="rollsleft text-sm">You have <span class="p3RollsLeft text-bold">${p3RollsLeft}</span>/3 Rolls Left.</p>
        </div>
        <div class="card-footer">
            <button id="p3GoBtn" class="p3GoRoll btn green" onclick="p3Roll(randomNum(), randomNum(), randomNum());">Roll Dice</button>
            <button id="p3GoStay" class="p3GoStay btn btn-sm red" onclick="p3Stay();">Stay</button>
        </div>
        <hr>
        <div class="scores">
            <p id="p3Scoretxt" class="score-text">Your Score: <span class="p3Score score">0</span></p>
        </div>    
        </div>

        <div class="card">
        <div class="card-title"><p class="playerName">${p4Name}</p></div>
        <div class="card-body">
            <p>Roll 1: <span><img id="p4Roll1" class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p>Roll 2: <span><img id="p4Roll2"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p>Roll 3: <span><img id="p4Roll3"  class="diceSpin" src="./assets/Alea_6_Spin.png" alt="Spinning Dice"></span></p>
            <p class="rollsleft text-sm">You have <span class="p4RollsLeft text-bold">${p4RollsLeft}</span>/3 Rolls Left.</p>
        </div>
        <div class="card-footer">
            <button id="p4GoBtn" class="p4GoRoll btn green" onclick="p4Roll(randomNum(), randomNum(), randomNum());">Roll Dice</button>
            <button id="p4GoStay" class="p4GoStay btn btn-sm red" onclick="p4Stay();">Stay</button>
        </div>
        <hr>
        <div class="scores">
            <p id="p4Scoretxt" class="score-text">Your Score: <span class="p4Score score">0</span></p>
        </div>    
        </div>
`
} else {
    location.reload();
}
