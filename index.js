const gameBoardRows = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

let colNumber = 0;
let rowNumber = 0;

const winWord = 'split';

const keyboardArr = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'ENTER',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  '<<',
];

const gameboardContainer = document.querySelector('.game-board-container');

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

const keyboardContainter = document.querySelector('.keyboard-container');

keyboardArr.forEach((key, index) => {
  const keyElement = document.createElement('button');
  keyElement.textContent = key;
  keyElement.setAttribute('id', key);
  keyElement.addEventListener('click', () => addTextToContainer(key));
  keyboardContainter.appendChild(keyElement);
});

const addTextToContainer = (key) => {
  console.log(key);
  let element = document.querySelector(`#row-${rowNumber}-col-${colNumber}`);
  if (
    colNumber < 5 &&
    key.toLowerCase() != 'enter' &&
    key.toLowerCase() != '<<'
  ) {
    gameBoardRows[rowNumber][colNumber] = key;
    console.log(gameBoardRows);
    element.textContent = key;
    colNumber++;
  }

  if (key.toLowerCase() == 'enter') {
    if (colNumber > 0) checkWord();
  }

  //   if (key.toLowerCase() == '<<') {
  //     if (colNumber <= 5 && colNumber >= 0) {
  //       colNumber--;
  //       document.querySelector(`#row-${rowNumber}-col-${colNumber}`).textContent =
  //         '';
  //     }
  //   }
};

const checkWord = () => {
  const wordList = document.querySelector(`#row-${rowNumber}`).childNodes;
  let word = '';
  wordList.forEach((ele) => {
    word += ele.textContent;
  });

  console.log(word);

  if (word.length < 5) {
    document.querySelector('.game-message').textContent =
      'Enter a 5 letter word';
    return;
  } else if (word.toLowerCase() == winWord.toLowerCase()) {
    for (let i = 0; i < 5; i++) {
      let element = document.querySelector(`#row-${rowNumber}-col-${i}`);
      element.style.backgroundColor = '#538d4e';
    }
    document.querySelector('.game-message').textContent = 'Hurray';
    //reset the board here

    return;
  } else if (rowNumber > 5) {
    //Todo
    document.querySelector('.game-message').textContent = 'Game Over';
    return;
  } else {
    for (let i = 0; i < word.length; i++) {
      let element = document.querySelector(`#row-${rowNumber}-col-${i}`);
      let keyBoardKey = document.getElementById(word[i].toUpperCase());
      console.log(keyBoardKey);
      if (word[i].toLowerCase() == winWord[i].toLowerCase()) {
        console.log('Green');
        //make it green
        element.classList.add('greenClr');
        keyBoardKey.classList.add('greenClr');
      } else if (winWord.includes(word[i].toLowerCase())) {
        console.log('Yellow');
        //make it yellow
        element.classList.add('yellowClr');
        keyBoardKey.classList.add('yellowClr');
      } else {
        console.log('Grey');
        //make it gray
        element.classList.add('greyClr');
        keyBoardKey.classList.add('greyClr');
      }
    }
    rowNumber++;
    colNumber = 0;
  }
};
