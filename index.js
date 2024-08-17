

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

function getHumanChoice() {
    let promptResponse = prompt(
      "Greetings Human. Would you like to play a game? Please enter your choice of Rock, Paper or Scissors. May the best being win!"
    );

    return (
      promptResponse.charAt(0).toUpperCase() +
      promptResponse.slice(1).toLowerCase()
    );
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let roundCount = 0;
    
    while (roundCount < 5) {
      let humanChoice = getHumanChoice();
      let computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
      console.log(humanScore, "humanScore");
      console.log(computerScore, "computerScore");
      console.log(humanChoice, "humanChoice");
      console.log(computerChoice, "computerChoice");
    }

    function playRound(humanChoice, computerChoice) {
      if (computerChoice === humanChoice) {
        alert("It's a tie! try again?");
      } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
      ) {
        alert("You Won!");
        humanScore++;
      } else {
        computerScore++;
        alert("I Win! Go again?");
      }
      roundCount++;
    }
}

playGame();