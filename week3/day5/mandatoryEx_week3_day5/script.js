// // ex 1 //
// let people = ["Greg", "Mary", "Devon", "James"];

// people.shift()
// // people = ["Mary", "Devon", "James"]
// people.splice(2, 1, 'Jason')
// // people = ["Mary", "Devon", "Jason"]
// people.push('Mika')
// // people = ["Mary", "Devon", "Jason", "Mika"]
// console.log(people.indexOf('Mary')); 
// // 0
// console.log(people.slice(1,3));
// // people = ["Devon", "Jason"]
// console.log(people.indexOf("Foo"));
// // -1
// let last = people[people.length - 1];
// console.log(last);
// // Mika

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] === 'Jason') {
//     break;
//     }
// }

// // ex 2 //
// let colors = ['blue', 'green', 'grey', 'black', 'teal'];

// for (let index = 0; index < colors.length; index++) {
//         console.log(`My #${index + 1} choice is ${colors[index]}`);

// }

// ex 3 //
// let num = '';
// do {
//     num = prompt('enter a number');
// }  while (num < 10);
    

// ex 4// 
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(`number of levels in the building ${building.numberOfFloors}`);

console.log(`number of apartments in level 1 ${building.numberOfAptByFloor[1]} number of apartments in level 3 ${building.numberOfAptByFloor[3]} `);
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
let tenean1 = building.name_of_tenants[1]
console.log(`second tenant :${tenean1}`, `${tenean1}’s number room :${building.number_of_rooms_and_rent[`${tenean1}`][0]}`)
let sarasRent = building.number_of_rooms_and_rent[`Sarah`][1]
let DavidsRent = building.number_of_rooms_and_rent[`David`][1]
let DansRent = building.number_of_rooms_and_rent[`Dan`][1]
let danPayLess = (sarasRent + DavidsRent) > DansRent
// If it is than increase Dan’s rent.(do not understand what to do)
if (danPayLess) {
    building.number_of_rooms_and_rent[`Dan`][1] += (sarasRent + DavidsRent) - DansRent
}


// ex 5 //
// let family = {
//     firstName:'Mika',
//     lastName: 'Bibas',
//     age: 32,
//     food: 'sushi'
// }

// for (let x in family) {
//     console.log(x);
//   }
//   for (let x in family) {
//     console.log(family[x]);
//   }

// ex 6 //
// let details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

//   for (let x in details) {
//     console.log(x);
//     console.log(details[x]);
    
//   }      
  
  
  // ex 7 //
  let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
  console.log(
  names
    .sort()
    .map((string) => string[0])
    .join("")
);