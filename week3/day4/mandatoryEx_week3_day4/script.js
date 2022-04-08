// ex 1 //
// let x = 5;
// let y = 2;

// if (x > y) {
//     console.log('x is the biggest number');
// } else if (y > x) {
//     console.log('y is the biggest number');
// } else if (x == y) {
//     console.log('the numbers are equal');
// } else {
//     console.log('cannot process numbers');
// }

// ex 2 //
// let newDog = 'Chihuahua';
// console.log(newDog.length);
// console.log(newDog.toLowerCase());
// console.log(newDog.toUpperCase());

// if (newDog == 'Chihuahua') {
//     console.log(`I love Chihuahuas, it's my favorite dog breed`);
// } else {
//     console.log(`I dont care, I prefer cats`);
// }

// ex 3 //
// let number = prompt('please enter a number')

// if (number % 2 == 0) {
//     console.log('the number is an even number');
// } else {
//     console.log('the number is an odd number');
// }

// ex 4 //
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length === 0) {
    console.log('no one is online');
} else if (users.length === 1) {
    console.log(`${users[0]} is online`);
} else if (users.length === 2) {
    console.log(`${users[0]} and ${users[1]} are online`);
} else {
    console.log(`${users[0]}, ${users[1]} and ${users.length - 2} more are online`);
}

