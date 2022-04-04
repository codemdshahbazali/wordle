const gameBoardRows = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

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

const listOfWords = [
  'Years',
  'Women',
  'Means',
  'Taken',
  'Times',
  'Known',
  'Court',
  'Words',
  'Cases',
  'Going',
  'Party',
  'Using',
  'Based',
  'Black',
  'Asked',
  'Shown',
  'Began',
  'Seems',
  'Apply',
  'Awful',
  'Above',
  'Apple',
  'Award',
  'Angry',
  'Album',
  'Avoid',
  'Ahead',
  'Allow',
  'Alive',
  'Aware',
  'After',
  'Adopt',
  'Admit',
  'Adapt',
  'Among',
  'Apart',
  'Abuse',
  'Actor',
  'About',
  'Along',
  'Again',
  'Aside',
  'Argue',
  'Agent',
  'Agree',
  'Angle',
  'Anger',
  'Asset',
  'Block',
  'Bunch',
  'Bench',
  'Beach',
  'Break',
  'Badly',
  'Brown',
  'Brush',
  'Buyer',
  'Brief',
  'Below',
  'Birth',
  'Blame',
  'Basic',
  'Bible',
  'Bring',
  'Broad',
  'Begin',
  'Build',
  'Being',
  'Blade',
  'Bread',
  'Brand',
  'Board',
  'Blind',
  'Blood',
  'Brain',
  'Basis',
  'Cheek',
  'Clock',
  'Chief',
  'Crack',
  'Coach',
  'Couch',
  'Cheap',
  'Cycle',
  'Catch',
  'Child',
  'Crowd',
  'Climb',
  'Chain',
  'Cover',
  'Crash',
  'Craft',
  'Civil',
  'Chart',
  'Chase',
  'Chair',
  'Chest',
  'Carry',
  'Claim',
  'Cream',
  'Crime',
  'Cable',
  'Cabin',
  'Cloud',
  'Could',
  'Cause',
  'Cross',
  'Clear',
  'Count',
  'Color',
  'Coast',
  'Close',
  'Class',
  'Clean',
  'Depth',
  'Drink',
  'Draft',
  'Daily',
  'Dirty',
  'Delay',
  'Death',
  'Drive',
  'Doubt',
  'Drama',
  'Dream',
  'Dance',
  'Dress',
  'Equal',
  'Exact',
  'Extra',
  'Exist',
  'Empty',
  'Every',
  'Enemy',
  'Eight',
  'Entry',
  'Earth',
  'Early',
  'Essay',
  'Event',
  'Elect',
  'Eager',
  'Error',
  'Elite',
  'Enter',
  'Fight',
  'Faith',
  'Fully',
  'Fresh',
  'Forth',
  'Flesh',
  'Funny',
  'Fewer',
  'Favor',
  'Frame',
  'Force',
  'Focus',
  'Fence',
  'Fiber',
  'Flame',
  'Field',
  'Found',
  'Final',
  'First',
  'Floor',
  'Fault',
  'Front',
  'Fruit',
  'FALSE',
  'Float',
  'Ghost',
  'Given',
  'Glove',
  'Grave',
  'Group',
  'Guard',
  'Guide',
  'Grand',
  'Grade',
  'Grant',
  'Guest',
  'Guess',
  'Giant',
  'Glass',
  'Green',
  'Great',
  'Grain',
  'Grass',
  'Honey',
  'Habit',
  'Human',
  'Humor',
  'Hello',
  'Horse',
  'Hotel',
  'House',
  'Heart',
  'Honor',
  'Index',
  'Imply',
  'Image',
  'Ideal',
  'Inner',
  'Issue',
  'Joint',
  'Knife',
  'Lunch',
  'Light',
  'Laugh',
  'Leave',
  'Layer',
  'Lover',
  'Lower',
  'Level',
  'Local',
  'Limit',
  'Lemon',
  'Labor',
  'Label',
  'Legal',
  'Large',
  'Loose',
  'Match',
  'Maybe',
  'Maker',
  'Might',
  'Month',
  'Mouth',
  'Movie',
  'Mayor',
  'Marry',
  'Money',
  'Music',
  'Model',
  'Media',
  'Metal',
  'Mouse',
  'Mount',
  'Motor',
  'Moral',
  'Meter',
  'Minor',
  'Newly',
  'Naked',
  'Night',
  'Nerve',
  'Never',
  'North',
  'Novel',
  'Noise',
  'Nurse',
  'Offer',
  'Occur',
  'Ought',
  'Often',
  'Other',
  'Owner',
  'Ocean',
  'Order',
  'Onion',
  'Porch',
  'Pitch',
  'Patch',
  'Prove',
  'Power',
  'Photo',
  'Phone',
  'Phase',
  'Proof',
  'Peace',
  'Price',
  'Prime',
  'Place',
  'Paper',
  'Piece',
  'Pride',
  'Proud',
  'Pound',
  'Print',
  'Prior',
  'Press',
  'Point',
  'Plate',
  'Plant',
  'Plane',
  'Pilot',
  'Piano',
  'Pause',
  'Panel',
  'Paint',
  'Relax',
  'Reply',
  'Reach',
  'Rough',
  'Ready',
  'Right',
  'Rapid',
  'River',
  'Refer',
  'React',
  'Round',
  'Radio',
  'Range',
  'Ratio',
  'Route',
  'Rural',
  'Shake',
  'Stick',
  'Stock',
  'Stuff',
  'Shelf',
  'Staff',
  'Speak',
  'Smoke',
  'Shift',
  'Sharp',
  'Shape',
  'Sweep',
  'Shade',
  'Sight',
  'Shrug',
  'Space',
  'Scope',
  'Skill',
  'Stake',
  'Study',
  'Swing',
  'Sweet',
  'Story',
  'Spend',
  'Solve',
  'Sorry',
  'South',
  'Swear',
  'Speed',
  'Style',
  'Slave',
  'Short',
  'Sheet',
  'Share',
  'Shine',
  'Shirt',
  'Shoot',
  'Shall',
  'Shore',
  'Seven',
  'Shell',
  'Serve',
  'Shout',
  'Sauce',
  'Split',
  'Scale',
  'Super',
  'Scene',
  'Score',
  'Strip',
  'Storm',
  'Sport',
  'Smell',
  'Sleep',
  'Smart',
  'Small',
  'Slice',
  'Smile',
  'Since',
  'Stand',
  'Sugar',
  'Sound',
  'Slide',
  'Stage',
  'Solid',
  'Salad',
  'Sales',
  'Sense',
  'Solar',
  'Stair',
  'State',
  'Steal',
  'Steel',
  'Still',
  'Stone',
  'Store',
  'Start',
  'Think',
  'Thank',
  'Track',
  'Throw',
  'Trick',
  'Truck',
  'Theme',
  'Touch',
  'Teach',
  'Twice',
  'Tough',
  'Tight',
  'Today',
  'Third',
  'Thing',
  'Topic',
  'Tower',
  'Truly',
  'Truth',
  'Their',
  'Tooth',
  'There',
  'Three',
  'These',
  'Those',
  'Terms',
  'Troop',
  'Tribe',
  'Table',
  'Trace',
  'Tired',
  'Trend',
  'Trade',
  'Taste',
  'Trust',
  'Total',
  'Title',
  'Train',
  'Trial',
  'Trail',
  'Treat',
  'Upper',
  'Uncle',
  'Urban',
  'Under',
  'Union',
  'Until',
  'Usual',
  'Voice',
  'Video',
  'Value',
  'Virus',
  'Visit',
  'Vital',
  'Voter',
  'Watch',
  'Weigh',
  'Works',
  'Whose',
  'Worth',
  'Whole',
  'White',
  'While',
  'Where',
  'Wheel',
  'Worry',
  'Woman',
  'Would',
  'Wound',
  'World',
  'Wrong',
  'Water',
  'Write',
  'Waste',
  'Youth',
  'Yield',
  'Young',
  'Yours',
  'Serai',
  'Arles',
  'Earls',
  'Lares',
  'Laser',
  'Reals',
  'Alien',
  'Aisle',
  'Raise',
  'Arise',
  'Alone',
  'Learn',
  'Leans',
  'Lanes',
  'Later',
  'Alter',
  'Alert',
  'Tales',
  'Slate',
  'Least',
  'Atone',
  'Snare',
  'Arose',
  'Orate',
  'Tears',
  'Stare',
  'Rates',
  'Snail',
  'Rails',
  'Quick',
  'Crazy',
  'Which',
  'Check',
  'Knock',
  'Happy',
  'Enjoy',
  'Dozen',
  'Thick',
  'Shock',
  'Seize',
  'Quote',
  'Quite',
  'Quiet',
  'Major',
  'Lucky',
  'Juice',
  'Judge',
  'Heavy',
  'Fifty',
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
    if (colNumber > 0) checkWord();
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
          }
        }, 300 * i);
      }

      return;
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
              if (rowNumber === 6) {
                gameMessage.textContent = winWord.toUpperCase();
                gameMessage.classList.add('animate-message');
                myModal.show();
                modelText.classList.add('text-danger');
                modelText.textContent = 'Game Over. Try Again!!!';
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
