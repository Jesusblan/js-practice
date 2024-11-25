function getComputerChoice(){
    return Math.floor(Math.random() * 3)
}


function getPlayerChoice(playerChoice){
     
    if (playerChoice == "rock") return 0;
    else if (playerChoice == "paper") return 1;
    else if (playerChoice == "scissors") return 2;
    else alert ("The imput must be rock, paper or scissors in lowercase")
}

var humanScore = 0
var computerScore = 0

function playRound(player){
    let computerElection = getComputerChoice()
    let playerElection = getPlayerChoice(player)
    

    if (playerElection == 0) {
        if(computerElection == 0) console.log("Draw")
        else if(computerElection == 1) {
            ++computerScore
            console.log("You lose!")
        }
        else{
            ++humanScore
            console.log("You win!")
        }
    }
    else if (playerElection == 1) {
        if(computerElection == 0) {
            ++humanScore
            console.log("You win!")
        }

        else if(computerElection == 1) console.log("Draw!")
        
        else{
            ++computerScore
            console.log("You lose!")
        }
    }

    else {
        if(computerElection == 0) {
            ++computerScore
            console.log("You lose!")
        }

        else if(computerElection == 1) {
            ++humanScore
            console.log("You win!")
        }
        else{
            console.log("Draw!")
        }
    }
    console.log("Player:",humanScore)
    console.log("Computer:",computerScore)
}