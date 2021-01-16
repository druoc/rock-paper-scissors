//global variables
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset-button');
let computerScore = document.getElementById('comp-score-disp');
let playerScore = document.getElementById('player-score-disp');
let gameStatus = document.getElementById('game-status');
let play = 0;
let comp = 0;

//event listeners
rockBtn.onclick = () => { 
  playRound("rock", computerPlay()) };

paperBtn.onclick = () => { 
  playRound("paper", computerPlay()) };

scissorsBtn.onclick = () => { 
  playRound("scissors", computerPlay()) };

resetBtn.onclick = () => {
  resetScore();
}

//function to generate a random number to pass into the computerPlay function
function randNum() {
  return Math.floor(Math.random() * 3);
}

//function to generate the computer's turn
function computerPlay() {
    let result = randNum(3);
     if (result === 0 ) {
      return "rock";
    }
    else if (result === 1) {
      return "paper";
    }
    else {
      return "scissors";
    }
}

//main game function. compares the players choices, and updates the scores and status accordingly
function playRound(playerChoice, computerPlay) {
  if (playerChoice === computerPlay) {
    gameStatus.innerText = "Its a tie!";
  }
  else if (playerChoice === "rock" && computerPlay === "paper") {
    gameStatus.innerText = `You chose ${playerChoice}, computer chose ${computerPlay}, computer wins!`;
    computerScore.innerText = ++comp;
  }
  else if (playerChoice === "rock" && computerPlay === "scissors") {
    gameStatus.innerText = `You chose ${playerChoice}, computer chose ${computerPlay}, you win!`;
    playerScore.innerText = ++play;
  }
  else if (playerChoice === "paper" && computerPlay === "rock") {
    gameStatus.innerText = `You chose ${playerChoice}, computer chose ${computerPlay}, you win!`;
    playerScore.innerText = ++play;
  }
  else if (playerChoice === "paper" && computerPlay === "scissors") {
    gameStatus.innerText = `You chose ${playerChoice}, computer chose ${computerPlay}, computer wins!`;
    computerScore.innerText = ++comp;
  }
  else if (playerChoice === "scissors" && computerPlay === "rock") {
    gameStatus.innerText = `You chose ${playerChoice}, computer chose ${computerPlay}, computer wins!`;
    computerScore.innerText = ++comp;
  }
  else if (playerChoice === "scissors" && computerPlay === "paper") {
    gameStatus.innerText = `You chose ${playerChoice}, computer chose ${computerPlay}, you win!`;
    playerScore.innerText = ++play;
  }
  gameEnd();
}


function gameEnd() {
  if (comp === 5 ) {
    gameStatus.innerText = "Computer won this round! Click reset to try again!";
  }
  else if (play === 5) {
    gameStatus.innerText = "Congratulations, you won this round!";
  }
}

function resetScore() {
  play = 0;
  comp = 0;
  playerScore.innerText = play;
  computerScore.innerText = comp;
  gameStatus.innerText = "Go on..."
}