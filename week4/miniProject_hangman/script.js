// Prompt player 1 for a word. . 
let word = prompt(`please type an 8 character word`);
// The word must have a minimum of 8 letters
if (word.length < 8) {
    prompt(`too short, must be at least 8 charcters`);
} 
let starWord = word.length

// Present the word in the console with stars (********).

// At this point continuously prompt player 2 for a letter.


// If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).

// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).

// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.

// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.

// If player 1 wins, display a message that says CONGRATS YOU WIN.






// Mini - Project : Hanging Game;
let guess;
const star = '*';
let i = 0;

const isWinner = (word, newWord) => {
    if (word === newWord) {
        alert('CONGRATS YOU WIN');
        reGame();
    } else if (i < 9) {
        repeat(word, newWord);
    } else {
        alert('SORRY YOU LOSE YOUR CHANCES ARE OVER');
        reGame();
    }
};
const reGame = () => {
    let reGame = confirm('Do you want to play again?');
    if (reGame) {
        startTheGame();
    } else {
        alert('No problem Goodbye');
    }
};

const displayGuessLetters = (word, guess, hiddenWord) => {

    let wordArr = word.split("");
    let hiddenWordArr = hiddenWord.split("");
    if (wordArr.includes(guess)) {
        wordArr.forEach((letter, idx) => {
            if (letter === guess) {
                hiddenWordArr[idx] = guess;
            }
        });
    }
    let newJoinedArr = hiddenWordArr.join("");

    //Display the new word with the correct guess
    console.log(newJoinedArr);
    isWinner(word, newJoinedArr);
};

// Rounds of guessing
const repeat = (word, hiddenWord) => {
    i++;
    console.log(i);
    guess = prompt('Write a letter please');
    while (hiddenWord.includes(guess)) {
        guess = prompt('Already chosen write a different letter please');
    }
    displayGuessLetters(word, guess, hiddenWord);
};

const startTheGame = () => {
    let word = prompt('Please write a word. The word must have a minimum of 8 letters. You Have 10 rounds');
    while (word.length < 8) {
        word = prompt('Forgot? The word must have a minimum of 8 letters');
    }

    //encrypt the word
    let hiddenWord = star.repeat(word.length);
    console.log(hiddenWord);
    repeat(word, hiddenWord);
};
startTheGame();