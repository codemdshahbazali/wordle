import listOfWords, { keyboardArr } from './data.js';

const gameBoardRows = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

let myModal = new bootstrap.Modal(document.getElementById('messageModal'), {
  keyboard: false,
});
const modelText = document.querySelector('#modalText');

const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', () => {
  reset();
});

const gameInstruction = document.querySelector('.gameInstruction');

let gameInstructionModal = new bootstrap.Modal(
  document.getElementById('gameInstruction'),
  {
    keyboard: false,
  }
);

gameInstruction.addEventListener('click', () => {
  gameInstructionModal.show();
});

const selectRandomWinWord = () => {
  let index = Math.floor(Math.random() * 511);
  console.log('Win Word ', listOfWords[index].toLowerCase());
  return listOfWords[index];
};

let colNumber = 0;
let rowNumber = 0;
let checkWordFlag = true;

let winWord = selectRandomWinWord().toLowerCase();

const gameboardContainer = document.querySelector('.game-board-container');
const gameMessage = document.querySelector('.game-message');

const createGameBoard = () => {
  gameBoardRows.forEach((row, rowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.setAttribute('id', `row-${rowIndex}`);
    rowElement.classList.add('row');
    gameboardContainer.appendChild(rowElement);
    row.forEach((ele, colIndex) => {
      const colElement = document.createElement('div');
      colElement.setAttribute('id', `row-${rowIndex}-col-${colIndex}`);
      colElement.classList.add('tile');
      rowElement.appendChild(colElement);
    });
  });
};

createGameBoard();

const keyboardContainter = document.querySelector('.keyboard-container');

const createKeyBoard = () => {
  keyboardArr.forEach((key, index) => {
    const keyElement = document.createElement('button');
    keyElement.textContent = key;
    keyElement.setAttribute('id', key);
    keyElement.addEventListener('click', () => addTextToContainer(key));
    keyboardContainter.appendChild(keyElement);
  });
};

createKeyBoard();

document.addEventListener('keydown', (e) => {
  if (
    e.key.length == 1 ||
    e.key.toLowerCase() == 'enter' ||
    e.key.toLowerCase() == 'backspace'
  ) {
    addTextToContainer(e.key);
  }
});

const addTextToContainer = (key) => {
  let element = document.querySelector(`#row-${rowNumber}-col-${colNumber}`);
  if (
    colNumber < 5 &&
    key.toLowerCase() != 'enter' &&
    key.toLowerCase() != '<<' &&
    key.toLowerCase() != 'backspace' &&
    key.toLowerCase().match(/[a-z]/i)
  ) {
    gameBoardRows[rowNumber][colNumber] = key;
    element.textContent = key.toUpperCase();
    element.classList.add('scaleTile');
    colNumber++;
  }

  if (key.toLowerCase() == 'enter') {
    if (colNumber > 0 && checkWordFlag) checkWord();
  }

  if (key == '<<' || key.toLowerCase() == 'backspace') {
    if (colNumber > 0 && colNumber <= 5) {
      colNumber--;
      document.querySelector(`#row-${rowNumber}-col-${colNumber}`).textContent =
        '';
    }
  }
};

const checkWord = async () => {
  checkWordFlag = false;
  const wordList = document.querySelector(`#row-${rowNumber}`).childNodes;
  let word = '';
  let element;
  let keyBoardKey;
  wordList.forEach((ele) => {
    word += ele.textContent;
  });

  if (word.length < 5) {
    gameMessage.textContent = 'Incomplete';
    gameMessage.classList.add('animate-message');
    setTimeout(() => {
      gameMessage.textContent = '';
      gameMessage.classList.remove('animate-message');
      checkWordFlag = true;
    }, 2000);

    return;
  }
  //start
  if (await checkValidWord(word)) {
    if (word.toLowerCase() == winWord.toLowerCase()) {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          element = document.querySelector(`#row-${rowNumber}-col-${i}`);
          keyBoardKey = document.getElementById(word[i].toUpperCase());
          element.classList.add('greenClr');
          keyBoardKey.classList.add('greenClr');

          if (i === 4) {
            gameMessage.textContent = winWord.toUpperCase();
            gameMessage.classList.add('animate-message');
            myModal.show();
            modelText.classList.add('text-success');
            modelText.textContent = 'Congratulations. Play Again !!!';
            rowNumber++;
            colNumber = 0;
            checkWordFlag = true;
            return;
          }
        }, 300 * i);
      }
    } else {
      for (let i = 0; i < word.length; i++) {
        setTimeout(() => {
          element = document.querySelector(`#row-${rowNumber}-col-${i}`);
          keyBoardKey = document.getElementById(word[i].toUpperCase());
          if (word[i].toLowerCase() == winWord[i].toLowerCase()) {
            //make it green
            element.classList.add('greenClr');
            keyBoardKey.classList.add('greenClr');
          } else if (winWord.includes(word[i].toLowerCase())) {
            //make it yellow
            element.classList.add('yellowClr');
            keyBoardKey.classList.add('yellowClr');
          } else {
            //make it gray
            element.classList.add('greyClr');
            keyBoardKey.classList.add('greyClr');
            // keyBoardKey.setAttribute('disabled', '');
          }

          if (i === 4) {
            setTimeout(() => {
              rowNumber++;
              colNumber = 0;
              checkWordFlag = true;
              if (rowNumber === 6) {
                gameMessage.textContent = winWord.toUpperCase();
                gameMessage.classList.add('animate-message');
                myModal.show();
                modelText.classList.add('text-danger');
                modelText.textContent = 'Game Over. Try Again!!!';
                checkWordFlag = true;
                return;
              }
            }, i * 200);
          }
        }, i * 300);
      }
    }
  } else {
    gameMessage.textContent = 'Invalid Word';
    gameMessage.classList.add('animate-message');
    setTimeout(() => {
      gameMessage.textContent = '';
      gameMessage.classList.remove('animate-message');
      checkWordFlag = true;
    }, 2000);
  }
  //end
};

const checkValidWord = async (word) => {
  let result = false;
  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(
    (response) => {
      if (response.status === 200) {
        result = true;
      } else {
        result = false;
      }
    }
  );

  return result;
};

const reset = () => {
  colNumber = 0;
  rowNumber = 0;
  keyboardContainter.innerHTML = '';
  gameboardContainer.innerHTML = '';
  gameMessage.textContent = '';
  gameMessage.classList.remove('animate-message');
  createKeyBoard();
  createGameBoard();
  winWord = selectRandomWinWord();
};
