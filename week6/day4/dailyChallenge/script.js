let client = "John";

let groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        payed: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}
// Hint: To do this daily challenge, take a look at today’s
//  lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs
//  the 3 fruits from the groceries object.
//  Use the forEach method.

const displayGroceries = () => groceries.fruits.forEach((element) => console.log(element));
displayGroceries();


// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable.
//  (Tip : make the user variable equal to the client variable)

const cloneGroceries = () => {
    let user = client
    client = "Betty"
    let shopping = groceries
    shopping.totalPrice = "35$"
    shopping.other.payed = false

}
cloneGroceries();

// Change the client variable to “Betty”. Will we also see this modification
//  in the user variable ? Why ?

// assigning a variable inside a function means that the scope of the variable is only inside the function. So having assigned "betty" in the global scope the clients name would be changed from John to Betty.

// In the function, create a variable named shopping that is a copy of the
//  groceries object.
//  (Tip : make the shopping variable equal to the groceries variable)
// Change the value of the totalPrice key to 35$. Will we also see this
//  modification in the shopping object ? Why ?

// it'll change because it's a pass by reference, meaning it did not create a clone of the original groceries obj

// Change the value of the payed key to false. Will we also see this
//  modification in the shopping object ? Why ?

// it would change the original groceries variable, same as before, due to pass by reference


// Invoke the cloneGroceries function.