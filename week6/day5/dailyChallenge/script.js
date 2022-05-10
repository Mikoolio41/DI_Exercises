// Create a function that returns true if all parameters are truthy, and false otherwise.

// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

const test = ["2", 3, true, 4, 5];

const isAllTruthy = (array) => array.every((value) => value === Number(value) && value !== 0 || value === String(value) && value != "" || value === true ? true : false)

console.log(isAllTruthy(test));
