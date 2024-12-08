let playerContainer = document.querySelector("#playerScore")
let computerContainer = document.querySelector("#computerScore")
let roundContainer = document.querySelector("#round")
let infoContainer = document.querySelector(".info")

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

var humanScore = 0
var computerScore = 0

function playRound(player){

    function getComputerChoice(){
        return Math.floor(Math.random() * 3)
    }

    let computerElection = getComputerChoice()
    let playerElection = player
    

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
    
}

rockButton.addEventListener("click", () => playRound(0))
paperButton.addEventListener("click", () => playRound(1))
scissorsButton.addEventListener("click", () => playRound(2))

