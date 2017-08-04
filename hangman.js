import dictionaryArray from './lib/dictionary.js'

document.addEventListener('DOMContentLoaded', () => {

  // set up file reader http://www.javascripture.com/FileReader
  let word = "hangman";
  word = dictionaryArray[Math.floor(Math.random() * dictionaryArray.length)];

  // check case, just in case
  word = word.toLowerCase();

  const hangman = () => {
    let guessZone = document.getElementsByClassName('guess')[0];

    for (let i = 0; i < word.length; i++) {
      let addLetter = document.createElement('div');
      addLetter.setAttribute('class', 'flip-container')
      // addLetter.setAttribute('ontouchstart', "this.classList.toggle('hover');");
      addLetter.setAttribute('id', i);
      let flipper = document.createElement('div');
      flipper.setAttribute('class', 'flipper');
      flipper.setAttribute('name', word[i]);

      flipper.style.fontSize = `${Math.floor((100 / word.length)) < 18 ? Math.floor((100 / word.length)): 18 }vmin`;

      console.log(`${Math.floor((100 / word.length))}vmin`);
      addLetter.appendChild(flipper);
      let blankFace = document.createElement('div');
      blankFace.setAttribute('class', 'front letters');
      blankFace.innerHTML = "_";
      flipper.appendChild(blankFace);
      let letterFace = document.createElement('div');
      letterFace.setAttribute('class', 'back letters');
      letterFace.innerHTML = word[i];
      flipper.appendChild(letterFace);
      guessZone.appendChild(addLetter);
    }
  }
  hangman();

// select the right fullscreen method for each browser
const toggleFullScreen = () => {
  let element = document.getElementById("fullscreen");
  if (element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

let fullScreenButton = document.getElementsByClassName("full-screen-button");
fullScreenButton[0].addEventListener("click", toggleFullScreen, false);

let toggleText = (element) => {
  if (element.innerHTML === "Go Full Screen") {
    element.innerHTML = "Exit Full Screen"
  } else if (element.innerHTML === "Exit Full Screen") {
    element.innerHTML = "Go Full Screen"
  }
}


// writing to the page
document.getElementById("demo").innerHTML = "You may guess a letter <br /> Simply type with your keyboard"

// list of keyboard codes for letters
let letters = {
  65 : "a",
  66 : "b",
  67 : "c",
  68 : "d",
  69 : "e",
  70 : "f",
  71 : "g",
  72 : "h",
  73 : "i",
  74 : "j",
  75 : "k",
  76 : "l",
  77 : "m",
  78 : "n",
  79 : "o",
  80 : "p",
  81 : "q",
  82 : "r",
  83 : "s",
  84 : "t",
  85 : "u",
  86 : "v",
  87 : "w",
  88 : "x",
  89 : "y",
  90 : "z"
}

// filter method so array of guesses does not retain repeat guesses
const uniquify = (array) => {
  let result = array.filter(function() {
    let seen = {};
    return function(element, index, array) {
      return !(element in seen) && (seen[element] = 1);
    };
  }());
  return result.sort();
}

let alphabet = Object.keys(letters).map( (key) => letters[key] );

// render list of alphabet buttons
let buttonMaker = function () {
  let makeButtons = document.getElementById('buttons');
  let eachLetter = document.createElement('ul');

  for (let i = 0; i < alphabet.length; i++) {
    let list = document.createElement('button');
    list.id = alphabet[i];
    list.innerHTML = alphabet[i];
    list.name = "button-letters";
    makeButtons.appendChild(eachLetter);
    eachLetter.appendChild(list);
  }
}

// invoke the buttonMaker
buttonMaker();

// listener for keyboard inputs
let body = document.querySelector('body');
let guessArray = [];
let answerArray = [];
let guessDisplay = document.querySelector('.guess-display');

body.onkeydown = (event) => {
  if ( !event.metaKey ) {
    event.preventDefault();
  }

  let newestGuess;
  if (letters[event.keyCode]) {
    newestGuess = letters[event.keyCode];
    guessArray.push(newestGuess);
  }

  document.querySelector('.developer-display').innerHTML = event.keyCode;

  guessDisplay.innerHTML = `You guessed: ${newestGuess || "-"}`;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === newestGuess) {
      answerArray.push(i);
    }
  }

  document.getElementsByName(newestGuess).forEach ( (element) => {
    element.classList.add("flipped");
  })

  // classList.toggle("flipped")
  // console.log(newestGuess);
  // console.log(document.getElementsByName(newestGuess));

  // let guessRecords = document.getElementById("guess-array");
  // guessRecords.innerHTML = String(uniquify(guessArray));

  let highlightButton = document.getElementById(String(letters[event.keyCode]));

  if (highlightButton) {
    highlightButton.classList.add("guessed")
  };

//end of keypress event listener
  };

  // does not focus keyboard for mobile
  // document.getElementById("hidden-input").focus();


  const resetWord = () => {
    let buttonsToReset = document.getElementsByName("button-letters");

    if (buttonsToReset) {
      buttonsToReset.forEach ((button) => {
        button.classList.remove("guessed");
      });
    word = dictionaryArray[Math.floor(Math.random() * dictionaryArray.length)];
    let resetZone = document.getElementsByClassName('guess')[0];
    resetZone.innerHTML = "";
    guessDisplay.innerHTML = "You guessed: -"
    hangman();
    }
  }
  let resetButton = document.getElementsByClassName("reset-button");
  resetButton[0].addEventListener("click", resetWord, false);


//end of doc
});
