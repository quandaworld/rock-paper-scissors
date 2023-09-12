const rock_button = document.getElementById("r");
const paper_button = document.getElementById("p");
const scissors_button = document.getElementById("s");
const result_div = document.getElementById("result");
const finalResult_div = document.getElementById("final-result");
const playerScore_p = document.getElementById("player-score");
const computerScore_p = document.getElementById("computer-score");
const playerChoice_p = document.getElementById("player-choice");
const computerChoice_p = document.getElementById("computer-choice");
const symbols = {rock: '✊', paper: '🖐', scissors: '✌️'};
const restart_div = document.getElementById("restart");
const footer = document.querySelector("footer");
const restart_button = document.createElement('button');
restart_button.textContent = 'Play Again';
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  const index = Math.floor(Math.random() * choice.length);
  return choice[index];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Draw!';
  }

  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'paper':
        computerScore++;
        return 'You Lose! Paper beats Rock';
      case 'scissors':
        playerScore++;
        return 'You Win! Rock beats Scissors';
    }
  }

  if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        playerScore++;
        return 'You Win! Paper beats Rock';
      case 'scissors':
        computerScore++;
        return 'You Lose! Scissors beat Paper';
    }
  }

  if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'rock':
        computerScore++;
        return 'You Lose! Rock beats Scissors';
      case 'paper':
        playerScore++;
        return 'You Win! Scissors beat Paper';
    }
  }
}

function game(playerSelection) {
  const computerSelection = getComputerChoice();

  playerChoice_p.textContent = symbols[playerSelection];
  computerChoice_p.textContent = symbols[computerSelection];

  result_div.textContent = playRound(playerSelection, computerSelection);

  playerScore_p.textContent = `${playerScore}`;
  computerScore_p.textContent = `${computerScore}`;

  if (playerScore === 5) {
    finalResult_div.textContent = 'The final winner is...You!';
    endGame();
  } else if (computerScore === 5) {
    finalResult_div.textContent = 'The final winner is...Computer!';
    endGame();
  }
}

const playRock = () => game('rock');
const playPaper = () => game('paper');
const playScissors = () => game('scissors');

function endGame() {
  document.body.insertBefore(restart_button, footer);

  rock_button.removeEventListener('click', playRock);
  paper_button.removeEventListener('click', playPaper);
  scissors_button.removeEventListener('click', playScissors);

  restart_button.addEventListener('click', () => {
    window.location.reload();
  });
}

function main() {
  rock_button.addEventListener('click', playRock);
  paper_button.addEventListener('click', playPaper);
  scissors_button.addEventListener('click', playScissors);
}

main();

// Get current year in footer's copyright
document.getElementById("year").textContent = (new Date()).getFullYear();



