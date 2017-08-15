## Hangman - A browser based word game

### Background

Hangman is a Victorian era word game of very obscure origin. It is sometimes (and much more rarely) also known as Gallows.
In keeping with this theme, my rendition of Hangman is in black and white. However, for this version, I wished to remove most of this treasured game's ghastly trappings and focus on a clean, elegant, pleasant to use interface. It is designed to be vaguely reminiscent of the original command line games played on a Tandy 1000, now rendered at full browser-width in a responsive format.

I made this game as a demonstration of the power of the new CSS3 card flips. You can simply press your keyboard or tap or press the keys on the screen to reveal successful guesses. The resulting animation is handled by changing the CSS state with JavaScript, once triggered the CSS handles the animation.

### Features

- [ ] You may guess a word chosen by the computer, who acts as judge, jury and executioner.
- [ ] Words are selected randomly from a vast 40,000 word dictionary.
- [ ] You can reset the game and get a new word at any point.
- [ ] Your letters pressed are held tabbed down in the online keyboard display, until you reset the game.
- [ ] Your score is tracked, but no penalties are assessed for missing letters.
- [ ] Your most recent guess is prominently displayed, just above the online keyboard.
- [ ] The size of the blanks and letters for each word are dynamically set by the length of the word chosen.

![Hangman](/docs/images/Hangman.png)

### How It Was Crafted

The game itself is a single immersive browser experience, mostly in black with an animated word interface at the center.
Input comes from the user keyboard. This works by tying JavaScript event listeners to the entire window. I then added an onscreen set of buttons for each letter of the alphabet to display previous guesses in a pleasing and familiar format. I refactored my event handlers and the attributes of the HTML fields to employ the same event handler assigned to watch for input from the user's keyboard. Now, both buttons on the screen and keys on keypads will properly fire the animations and render the letters.

### Architecture and Technologies

I executed this project with the following technologies and constraints:

- A game engine written entirely in vanilla JavaScript using direct DOM manipulation and event listeners, without jQuery
- Advanced CSS animation, rendering each letter as a flippable card
- The game is housed in a single HTML5 semantic webpage
- Webpack was used in the rapid development of this project, and it also allows for the import of an array of plain text words with 40,000 unique entries
- I structured the words for import as a JavaScript array, using a one time Ruby script to format the original text file

### Future Directions
I am pretty psyched about building these two future feature extensions for the game:
- [ ] Two player mode, which must be particularly mobile friendly, allowing one player to set a word and hand their device to their partner to guess
- [ ] Internationalization and user extensible dictionaries. This feature idea kind of fascinates me, I would love to allow for both a voting system to add words and whole-scale upload of dictionaries with multi-lingual support.

### [HangManGame.co](http://www.hangmangame.co)
