function getComputerChoice(max){
    return Math.floor(Math.random() * max)
}


function getPlayerChoice(playerChoice){
     
    if (playerChoice == "rock") return 0;
    else if (playerChoice == "paper") return 1;
    else if (playerChoice == "scissors") return 2;
    else alert ("The imput must be rock, paper or scissors in lowercase")
}

let humanScore = 0
let computerScore = 0

