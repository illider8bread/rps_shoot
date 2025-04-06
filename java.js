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

    let humanScore = 0;
    let computerScore = 0;

     function playRound(humanChoice, computerChoice){
        
        humanChoice = humanChoice.toLowerCase();
        console.log(humanChoice + " vs " + computerChoice);
        if (humanChoice === computerChoice){
            console.log("It's a tie, which means either you both win or you both lose. It's up to you.");
        
        } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")){
            humanScore = humanScore + 1;
            console.log("congrats bro, you beat a computer. yeehaw.")
       
        } else if ((humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")){
            computerScore = computerScore + 1;
            console.log("you lost, idiot.")
        }
       
        let score = "Score H"+ humanScore + ":C" + computerScore;
        console.log(score);

    }

    const rockBtn = document.querySelector('#rock');
    rockBtn.addEventListener('click', playRound("rock", getComputerChoice()))
    const paperBtn = document.querySelector('#paper');
    paperBtn.addEventListener('click', playRound("paper", getComputerChoice()));
    const scissorsBtn = document.querySelector('#scissors');
    scissorsBtn.addEventListener('click', playRound("scissors", getComputerChoice()) );


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