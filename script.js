'use strict';
/*
console.log(document.querySelector(`.message`).textContent);
console.log(document.querySelector(`.label-score`).textContent);
document.querySelector(`.message`).textContent = `😎 Correct number!`;
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;
document.querySelector(`.guess`).value = 22;
console.log(document.querySelector(`.guess`).value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = '';

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `🙄 No number!`;

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🥳 Great success!`;
    document.querySelector(`header h1`).textContent = `Wow you won!`;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = score;
    }

    // When guess is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `🫣 Number is high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `😬 Game over!`;
      document.querySelector(`header h1`).textContent = `You lost!`;
      document.querySelector(`body`).style.backgroundColor = `brown`;
      document.querySelector(`.number`).style.width = `30rem`;
      document.querySelector(`.score`).textContent = 0;
    }

    // When guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `😭 Number is low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `😬 Game over!`;
      document.querySelector(`header h1`).textContent = `You lost!`;
      document.querySelector(`.number`).style.width = `30rem`;
      document.querySelector(`body`).style.backgroundColor = `brown`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

// Again Button
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = '';
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`header h1`).textContent = `Guess My Number!`;
});
