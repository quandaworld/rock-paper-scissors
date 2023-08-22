function getComputerChoice() {
    // Declare the array of choices
    const choice = ["Rock", "Paper", "Scissors"];
    // Generate a random index 
    let index = Math.floor(Math.random() * choice.length);
    // Return the choice at the randomly generated index
    return choice[index];
}

// console.log(getComputerChoice());

