const rockChoice  = document.querySelector(".rock-choice");
const paperChoice  = document.querySelector(".paper-choice");
const scissorChoice  = document.querySelector(".scissor-choice");
const humanScoreId = document.querySelector("#human-score");
const computerScoreId = document.querySelector("#computer-score");
const winnerMessage = document.querySelector(".show-message");
const playSection = document.querySelector(".play-section")

let humanScore = 0;
let computerScore = 0;

function setScore(){
    humanScoreId.textContent = `You : ${humanScore}`
    computerScoreId.textContent = `Bot : ${computerScore}`
}

setScore()

rockChoice.addEventListener("click",()=>{
    let humanChoice = "rock";
    playGame(humanChoice)
})

paperChoice.addEventListener("click",()=>{
    let humanChoice = "paper";
    playGame(humanChoice)
})

scissorChoice.addEventListener("click",()=>{
    let humanChoice = "scissor";
    playGame(humanChoice)
})




function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num == 0) return "rock"
    if (num == 1) return "paper"
    if (num == 2) return "scissor"
}


function playGame(humanC) {

    let computerChoice = getComputerChoice();
    let humanChoice = humanC

    if (humanChoice == computerChoice) {
        winnerMessage.firstChild.textContent = "Game drawn";
    }
    else {

        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                winnerMessage.firstChild.textContent = "Bot won this ! He chose Paper";
                computerScore++;

            }
            else if (computerChoice == "scissor") {
                winnerMessage.firstChild.textContent = "You won this ! Bot chose Scissor";
                humanScore++;
            }
        }

        if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                winnerMessage.firstChild.textContent = "You won this ! Bot chose Rock";
                humanScore++;
            }
            else if (computerChoice == "scissor") {
                winnerMessage.firstChild.textContent = "Bot won this ! He chose Scissor";
                computerScore++
            }
        }

        if (humanChoice == "scissor") {
            if (computerChoice == "rock") {
                winnerMessage.firstChild.textContent = "Bot won this ! He chose Rock";
                computerScore++;
            }
            else if (computerChoice == "paper") {
                winnerMessage.firstChild.textContent = "You won this ! Bot chose Paper";
                humanScore++;
            }
        }

    }
    setScore()
    playSection.classList.add("play-section-blur")
    winnerMessage.style.visibility = "visible"
    setTimeout(() => {
        winnerMessage.style.visibility = "hidden"
        playSection.classList.remove("play-section-blur")
    }, 1000);
}



