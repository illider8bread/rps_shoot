function getComputerChoice(){
    const randomNum =(Math.random() * 100) + 1;
    if (randomNum <= 33){
        return("rock");
    } else if (randomNum >= 66){
        return("paper");
    } else {
        return("scissors");
    }
}

function playGame(){

    let rockBtn = querySelector("#r");
    rockBtn.addEventListener("click", playRound("rock", getComputerChoice() ));
    
    let paperBtn = querySelector("#p");
    paperBtn.addEventListener("click", playRound("paper", getComputerChoice() ));
    
    let scissorsBtn = querySelector("#s");
    scissorsBtn.addEventListener("click", playRound("scissors", getComputerChoice() ));

    let answerDiv = querySelector(".two");

    let humanScore = 0;
    let computerScore = 0;

     function playRound(humanChoice, computerChoice){
        
        humanChoice = humanChoice.toLowerCase();
        console.log(humanChoice + " vs " + computerChoice);
        if (humanChoice === computerChoice){
            answerDiv.textContent("It's a tie, which means either you both win or you both lose. It's up to you.");
        
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")){
            humanScore = humanScore + 1;
            answerDiv.textContent("congrats bro, you beat a computer. yeehaw.")
       
        } else if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")){
            computerScore = computerScore + 1;
            answerDiv.textContent("you lost, idiot.")
        }
       
        let score = "Score H"+ humanScore + ":C" + computerScore;
        answerDiv.textContent(score);

    }

let finalScore = "";
if (humanScore > computerScore){
    finalScore = "You Win! " + humanScore + " to" + computerScore;
} else if (humanScore < computerScore){
    finalScore = "You Lose! " + computerScore + " to " + humanScore;
} else {
    finalScore = "It's a tie :/ " + computerScore + " = " + humanScore;
}

console.log("GAME OVER! ");
console.log(finalScore);
}

playGame();