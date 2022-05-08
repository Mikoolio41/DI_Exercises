// ex 1 //
// console.log(5 >= 1) //true
// console.log(0 === 1) //false
// console.log(4 <= 1)//false
// console.log(1 != 1)//false
// console.log("A" > "B")//false
// console.log("a" > "A")//true
// console.log("b" < "A")//false
// console.log(true === false)//false
// console.log(true != true)//false

// // ex 2 //

// let string1 = prompt("Insert numbers separated by commas", "");

// let numArray = string1.split(",").map(Number);

// let sum = numArray.reduce(function (a, b) {
//   return a + b;
// }, 0);

// console.log(sum);

// ex 3 //
// let userSentence = prompt('enter a sentence containing the word "nemo" in it');

// let stringArray = userSentence.split(" ");

// let positionNemo = stringArray.indexOf("nemo");

// if (positionNemo >= 0) {
//   alert("I found Nemo at word number " + (positionNemo + 1));
// } else {
//   alert("I can't find Nemo");
// }

// ex 4 //

let number = Number(prompt("Please enter a number"));
let str = "";
if (number < 2) {

 alert("boom");
} else if (number > 2) {
  str = `b${"o".repeat(number)}m`;
  if (number % 5 == 0 && number % 2 == 0) {
    str = str.toUpperCase();
    str = str.concat("!");
  } else if (number % 5 == 0) str = str.toUpperCase();
  else if (number % 2 == 0) str = str.concat("!");
  alert(str);
}