// ex 1 - information//
// function infoAboutMe() {
//     console.log('My name is Mika');
// }
// infoAboutMe();

// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}.`);
// }

// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

// ex 2 - tips //
// const calculateTip = () => {
//     let bill = Number(prompt('what is the bill'));
//     let tip = 0;
    
//     if (bill < 50) {
//         tip = bill * 0.2
//     } else if (50 <= bill <= 200) {
//         tip = bill * 0.15
//     } else {
//         tip = bill * 0.1
//     }
//     console.log(`the tip is ${tip}, and the final bill is: ${bill+tip}`);
// }

// calculateTip();

// ex 3 - numbers / 23 //
// function isDivisible(divisor = 23) {
//     let sum = 0;
//     let allNumbers = [];
//     for (let i = divisor; i <= 500; i++) {
//         if (i % divisor == 0) {
//             allNumbers.push(i);
//             console.log(i);
//             sum += i;
//         }
//     }
//     console.log(sum);
// }  

// isDivisible();
// isDivisible(3);
// isDivisible(45);

// ex 4 - shopping list //
// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//     let totalPrice = 0
//     for (let item of shoppingList) {
//         if (stock[item] != 0) {
//             totalPrice += prices[item];
//             stock[item] -= 1;
//         }
//     }
//     return totalPrice;
// }

// console.log(myBill());

// ex 5 - whats in my wallet //
// function changeEnough(itemPrice, amountOfChange) {
//     let myMoney =
//     (amountOfChange[0] * 25 +
//       amountOfChange[1] * 10 +
//       amountOfChange[2] * 5 +
//       amountOfChange[3]) /
//     100;
    
//     if (myMoney >= itemPrice) {
//         console.log(`you can afford it`);
//         return true
//     } else {
//         console.log(`you can't afford it`);
//         return false
//     }
// }
// changeEnough(5, [4, 100, 20, 5])

// ex 6 - vacation costs //
function hotelCost() {
    let stayTime = prompt(`number of nights`);
    if (stayTime.length === 0 || isNaN(stayTime)) {
      stayTime = prompt(`didnt get that, how many nights?`);
    } else {
      return stayTime * 140;
    }
  }

  function planeRideCost() {
    let destination = prompt(`enter destination`);
    destination = destination.toLowerCase();
    if (destination.length === 0 || typeof destination === !String) {
      destination = prompt(`didnt get that, come again?`);
    } else if (destination == "london") {
      return 183;
    } else if (destination == "paris") {
      return 220;
    } else {
      return 300;
    }
  }

  function rentalCarCost() {
    let rentalDays = prompt(`number of days for a car rental`);
    if (rentalDays.length === 0 || isNaN(rentalDays)) {
      rentalDays = prompt(`didnt get that, how many days?`);
    } else if (rentalDays > 10) {
      return rentalDays * 40 * 0.95;
    } else {
      return rentalDays * 40;
    }
  }
  function totalVacationCost() {
    return hotelCost() + planeRideCost() + rentalCarCost();
  }
  console.log(totalVacationCost());
