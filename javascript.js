function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choice.length);
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

    for (let i = 0; i <= 5; i++) {
        const input = prompt("Rock, Paper, Scissors?").toLowerCase();
        const result = playRound(input, computerSelection);

        if (result.includes('Win')) {
            playerWin++;
        } else if (result.includes('Lose')) {
            computerWin++;
        }
        
        console.log(result);
    }

    if (playerWin === computerWin) {
        return 'Final Result: Draw!';
    } else if (playerWin > computerWin) {
        return 'Final Result: You Win!'
    } else  {
        return 'Final Result: Computer Wins!';
    }
}





