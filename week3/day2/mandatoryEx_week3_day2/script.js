// ex 1 //

let favoriteFood = 'pizza';
let favoriteMeal = 'lunch';
console.log("I eat " + favoriteFood + " at every " + favoriteMeal)

// ex2 //
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]
let myWatchedSeriesSentence = 'black mirror, money heist, the big bang theory'
console.log("I watched", myWatchedSeries.length, "series:", myWatchedSeriesSentence)

myWatchedSeries[2] = 'friends'
myWatchedSeries.push('breaking bad')
myWatchedSeries.splice(0, 1, 'game of thrones')
console.log(myWatchedSeries)

// ex 3 //
let celsius = "40"

console.log(celsius, "celsius is ", celsius/5*9+32, "in fahrenheit")

// ex 4 //
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55, because 34+21 equals 55.
// Actual: 55.

a = 2;

console.log(a+b) //second expression
// Prediction: 23, because the a has changed into 2.
// Actual: 23.
//value of c is 'undefined'.
console.log(c)

console.log(3 + 4 + '5');
// outcome would be "75", because 3 and 4 are numbers and would add up together, 5 is a string and would be added as a string to the sum of 3+4.

// ex 5 //
console.log(typeof(15))
// Prediction: number
// Actual: number

console.log(typeof(5.5))
// Prediction: number
// Actual: number

console.log(typeof(NaN))
// Prediction: number
// Actual: number

console.log(typeof("hello"))
// Prediction: string
// Actual: string

console.log(typeof(true))
// Prediction: boolean
// Actual: boolean

console.log(typeof(1 != 2))
// Prediction: true
// Actual: boolean

console.log("hamburger" + "s")
// Prediction: hamburgers
// Actual: hamburgers

console.log("hamburgers" - "s")
// Prediction: hamburger
// Actual: NaN

console.log("1" + "3")
// Prediction: 13
// Actual: 13

console.log("1" - "3")
// Prediction: -2
// Actual: -2

console.log("johnny" + 5)
// Prediction: johnny5
// Actual: johnny5

console.log("johnny" - 5)
// Prediction: NaN
// Actual: NaN

console.log(99 * "hello")
// Prediction: NaN
// Actual: NaN

console.log(1 != 1)
// Prediction: false
// Actual: false

console.log(1 == "1")
// Prediction: true
// Actual: true

console.log(1 === "1")
// Prediction: true
// Actual: false



// ex 6 //
console.log(5 + "34")
// Prediction: 534
// Actual: 534

console.log(5 - "4")
// Prediction: NaN
// Actual: 1

console.log(10 % 5)
// Prediction: 0.5
// Actual: 0

console.log(5 % 10)
// Prediction: 0.5
// Actual: 5

console.log("Java" + "Script")
// Prediction: JavaScript
// Actual: JavaScript

console.log(" " + " ")
// Prediction: " "
// Actual: " "

console.log(" " + 0)
// Prediction: 0
// Actual: 0

console.log(true + true)
// Prediction: true
// Actual: 2

console.log(true + false)
// Prediction: false
// Actual: 1

console.log(false + true)
// Prediction: false
// Actual: 1

console.log(false - true)
// Prediction: NaN
// Actual: -1

console.log(!true)
// Prediction: false
// Actual: false

console.log(3 - 4)
// Prediction: -1
// Actual: -1

console.log("Bob" - "bill")
// Prediction: NaN
// Actual: NaN
