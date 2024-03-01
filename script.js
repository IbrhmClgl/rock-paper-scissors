const rockEl = document.querySelector('#rock');
const paperEl = document.querySelector('#paper');
const scissorsEl = document.querySelector('#scissors');
const computerEl = document.querySelector('.computer');
const plImgEl = document.querySelector('#plImg');
const comImgEl = document.querySelector('#comImg');
const versusEl = document.querySelector('#versus');
const resultEl = document.querySelector('#result');
const startGameEl = document.querySelector('#startGame');
const gameContentEl = document.querySelector('#gameContent');

let array = ['rock', 'paper', 'scissors'];
let selection = '';

function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

const loadImage = (imgId, image) => {
  document.getElementById(imgId).src = image;
};
const audio = new Audio('/src/click.wav');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    audio.play();
  });

  startGameEl.addEventListener('click', () => {
    gameContentEl.setAttribute('style', 'visibility: visible');
    startGameEl.setAttribute('style', 'visibility: hidden');

    const gameLogic = (e, playersPick, pickW, pickL, plImg) => {
      e.addEventListener('click', () => {
        let randomItem = getRandomItem(array);
        const printResults = (msg) => {
          resultEl.textContent = msg;
        };
        const displayImage = () => {
          loadImage('plImg', `src/${plImg}.jpeg`);
          loadImage('comImg', `src/${randomItem}.jpeg`);

          plImgEl.setAttribute('style', 'visibility: visible');
          comImgEl.setAttribute('style', 'visibility: visible');
          versusEl.setAttribute('style', 'visibility: visible');
        };

        let selection = playersPick;
        if (selection) {
          if (randomItem === pickW) {
            printResults('🎉 Du gewinnst 🎉!');
            displayImage();
            resultEl.setAttribute('style', 'color: green');
          } else if (randomItem === pickL) {
            printResults('Computer gewinnt 🚫 !');
            displayImage();
            resultEl.setAttribute('style', 'color: red');
          } else if (selection === randomItem) {
            resultEl.textContent = 'Unentschieden !';
            displayImage();
            resultEl.setAttribute('style', 'color: grey');
          }
        }
      });
    };
    gameLogic(rockEl, 'rock', 'scissors', 'paper', 'rock');
    gameLogic(paperEl, 'paper', 'rock', 'scissors', 'paper');
    gameLogic(scissorsEl, 'scissors', 'paper', 'rock', 'scissors');
  });
});

// gameLogic(rockEl, 'rock', 'scissors', 'paper', 'rock');
// gameLogic(paperEl, 'paper', 'rock', 'scissors', 'paper');
// gameLogic(scissorsEl, 'scissors', 'paper', 'rock', 'scissors');
