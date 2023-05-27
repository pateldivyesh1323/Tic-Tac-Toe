console.log("Hello I am Tic Tac Toe - AI");

// Getting scores of Players
let score1 = document.getElementById("player1-score").innerText;
let score2 = document.getElementById("player2-score").innerText;
let gameOver = false;

// Function to change the Turn 

let turn = "O";

// Changing Turns

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// Function to check Win 
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')) {
            if (boxtext[e[0]].innerText === 'O') {
                score1++;
                document.getElementById("player1-score").innerText = score1;
                gameOver = true;
            }
            else if (boxtext[e[0]].innerText === 'X') {
                score2++;
                document.getElementById("player2-score").innerText = score2;
                gameOver = true;
            }
            setTimeout(reset, 200);
        }
        if (boxtext[0].innerText !== '' && boxtext[1].innerText !== '' && boxtext[2].innerText !== '' && boxtext[3].innerText !== '' && boxtext[4].innerText !== '' && boxtext[5].innerText !== '' && boxtext[6].innerText !== '' && boxtext[7].innerText !== '' && boxtext[8].innerText !== '') {
            setTimeout(reset, 200);
        }
    })
}

// Resetting the matrix

const reset = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    Array.from(boxtext).forEach((element) => {
        element.classList.remove("pop");
        element.innerText = '';
    })
}

// Reseting the score and matrix on clicking reset Button
let hardReset = document.getElementById("reset");
hardReset.addEventListener('click', () => {
    reset();
    score1 = 0;
    document.getElementById("player1-score").innerText = score1;
    score2 = 0;
    document.getElementById("player2-score").innerText = score2;
})

// Checking and Displaying the Player's Turn 

const checkTurn = () => {
    if (turn === "O") {
        return "Turn: Player 1";
    }
    else {
        return "Turn: Computer";
    }
}

// let infoturn = checkTurn(turn);
// document.getElementsByClassName("infoturn")[0].innerText = infoturn;

// Main Game Logic
startGame();
function startGame()
{
    if (turn === "O") {
        turn = changeTurn();
        if(!gameOver)
        {
            turn.onChange(startGame());
        }
    }
    else if (turn === "X") {
        turn = changeTurn();
        gotiya();
        if(!gameOver)
        {
            turn.onChange(startGame());
        }
    }
}


function gotiya(){
    gameOver = true;
}

