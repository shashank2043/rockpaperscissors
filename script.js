const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerScoreCount = 0;
let computerScoreCount = 0;

function play(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You win!" : "You lose!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You win!" : "You lose!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You win!" : "You lose!";
        break;
    }
  }
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText");
  switch (result) {
    case "You win!":
      resultDisplay.classList.add("greenText");
      playerScoreCount++;
      playerScore.textContent = playerScoreCount;
      break;
    case "You lose!":
      resultDisplay.classList.add("redText");
        computerScoreCount++;
        computerScore.textContent = computerScoreCount;
      break;
  }
}
