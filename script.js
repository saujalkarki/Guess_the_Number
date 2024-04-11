// Generating a random Number
const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 20;

let btnSubmit = document.querySelector(".Submit");
let message = document.querySelector(".message");
let score1 = document.querySelector(".Score");

btnSubmit.addEventListener("click", function () {
  let inpFld = document.querySelector("#guessedNumber");
  let guessedNumber = parseInt(document.querySelector("#guessedNumber").value);

  if (randomNumber === guessedNumber) {
    message.textContent =
      "Congratulations! You have guessed the correct Number";
    document.querySelector("body").style.backgroundColor = "cyan";
  } else {
    if (randomNumber < guessedNumber) {
      message.textContent = "You guessed it high";
    } else {
      message.textContent = "You guessed it low";
    }
    score--;
    if (score === 0) {
      inpFld.disabled = true;
      btnSubmit.disabled = true;
      message.textContent = `You lose the game. The correct random Number is ${randomNumber}`;
    }
    score1.textContent = score;
  }
});
