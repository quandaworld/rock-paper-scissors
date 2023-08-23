// Define a function that returns computer's random choice
function getComputerChoice() {
    // Declare the array of choices
    const choice = ['rock', 'paper', 'scissors'];
    // Generate a random index 
    let index = Math.floor(Math.random() * choice.length);
    // Return the choice at the randomly generated index
    return choice[index];
}

// Define a function that returns the winner of a single game
function playRound(playerSelection, computerSelection) {
    // If player's choice is same as computer's choice => draw
    if (playerSelection === computerSelection) {
        return 'Draw!';
    }

    // If player chooses rock
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            // Computer chooses paper => player loses
            case 'paper':
                return 'You Lose! Paper beats Rock';
            // Computer chooses scissors => player wins
            case 'scissors':
                return 'You Win! Rock beats Scissors';
        }
    }

    // If player chooses paper
    if (playerSelection === 'paper') {
        switch (computerSelection) {
            // Computer chooses rock => player wins
            case 'rock':
                return 'You Win! Paper beats Rock';
            // Computer chooses scissors => player loses
            case 'scissors':
                return 'You Lose! Scissors beat Paper';
        }
    } 
    
    // If player chooses scissors
    if (playerSelection === 'scissors') {
        switch (computerSelection) {
            // Computer chooses rock => player loses
            case 'rock':
                return 'You Lose! Rock beats Scissors';
            // Computer chooses paper => player wins
            case 'paper':
                return 'You Win! Scissors beat Paper';
        }
    }
}

// Define a function that returns the winner of a 5-round game
function game() {
    // Initialize a variable to keep count of player's win, set its value to zero
    let playerWin = 0;
    // Initialize a variable to keep count of computer's win, set its value to zero
    let computerWin = 0;

    // Repeatedly play the game 5 times
    for (let i = 0; i <= 5; i++) {
        // Create a variable to store the input from the user
        const input = prompt("Rock, Paper, Scissors?").toLowerCase();

        // Create a variable to store the result of a single game
        const result = playRound(input, computerSelection);

        // If player wins, increase playerWin by 1
        if (result.includes('Win')) {
            playerWin++;
        // If player loses, increase computerWin by 1
        } else if (result.includes('Lose')) {
            computerWin++;
        }
        
        // Display the result of each round
        console.log(result);
    }

    // Determine the final winner
    // If player wins the same number of rounds as computer does => draw
    if (playerWin === computerWin) {
        return 'Final Result: Draw!';
    // If player wins more rounds => player wins
    } else if (playerWin > computerWin) {
        return 'Final Result: You Win!'
    // Else, computer wins
    } else  {
        return 'Final Result: Computer Win!';
    }
}





