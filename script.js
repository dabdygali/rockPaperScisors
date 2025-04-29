let computerScore = 0;
let humanScore = 0;

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
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice)
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComuterChoice());
        console.log({Player: humanScore, Computer: computerScore});
    }
}

function main() {
    playGame();
}

main();