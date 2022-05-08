// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }

// // run in the console:
// // q1() = 3

// // #2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }

// // run in the console:
// // q22() = 0
// // q2() = 5
// // q22() = 5

// // #3
// function q3() {
//     window.a = "hello";
// }

// function q32() {
//     alert(a);
// }

// // run in the console:
// // q3() = hello
// // q32() = hello

// // #4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }

// // run in the console:
// // q4() = test

// // #5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// // alert(a); 5

// 2 ternary operator

// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10,
//  else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// const winBattle = () => true;

// let experiencePoints = winBattle() ? 10 : 1;

// console.log(experiencePoints);

// 3
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not.
//  Use ternary operator
// Check out the example below to see the expected output


// const isString = (str) => typeof str == "string" ? true : false

// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// 4 Colors

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// // Write a JavaScript program that displays the colors in the following order :
// //  “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// // Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"),
// //  else console.log("No...")
// // Hint : Use the array methods taught in class. Look at the lesson Array Methods.

// colors.forEach((val, index) => {
//     console.log(`${index + 1}# choice is ${val}.`)
// })

// colors.includes("Violet") ? console.log("yeah") : console.log("no..")

// 5 Colors #2

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th", "st", "nd", "rd"];

// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.”
//  “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

// color.forEach((val, index) => { 
//     if (index >= 3) {
//         console.log(`${index + 1}${ordinal[0]} choice is ${val}.`)
//     } else {
//         console.log(`${index + 1}${ordinal[index + 1]} choice is ${val}.`)
//     }
// })
// color.forEach((val, index) => index >= 3 ? console.log(`${index + 1}${ordinal[0]} choice is ${val}.`)
//     : console.log(`${index + 1}${ordinal[index + 1]} choice is ${val}.`))

// 6 bank details

// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) 
// so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount = 10000
const vat = 0.17
let details = ["+200", "-100", "+146", "+167", "-2900"]

bankAmount += details.reduce((acc, currentVal) => acc + Number(currentVal) * Number(vat) + Number(currentVal), 0)

console.log(bankAmount);