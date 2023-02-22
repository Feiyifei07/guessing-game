let buttons = document.querySelectorAll(".options");
let header = document.querySelector("header");
let message = document.querySelector(".message");
let reset = document.querySelector("#reset");
let numOfTries = 0;
const secretNum = 7;
let guess = null;

function handleClick(event) {
  guess = Number(event.target.textContent);
  let userGuessBtn = event.target;

  // increment number of tries
  numOfTries++;
  header.textContent = `tries ${numOfTries}`;
  userGuessBtn.disabled = true;

  if (guess === secretNum) {
    message.textContent = `${secretNum} is correct!`;
    buttons.forEach((button) => {
      button.disabled = true; // disable all buttons once correct number is guessed
    });
    reset.disabled = false;
  } else {
    message.textContent = `${guess} is wrong. Try again.`;
  }
}

function resetGame() {
  // reset tries count
  // reset the message
  // re enable all the buttons for guessing
  // hide play button
  numOfTries = 0;
  header.textContent = numOfTries;
  message.textContent = "";
  guess = null;
  reset.disabled = true;
  // show all buttons
  buttons.forEach((button) => {
    button.disabled = false;
  });
}
buttons.forEach((button) => {
  reset.addEventListener("click", resetGame);
});
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
