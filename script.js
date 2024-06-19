function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors ?");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`You picked ${humanChoice}!\nYour opponent picked ${computerChoice}!`);
    if (humanChoice == computerChoice) {
        console.log("That's a tie!");
        return;
    }
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose !");
            computerScore += 1;
        } else {
            console.log("You win !");
            humanScore += 1;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            console.log("You lose !");
            computerScore += 1;
        } else {
            console.log("You win !");
            humanScore += 1;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose !");
            computerScore += 1;
        } else {
            console.log("You win !");
            humanScore += 1;
        }
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    if (humanScore > computerScore) {
        console.log("You won the game! Congratulations!");
    } else {
        console.log("The computer won... Maybe next time!");
    }
}

let humanScore = 0;
let computerScore = 0;