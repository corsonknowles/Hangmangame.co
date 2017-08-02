document.addEventListener('DOMContentLoaded', () => {

  // set up file reader http://www.javascripture.com/FileReader


  // let fs = require("fs");
  // let text = fs.readFileSync("./lib/dictionary.txt").toString('utf-8');
  // let textByLine = text.split("\n")

  let guessedLetters = [];

  let word = "andy";

  let hangman = () => {
    let guessZone = document.getElementsByClassName('guess')[0];

    for (let i = 0; i < word.length; i++) {
      let addLetter = document.createElement('div');
      addLetter.setAttribute('class', 'flip-container')
      addLetter.setAttribute('ontouchstart', "this.classList.toggle('hover');");
      addLetter.setAttribute('id', i);
      let flipper = document.createElement('div');
      flipper.setAttribute('class', 'flipper');
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


// document.querySelector("#myCard").classList.toggle("flip")


// Find the right method, call on correct element
let toggleFullScreen = (element) => {
  if (element === undefined) {
    element = document.getElementsByTagName("html")[0];
  }
  console.log(Document.fullScreenEnabled);
  if (Document.fullScreenEnabled) {
    Document.exitFullscreen()
    console.log("left full screen");
  } else if (element.requestFullScreen) {
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




// launchFullScreen(document.getElementById("gameElement")); // make any individual element fullscreen


// writing to the page
// document.getElementById("demo").innerHTML = "You may guess a letter. Simply type with your keyboard"


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
  document.querySelectorAll(newestGuess).classList.toggle("flip")

};

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



class Hangman {
  constuctor (guesser, referee) {
    this.guesser = guesser;
    this.referee = referee;
    this.guesses = [];

  }

  setup () {

  }
}


// class Hangman
//   attr_reader :guesser, :referee, :board
//
//   def initialize(players)
//     @guesser = players[:guesser]
//     @referee = players[:referee]
//     @guesses = []
//   end
//
//   def setup
//     @board = Array.new(referee.pick_secret_word)
//     guesser.register_secret_length(board.length)
//     display
//     puts "A word that's #{board.length} characters long"
//   end
//
//   def take_turn
//     new_guess = guesser.guess(board)
//     record_guess(new_guess)
//     array = referee.check_guess(new_guess)
//     update_board(new_guess, array)
//     guesser.handle_response(new_guess, array)
//     display
//   end
//
//   def record_guess(guess)
//     @guesses << guess
//   end
//
//   # raise "That's not just one character" if input.length > 1 rescue check_guess
//   # raise "That's empty" if input.length == 0 rescue check_guess
//
//   def update_board(new_guess, array)
//     @board.each_with_index do |e, i|
//       @board[i] = new_guess if array.include?(i)
//     end
//   end
//
//   def display
//     output = board.map { |e| e.nil? ? e = "_" : e }
//     ouptut = output.join(" ")
//     puts ouput
//     puts
//     puts "Guesses: #{@guesses.sort.join(" ")} "
//     puts
//   end
//
//   def play
//     setup
//     count = 1
//     until finished? || count > 7
//       copy = board.join("")
//       take_turn
//
//       if @board.join("") == copy
//         count += 1
//         puts HANGMAN_HASH[count]
//       end
//
//     end
//     conclusion
//     logger
//   end
//
//   def finished?
//     board.none?(&:nil?)
//   end
//
//   def conclusion
//     word = referee.word ||= board.join("")
//     if board.count(nil) > 0 && referee.word == nil
//       puts "They ran out of guesses. The letters they got were #{word}"
//     else
//       puts "That's game folks. The word was #{word}"
//     end
//   end
//
//   def logger
//     file_name = 'hangman_log.txt'
//     File.open(file_name, "a+") do |f|
//       f.puts Time.now
//       f.puts "Guesses: #{@guesses.sort.join(" ")} "
//       f.puts "Referee word: #{referee.word}"
//       f.puts "board.join: #{board.join("")}"
//       f.puts ""
//     end
//   end
//
// end
//
// class HumanPlayer
//   attr_reader :word_size, :guess
//
//   def pick_secret_word
//       puts "How many characters in your word?"
//       @word_size = $stdin.gets.chomp.to_i
//   end
//
//   def register_secret_length(length)
//     @word_size
//   end
//
//   def guess(board)
//     puts "Pick a letter a to zed. Thanks!"
//     @guess = $stdin.gets.chomp
//   end
//
//   def check_guess(input)
//     input ||= guess
//     result = []
//     puts input
//     puts "The other player guessed #{input}. Is that one of the letters?"
//     puts "Please input the places it appears, as a list,\
// like 1, 3, 12 or even without commas like 2 4 11"
//     reply = $stdin.gets.chomp
//     unless reply[0] == "n" || reply == ""
//       reply.split(" ").each {|entry| result << (entry.to_i - 1) unless (entry == ",") or entry == " "}
//     end
//     result
//   end
//
//   def handle_response(letter, array)
//     # p letter
//     # p array
//   end
//
//   def word
//     nil
//   end
//
//   def word=(word)
//     nil
//   end
//
//
// end
//
// class ComputerPlayer
//   attr_reader :word_size, :dictionary, :word, :candidate_words
//
//   def self.input_dictionary
//     File.readlines('lib/dictionary.txt').map {|e| e.chomp}
//   end
//
//   def initialize(dictionary)
//     @dictionary = dictionary  # an array
//   end
//
//   #read in a random line from dictionary file, use word on that line, take its length
//   # set equal to word size
//   def pick_secret_word
//     @word = dictionary[rand(dictionary.length - 1)]
//     @word_size = word.length
//   end
//
//   def register_secret_length(length)
//     @candidate_words = dictionary.select {|e| e.length == length}
//     @word_size = length
//   end
//
//   def guess(board)
//     # (arr - board).sample
//     hash = hash_count(candidate_words)
//     arr = ('a'..'z').to_a
//     (arr - board).sort_by {|e| hash[e]}.last
//   end
//
//   def hash_count(input)
//     hash = Hash.new(0)
//     input.each do |word|
//       word.chars.each do |letter|
//         hash[letter] += 1
//       end
//     end
//     hash
//   end
//
//   # def largest_key_by_value(hash)
//   #   # p (hash.max_by{|k,v| v})[-1].to_s
//   #   hash.max_by {|k,v| v}.first
//   # end
//
//   def check_guess(guess)
//     result = []
//     word.chars.each_with_index do |e, i|
//       result << i if e == guess  # a single letter, multiletter guesses ignored
//     end
//     result
//   end
//
//   def handle_response(letter, array)
//
//     if array.length > 0
//       @candidate_words.select! do |word|
//         array.all? { |index| word[index] == letter } \
//          && word.count(letter) == array.length
//       end
//
//     else
//       @candidate_words.reject! do |e|
//         e.include?(letter)
//       end
//     end
//
//   end
//
// end
//
// HANGMAN_HASH = {
//   1 =>["
//      +---+
//      |   |
//          |
//          |
//          |
//          |
//   ========="],
//   2 => ["
//     +---+
//     |   |
//     O   |
//         |
//         |
//         |
//   ========="],
//   3 => ["
//     +---+
//     |   |
//     O   |
//     |   |
//         |
//         |
//   ========="],
//   4 => ["
//     +---+
//     |   |
//     O   |
//    /|   |
//         |
//         |
//   ========="],
//   5 => ["
//     +---+
//     |   |
//     O   |
//    /|\\  |
//         |
//         |
//   ========="],
//   6 => ["
//     +---+
//     |   |
//     O   |
//    /|\\  |
//    /    |
//         |
//   ========="],
//  7 => ["
//     +---+
//     |   |
//     O   |
//    /|\\  |
//    / \\  |
//         |
//   ========="]
// }
//
// if __FILE__ == $PROGRAM_NAME
//   dictionary = ComputerPlayer.input_dictionary
//   players = {
//     guesser: HumanPlayer.new,
//     referee: ComputerPlayer.new(dictionary)
//   }
//
//   puts "Would you like to be the one who guesses the word?"
//   answer = gets.chomp
//   if answer[0] != "y"
//     players = { guesser: ComputerPlayer.new(dictionary),
//       referee: HumanPlayer.new
//     }
//   end
//   g = Hangman.new(players)
//   g.play
//
// end

});
