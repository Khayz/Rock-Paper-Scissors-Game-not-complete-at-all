const game = () => {
  let pScore = 0;
  let cScore = 0;

  // Start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //   Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        playerHand.src = `./assets/rock.png`;
        computerHand.src = `./assets/rock.png`;
        //   computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          // Here is where we call compareHands
          compareHands(this.textContent, computerChoice);
          // update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        // animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //   restart game if have a winner
  const restartScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore - pScore;
    computerScore.textContent = cScore - cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const scoreWins = 1;

    //   update text
    const winner = document.querySelector(".winner");
    // checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    // checking for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        pScore++;
        if (pScore == scoreWins) {
          restartScore();
          return;
        } else {
          updateScore();
          return;
        }
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        if (cScore == scoreWins) {
          restartScore();
          return;
        } else {
          updateScore();
          return;
        }
      }
    }
    // check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player wins";
        pScore++;
        if (pScore == scoreWins) {
          restartScore();
          return;
        } else {
          updateScore();
          return;
        }
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        if (cScore == scoreWins) {
          restartScore();
          return;
        } else {
          updateScore();
          return;
        }
      }
    }
    // checking for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins";
        pScore++;
        if (pScore == scoreWins) {
          restartScore();
          return;
        } else {
          updateScore();
          return;
        }
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        if (cScore == scoreWins) {
          restartScore();
          return;
        } else {
          updateScore();
          return;
        }
      }
    }

    // Restart score if someone wins!
  };

  // Call the inner function
  startGame();
  playMatch();
};

// Start the game function
game();
