import dictionaryArray from './lib/dictionary.js'

document.addEventListener('DOMContentLoaded', () => {

  // set up file reader http://www.javascripture.com/FileReader
  let word = "hangman";
  let found = false;
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

  // click event listener
  let handleClick = (event) => {

    let buttonGuess;
    if (event.target.id) {
      buttonGuess = event.target.id;
      guessArray.push(buttonGuess);
    }

    if (buttonGuess) {
      handleLetter(buttonGuess);
    };

  //end of button click event listener
  };

  // render list of alphabet buttons
  let buttonMaker = function () {
    let makeButtons = document.getElementById('buttons');
    let eachLetter = document.createElement('ul');

    for (let i = 0; i < alphabet.length; i++) {
      let list = document.createElement('button');
      list.id = alphabet[i];
      list.innerHTML = alphabet[i];
      list.name = "button-letters";
      list.addEventListener("click", handleClick, false);
      makeButtons.appendChild(eachLetter);
      eachLetter.appendChild(list);
    }
  }

  // invoke the buttonMaker
  buttonMaker();

  let body = document.querySelector('body');
  let guessArray = [];
  let answerArray = [];
  let guessDisplay = document.querySelector('.guess-display');

  // handle each letter, whether it is a click or a press
  let handleLetter = function (newestGuess) {

    guessDisplay.innerHTML = `You guessed: ${newestGuess || "-"}`;

    //store the answers
    for (let i = 0; i < word.length; i++) {
      if (word[i] === newestGuess) {
        answerArray.push(i);
      }
    }

    document.getElementsByName(newestGuess).forEach ( (element) => {
      element.classList.add("flipped");
    })

    let highlightButton = document.getElementById(newestGuess);

    if (highlightButton) {
      highlightButton.classList.add("guessed")
    };

    if word.length === answerArray.length {
      found = true;
    }

  }


  // listener for keyboard inputs
  body.onkeydown = (event) => {
    if ( !event.metaKey ) {
      event.preventDefault();
    }

    let newestGuess;
    if (letters[event.keyCode]) {
      newestGuess = letters[event.keyCode];
      guessArray.push(newestGuess);
    }
    handleLetter(newestGuess);
  //end of keypress event listener
  };


  // does not actually focus keyboard for mobile
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
    found = false;
    hangman();
    }
  }
  //render reset button event listener
  let resetButton = document.getElementsByClassName("reset-button");
  resetButton[0].addEventListener("click", resetWord, false);

//end of doc, end of document loaded listener
});
