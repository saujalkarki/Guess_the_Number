// Generating a random Number
const randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
console.log(typeof randomNumber);

let score = 20;

let btnSubmit = document.querySelector(".Submit");

let message = document.querySelector(".message");
let score1 = document.querySelector(".Score");

btnSubmit.addEventListener("click", function () {
  let guessedNumber = parseInt(document.querySelector("#guessedNumber").value);

  if (randomNumber === guessedNumber) {
    console.log("Congratulations! You guessed the correct Number");
  } else {
    if (randomNumber < guessedNumber) {
      console.log(guessedNumber);
      console.log("You guessed it high");
    } else {
      console.log("You guessed it low");
    }
  }
});
