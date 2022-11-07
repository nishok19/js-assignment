const rockEl = document.querySelector("#r");
const paperEl = document.querySelector("#p");
const scissorsEl = document.querySelector("#s");
const userStat = document.querySelector("#result-user-stat");
const compStat = document.querySelector("#result-comp-stat");
const resultStat = document.querySelector("#result-final-stat");
const userScoreEl = document.querySelector("#userScoreVal");
const compScoreEl = document.querySelector("#compScoreVal");

const options = ["rock", "paper", "scissors"];
let userScore = 0;
let compScore = 0;

let compOption;
let isUserWon;

const winCalc = (userOption, compOption) => {
  // Finding out who won
  if (userOption !== compOption) {
    if (userOption == "rock" && compOption == "paper") {
      isUserWon = false;
    } else if (userOption == "rock" && compOption == "scissors") {
      isUserWon = true;
    } else if (userOption == "paper" && compOption == "rock") {
      isUserWon = true;
    } else if (userOption == "paper" && compOption == "scissors") {
      isUserWon = false;
    } else if (userOption == "scissors" && compOption == "rock") {
      isUserWon = false;
    } else if (userOption == "scissors" && compOption == "paper") {
      isUserWon = true;
    }
  } else {
    resultStat.innerHTML = "Match Tied";
    return;
  }

  //
  if (isUserWon) {
    resultStat.innerHTML = "Winner: User";

    userScoreEl.innerText = userScore + 1;
    userScore = userScore + 1;
  } else {
    resultStat.innerHTML = "Winner: Comp";
    compScoreEl.innerText = compScore + 1;
    compScore = compScore + 1;
  }
};

const userAction = (option) => {
  // User Action
  if (option == "rock") {
    userStat.innerHTML = 'User: <img src="Images/rock.png" alt="rock" />';
  } else if (option == "paper") {
    userStat.innerHTML = 'User: <img src="Images/paper.png" alt="paper" />';
  } else if (option == "scissors") {
    userStat.innerHTML =
      'User: <img src="Images/scissors.png" alt="scissors" />';
  }

  //   Computer Action
  compOption = options[Math.floor(Math.random() * 3)];
  console.log(Math.floor(Math.random() * 3), " comp option ", compOption);
  compStat.innerHTML = `Comp: <img src="Images/${compOption}.png" alt="scissors" />`;
  //
  winCalc(option, compOption);
};

rockEl.addEventListener("click", () => {
  userAction("rock");
});
paperEl.addEventListener("click", () => {
  userAction("paper");
});
scissorsEl.addEventListener("click", () => {
  userAction("scissors");
});
