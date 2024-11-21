let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num == 0) return "rock"
    if (num == 1) return "paper"
    if (num == 2) return "scissor"
}

function getHumanChoice() {
    let choice = prompt("Enter your choice").toLowerCase();
    return choice
}


function playGame() {

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (humanChoice == computerChoice) {
        console.log("Game drawn");
    }
    else {

        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log("Bot won this ! He chose Paper");
                computerScore++;
            }
            else if (computerChoice == "scissor") {
                console.log("You won this ! Bot chose Scissor");
                humanScore++;
            }
        }

        if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You won this ! Bot chose Rock");
                humanScore++;
            }
            else if (computerChoice == "scissor") {
                console.log("Bot won this ! He chose Scissor");
                computerScore++
            }
        }

        if (humanChoice == "scissor") {
            if (computerChoice == "rock") {
                console.log("Bot won this ! He chose Rock");
                computerScore++;
            }
            else if (computerChoice == "paper") {
                console.log("You won this ! Bot chose Paper");
                humanScore++;
            }
        }

    }
}


function playGround() {
    for (let index = 0; index<5; index++) {
        playGame();
    }

    if (humanScore > computerScore) {
        console.log(`You won !!\nBot Score ${computerScore}\nYour Score ${humanScore}`);
    }
    else if (humanScore < computerScore) {
        console.log(`You lost !!\nBot Score ${computerScore}\nYour Score ${humanScore}`);
    }
    else if (humanScore == computerScore) {
        console.log(`Draw !!\nBot Score ${computerScore}\nYour Score ${humanScore}`);

    }
}

playGround()

