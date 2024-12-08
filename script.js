let playerContainer = document.querySelector("#playerScore")
let computerContainer = document.querySelector("#computerScore")
let roundContainer = document.querySelector("#round")
let infoContainer = document.querySelector(".info")





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
        if(computerElection == 0) infoContainer.textContent = "Draw"
        else if(computerElection == 1) {
            ++computerScore
            infoContainer.textContent = "You lose..."
        }
        else{
            ++humanScore
            infoContainer.textContent = "You win!"
        }
    }
    else if (playerElection == 1) {
        if(computerElection == 0) {
            ++humanScore
            infoContainer.textContent = "You win!"
        }

        else if(computerElection == 1) infoContainer.textContent = "Draw"
        
        else{
            ++computerScore
            infoContainer.textContent = "You lose..."
        }
    }

    else {
        if(computerElection == 0) {
            ++computerScore
            infoContainer.textContent = "You lose..."
        }

        else if(computerElection == 1) {
            ++humanScore
            infoContainer.textContent = "You win!"
        }
        else{
            infoContainer.textContent = "Draw"
        }
    }
    playerContainer.textContent = ("Player: "+humanScore)
    computerContainer.textContent = ("Computer: "+computerScore)
    console.log("Player:",humanScore)
    console.log("Computer:",computerScore)
}