const sentence = 'This dinner is not so bad';
const wordNot = sentence.slice(sentence.indexOf('not'), sentence.indexOf('bad') + 3);
console.log(wordNot)

const wordBad = sentence.slice(sentence.indexOf('bad'), sentence.indexOf('bad') + 3);
console.log(wordBad)

console.log(sentence.search(wordNot))
console.log(sentence.search(wordBad))

if (sentence.search(wordNot) < sentence.search(wordBad) && sentence.includes('not')) {
    const newSentence = sentence.replace(wordNot, 'good')
    console.log(newSentence)
} else {
    console.log(sentence)
}