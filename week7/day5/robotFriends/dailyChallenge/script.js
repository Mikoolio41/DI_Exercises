// Instructions
// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

// Do we need to consider whitespace?
// Trim whitespace prior to comparison.

const isAnagram = (phrase1, phrase2) => {
  phrase1 = phrase1.trim().toLowerCase().replace(" ", "");
  phrase2 = phrase2.trim().toLowerCase().replace(" ", "");
  let phrase1Array = phrase1.split("").sort();
  let phrase2Array = phrase2.split("").sort();
  console.log(phrase1Array);
  console.log(phrase2Array);

  if (phrase1Array.every((val, index) => val === phrase2Array[index])) {
    console.log("true");
  } else {
    console.log("false");
  }
};
isAnagram("Astronomer", "Moon starer");
