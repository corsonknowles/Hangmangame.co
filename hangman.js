import dictionaryArray from './lib/dictionary.js'

document.addEventListener('DOMContentLoaded', () => {

  // set up file reader http://www.javascripture.com/FileReader
  let word = "conceptual";
  word = dictionaryArray[Math.floor(Math.random() * dictionaryArray.length)];

  // var file = Parse.link('lib.dictionary.txt');
  // var content = file.read().getContent();

  // function FileHelper() {
  //   FileHelper.readStringFromFileAtPath = function () {
  //       var request = new XMLHttpRequest();
  //       request.open("GET", "lib/dictionary.txt", false);
  //       request.send(null);
  //       var returnValue = request.responseText;
  //
  //       return returnValue;
  //   }
  // }
  //
  // var text = FileHelper.readStringFromFileAtPath ( "mytext.txt" );
  // let textByLine = reader.responseText.split('\n');
  // let rand = textByLine[Math.floor(Math.random() * textByLine.length)];
  // word = rand;

  // let reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');

  // let loadFile = () => {
  //
  //     reader.open('get', 'lib/dictionary.txt', true);
  //     reader.onreadystatechange = displayContents;
  //     reader.send(null);
  //     // displayContents();
  // }
  //
  // let displayContents = () => {
  //
  //     if ( reader.readyState == 4 ) {
  //         let textByLine = reader.responseText.split('\n');
  //         let rand = textByLine[Math.floor(Math.random() * textByLine.length)];
  //         word = rand;
  //         // let element = document.getElementById('main');
  //         // element.innerHTML = reader.responseText;
  //     }
  // }
  //
  // loadFile();
  // displayContents();



  // let xhr = new XMLHttpRequest();
  // xhr.onload = function() {
  //   // console.log(this.responseXML.title);
  //
  //   let textByLine = this.responseXML.split('\n');
  //   let rand = textByLine[Math.floor(Math.random() * textByLine.length)];
  //   word = rand;
  // }
  // xhr.open("GET", "https://raw.githubusercontent.com/corsonknowles/Hangmangame.co/master/lib/dictionary.txt");
  // xhr.responseType = "document";
  // xhr.send();


//   $.ajax({
//     url: 'lib/dictionary.txt'
//   }).then( (data) => (
//   console.log(data);
//   )
// )


  // let fs = require("fs");
  // let text = fs.readFileSync("./lib/dictionary.txt").toString('utf-8');
  // let textByLine = text.split("\n")


//
//   function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
//   }

  // let textByLine = readTextFile("./lib/dictionary.txt");

  // let rand = textByLine[Math.floor(Math.random() * textByLine.length)];
  // word = rand;

  // function get_parameters() {
  //   alert('hi');
  //   let xhr = new XMLHttpRequest();
  //
  //   xhr.addEventListener('readystatechange', (output) => {
  //     if (xhr.readyState === 4) {
  //       let response = xhr.responseText;
  //       let lines = response.split('\n');
  //       let rand = lines[Math.floor(Math.random() * lines.length)];
  //       word = rand;
  //     }
  //   });
  //
  //   xhr.open('GET', './lib/dictionary.txt', true);
  //   xhr.send();
  // }






  let guessedLetters = [];

  // let word = "myriad";
  word = word.toLowerCase();

  let hangman = () => {
    let guessZone = document.getElementsByClassName('guess')[0];

    for (let i = 0; i < word.length; i++) {
      let addLetter = document.createElement('div');
      addLetter.setAttribute('class', 'flip-container')
      // addLetter.setAttribute('ontouchstart', "this.classList.toggle('hover');");
      addLetter.setAttribute('id', i);
      let flipper = document.createElement('div');
      flipper.setAttribute('class', 'flipper');
      flipper.setAttribute('name', word[i]);
      flipper.style.fontSize = `${Math.floor((100 / word.length))}vmin`;
      console.log(`${Math.floor((100 / word.length))}vmin`);
      addLetter.appendChild(flipper);
      let blankFace = document.createElement('div');
      blankFace.setAttribute('class', 'front letters');
      blankFace.innerHTML = "_";
      // blankFace.fontsize = `${Math.floor((30 / word.length))}vmin`;
      flipper.appendChild(blankFace);
      let letterFace = document.createElement('div');
      letterFace.setAttribute('class', 'back letters');
      letterFace.innerHTML = word[i];
      // letterFace.fontsize = `${Math.floor((30 / word.length))}vmin`;
      flipper.appendChild(letterFace);

      guessZone.appendChild(addLetter);


    }
  }

  hangman();


// document.querySelector("#myCard").classList.toggle("flip")


// Find the right method, call on correct element
let toggleFullScreen = () => {
  // if (element === undefined) {
  element = document.getElementsByTagName("body")[0];
  // }
  console.log(Document.allowfullscreen);
  if (Document.allowfullscreen) {
    Document.exitFullscreen()
    console.log("left full screen");
  } else if (element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }

  // document.getElementsByClassName('flipper').forEach ( (element) =>
  //   element.style.fontSize = `${Math.floor((50 / word.length))}vmin`;
  // )
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




// launchFullScreen(document.getElementById("gameElement")); // make any individual element fullscreen


// writing to the page
// document.getElementById("demo").innerHTML = "You may guess a letter. Simply type with your keyboard"

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

// listener for keyboard inputs
let body = document.querySelector('body');
let guessArray = [];

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
  document.querySelector('.guess-display').innerHTML =
    newestGuess || "";

  let answerArray = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === newestGuess) {
      answerArray.push(i);
    }
  }

  document.getElementsByName(newestGuess).forEach ( (element) => {
    console.log(element);
    element.classList.add("flipped");
  })
  // classList.toggle("flipped")
  // console.log(newestGuess);
  // console.log(document.getElementsByName(newestGuess));
  };

});
