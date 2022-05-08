// Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (a, b) => a + b
console.log(sum(3, 4));


// Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// function convert(kg) { return kg * 1000 }

// const convert = function (kg) { return kg * 1000 }

// // declared functions get hoisted, expressed functions do not, and their variables remain inside the scope

// const convert = (kg) => kg * 1000
// console.log(convert(34));


// Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name,
//  geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>,
//  and married to <partner's name> with <number of children> kids."


(function (numChildren, partner, location, job) {
    (numChildren = 3), (partner = "mika"), (location = "usa"), (job = "programmer");
    document.write(`<div>` + `You will be a ${job} in ${location},
 and married to ${partner} with ${numChildren} kids.` + `</div>`)
})();



// Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking function that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the navbar, displaying the name of the user and his profile picture.


// (function (userName) {
//     userName = prompt("please enter your name");
//     let newDiv = document.createElement("div")
//     let userPic = document.createElement("img")
//     userPic.src = "./pics/depositphotos_21568765-stock-photo-casual-businessman-pointing.jpg"
//     document.querySelector("nav").appendChild(newDiv)
//     document.querySelector("div").appendChild(userPic)
//     let welcome = document.createTextNode(userName)
//     document.querySelector("div").appendChild(welcome)
// }())




// Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice,
//  containing <first ingredient>, <second ingredient>, <third ingredient>".

// // Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// const makeJuice = (sizeDrink) => {
//     const addIngredients = (first, second, third) => {
//         (first = "apple"), (second = "lime"), (third = "spearmint");
//         document.write(`The client wants a ${sizeDrink} juice, containing ${first}, ${second}, ${third}.`)
//     }
//     addIngredients()
// }
// makeJuice("large");

// // Part II:
// // In the makeJuice function, create an empty array named ingredients.

// // The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// // Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice,
//  containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// // The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function.
//  Finally, invoke the makeJuice function in the global scope.


const makeJuice = (sizeDrink) => {
    let ingredients = [];
    const addIngredients = (first, second, third) => {
        ingredients.push(first, second, third);
    }
    addIngredients("apple", "lime", "spearmint");
    addIngredients("orange", "strawberry", "banana");
    const displayJuice = () => {
        document.write(
            "<p>" + `The client wants a ${sizeDrink} juice, containing ` + "</p>"
        );
        document.write(
            "<p>" +
            ingredients.forEach(function (value) {
                document
                    .querySelector("p")
                    .insertAdjacentText("beforeend", `${value}, `);
            }) +
            "</p>"
        );
    };
    return displayJuice();
}
makeJuice("large");





