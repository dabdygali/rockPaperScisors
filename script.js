let computerScore = 0;
let humanScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultsDiv = document.querySelector(".results");

rockButton.addEventListener("click", function(){
	playRound("rock", getComuterChoice());
});

paperButton.addEventListener("click", function(){
	playRound("paper", getComuterChoice());
});

scissorsButton.addEventListener("click", function(){
	playRound("scissors", getComuterChoice());
});

function getComuterChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
        default:
            return undefined;
    }
}

function getHumanChoice() {
    return prompt("rock, paper or scissors?", "rock").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    )
    {
        resultsDiv.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else if (humanChoice === computerChoice) {
        resultsDiv.textContent = "It's a tie!";
    }
    else {
        resultsDiv.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
        computerScore++;
    }
	resultsDiv.textContent += " Human: " + humanScore + ", Computer: " + computerScore + ".";

	if (humanScore === 5) {
		resultsDiv.textContent += " The Winner is Human!!!";
		humanScore = 0;
		computerScore = 0;
	}
	else if (computerScore === 5){
		resultsDiv.textContent += " The Winner is Computer!!!";
		humanScore = 0;
		computerScore = 0;
	}
}
