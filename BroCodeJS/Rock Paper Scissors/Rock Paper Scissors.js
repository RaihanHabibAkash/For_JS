const choices = ["rock", "paper", "scissors"];   
const playerDisplay = document.getElementById("playerdisplay");
const computerDisplay = document.getElementById("computerdisplay")
const resultDisplay = document.getElementById("resultdisplay");
const playerScoreDisplay = document.getElementById("playerscoredisplay");
const computerScoreDisplay = document.getElementById("computerscoredisplay")
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a Tie!";
    }

    else{
        switch(playerChoice){

            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;

            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;

            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;
        }
    }
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext", "redtext");

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greentext");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;

        
        case "You Lose!":
            resultDisplay.classList.add("redtext");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}
