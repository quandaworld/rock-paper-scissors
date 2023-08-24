const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
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
        return 'You Lose! Paper beats Rock';
      case 'scissors':
        return 'You Win! Rock beats Scissors';
    }
  }

  if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        return 'You Win! Paper beats Rock';
      case 'scissors':
        return 'You Lose! Scissors beat Paper';
    }
  }

  if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'rock':
        return 'You Lose! Rock beats Scissors';
      case 'paper':
        return 'You Win! Scissors beat Paper';
    }
  }
}

function game() {
  let playerWin = 0;
  let computerWin = 0;

  for (let i = 0; i < 5; i++) {
    let playerInput;
    
    // Repeatedly prompt for input until user gives valid input
    for (;;) {
      playerInput = prompt("Rock, Paper, Scissors?").toLowerCase();
      if (choice.includes(playerInput)) break;
      alert('Invalid input. Try again');
    }

    const computerSelection = getComputerChoice();
    const result = playRound(playerInput, computerSelection);

    if (result.includes('Win')) {
      playerWin++;
    } else if (result.includes('Lose')) {
      computerWin++;
    }

    console.log(result);
  }

  if (playerWin === computerWin) {
    console.log('Final Result: Draw!');
  } else if (playerWin > computerWin) {
    console.log('Final Result: You Win!');
  } else {
    console.log('Final Result: Computer Wins!');
  }
}




