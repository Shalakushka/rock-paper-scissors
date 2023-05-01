var swordAudio = new Audio("sound/sword.wav");
const rock = document.querySelector('.player-selection .rock');
var rockAudio = new Audio("sound/rock.wav");
const paper = document.querySelector('.player-selection .paper');
var paperAudio = new Audio("sound/paper.wav");
const scissors = document.querySelector('.player-selection .scissors');
var scissorsAudio = new Audio("sound/scissors.wav");

var playerSelection = "";
var computerSelection = "";
var choices = ["ROCK", "PAPER", "SCISSORS"]
var meta = [[2, 0, 1], [1, 2, 0], [0, 1, 2]] //[rock, paper, scissors], for each [x, x, x] : 2 tie, 0 loose, 1 win
function setDuelImg() {
    let img = document.querySelector(".fight img");
    img.src="img/duel.png"
}

function setPlayerChoice(choice) {
    let playerChoice = document.querySelector(".player-choice");
    switch(choice) {
        case "ROCK" : playerChoice.textContent = "👊"; break;
        case "PAPER" : playerChoice.textContent = "✋"; break;
        case "SCISSORS" : playerChoice.textContent = "✌️"; break;
    }
}

function setComputerChoice() {
    computerSelection = choices[Math.floor(Math.random() * 3)];
    let computerChoice = document.querySelector(".computer-choice");

    switch(computerSelection) {
        case "ROCK" : computerChoice.textContent = "👊"; break;
        case "PAPER" : computerChoice.textContent = "✋"; break;
        case "SCISSORS" : computerChoice.textContent = "✌️"; break;
    }
}

function setResult() {
    let status = document.querySelector(".status");
    let player = choices.indexOf(playerSelection);
    let computer = choices.indexOf(computerSelection);
    switch (meta[player][computer]) {
        case 0:
            status.textContent = "You LOOSE !"
            break;
        case 1:
            status.textContent = "You WIN !"
            break;
        case 2:
            status.textContent = "Tie ..."
            break;
    }
}

rock.addEventListener('click', () => {
  console.log("ROCK!")
  playerSelection = "ROCK"
  rockAudio.play();
  setTimeout(() => { swordAudio.play() }, 500);
  setDuelImg();
  setPlayerChoice(playerSelection);
  setComputerChoice();
  setResult();
});

paper.addEventListener('click', () => {
  console.log("PAPER!");
  playerSelection = "PAPER"
  paperAudio.play();
  setTimeout(() => { swordAudio.play() }, 500);
  setDuelImg();
  setPlayerChoice(playerSelection);
  setComputerChoice();
  setResult();
});

scissors.addEventListener('click', () => {
  console.log("SCISSORS!")
  playerSelection = "SCISSORS"
  scissorsAudio.play();
  setTimeout(() => { swordAudio.play() }, 500);
  setDuelImg();
  setPlayerChoice(playerSelection);
  setComputerChoice();
  setResult();
});