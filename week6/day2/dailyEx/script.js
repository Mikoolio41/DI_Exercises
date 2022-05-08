const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

// Create an array using forEach that contains all the usernames from the gameInfo array,
// add an exclamation point(ie. “!”) to the end of every username.
// The new array should look like this :
// let usernames = ["john!", "becky!", "susy!", "tyson!"]

let usernames = []
gameInfo.forEach((val) => usernames.push(val.username + "!"));

console.log(usernames);


// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
//  Use the ternary operator
// The new array should look like this :

// let winners = ["becky", "susy"]

let winners = []
gameInfo.forEach((val) => (val.score > 5) ? winners.push(val.username) : "");
console.log(winners);



// 3. Find and display the total score of the users. (Hint: The total score is 71)

let totalScore = gameInfo.reduce((acc, currentVal) => acc + currentVal.score, 0);
console.log(totalScore);