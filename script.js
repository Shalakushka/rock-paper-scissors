const humanScoreDiv = document.querySelector(".human-score");
const computerScoreDiv = document.querySelector(".computer-score");
const roundDiv = document.querySelector(".round");
const statusDiv = document.querySelector(".status");
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const resetButton = document.querySelector(".reset");
let score = 0;
let round = 1;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getResult(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return 0;
    }
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore += 1;
        } else {
            humanScore += 1;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore += 1;
        } else {
            humanScore += 1;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore += 1;
        } else {
            humanScore += 1;
        }
    }
}

function resetGame() {
    roundDiv.textContent = "1/5";
    humanScoreDiv.textContent = "Your score : 0";
    computerScoreDiv.textContent = "Opponent score : 0";
    statusDiv.textContent = "Can you beat the computer ?";
    humanScore = 0;
    computerScore = 0;
    round = 1;
}


function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let result = getResult(humanChoice, computerChoice);

    if (round == 6)
        return;
    if (result == 1)
        statusDiv.textContent = `Your opponent picked ${computerChoice}! You won this round!`;
    else if (result == -1)
        statusDiv.textContent = `Your opponent picked ${computerChoice}! You lost this round!`;
    else
        statusDiv.textContent = `Your opponent picked ${computerChoice}! That's a tie...`;
    round += 1;
    if (round >= 6) {
        if (humanScore > computerScore)
            statusDiv.textContent = "You WON!";
        else if (humanScore == computerScore)
            statusDiv.textContent = "None of you won...";
        else
            statusDiv.textContent = "You lost to your opponent...";
    } else {
        score += result;
        updateRound();
    }
    updateScore();
}

function updateRound() {
    roundDiv.textContent = `${round}/5`;
}

function updateScore() {
    humanScoreDiv.textContent = `Your score : ${humanScore}`;
    computerScoreDiv.textContent = `Opponent score : ${computerScore}`;
}

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
resetButton.addEventListener("click", () => resetGame());
