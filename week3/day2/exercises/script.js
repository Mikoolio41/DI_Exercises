// ex 1 //
let sentence = ["my", "favorite", "color", "is", "blue"];
console.log(sentence.join(" "));

// ex 2 //
let word1 = 'mika';
let word2 = 'shir';

let word1slice = word1.slice(2); //ka
let word2slice = word2.slice(0,2); //sh

let wordMSlice = word1.slice(0,2); //mi
let wordSSlice = word2.slice(2); //ir


let newWord1 = 'word2slice' + 'word1slice' //shka
let newWord2 = 'wordMSlice' + 'wordSSlice' // miir

let newWord = word2slice + word1slice + " " + wordMSlice + wordSSlice;

console.log(newWord);

// ex 3 //
const num1 =parseInt(prompt('please enter a number')) ;
const num2 =parseInt(prompt('please enter a second number')) ;

let sum = num1+num2;
let diff = num1-num2;
let prod = num1*num2;
let quot = num1/num2;

alert ("The sum is: " +sum);
alert ("The difference is: " +diff);
alert ("The product is: " +prod);
alert ("The quotient is: " +quot);

