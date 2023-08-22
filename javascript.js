// Define a function that returns computer's random choice
function getComputerChoice() {
    // Declare the array of choices
    const choice = ['rock', 'paper', 'scissors'];
    // Generate a random index 
    let index = Math.floor(Math.random() * choice.length);
    // Return the choice at the randomly generated index
    return choice[index];
}

// console.log(getComputerChoice());

// Define a function that returns the winner of the round
function playRound(playerSelection, computerSelection) {
    // if player's choice is same as computer's choice => draw
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'Draw!';
    }

    // if player chooses rock
    if (playerSelection.toLowerCase() === 'rock') {
        switch (computerSelection) {
            // computer chooses paper => player lose
            case 'paper':
                return 'You Lose! Paper beats Rock';
            // computer chooses scissors => player win
            case 'scissors':
                return 'You Win! Rock beats Scissors';
        }
    }

    // if player chooses paper
    if (playerSelection.toLowerCase() === 'paper') {
        switch (computerSelection) {
            // computer chooses rock => player win
            case 'rock':
                return 'You Win! Paper beats Rock';
            // computer chooses scissors => player lose
            case 'scissors':
                return 'You Lose! Scissors beat Paper';
        }
    } 
    
    if (playerSelection.toLowerCase() === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                return 'You Lose! Rock beats Scissors';
            case 'paper':
                return 'You Win! Scissors beat Paper';
        }
    }

    // if player's choice is different than rock paper scissors => invalid input
    return 'Invalid Choice!';
}

// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));