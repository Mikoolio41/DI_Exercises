let numberBottles = prompt(`How many bottles are on the wall?`);
let bottle = 1;

function countBottles() {
  do {
    console.log(`${numberBottles} bottles of beer on the wall`);
    console.log(`${numberBottles} bottles of beer`);
    switch (bottle) {
      case 1:
        console.log(`Take ${bottle} down, pass it around`);
        break;
      default:
        console.log(`Take ${bottle} down, pass them around`);
    }
    numberBottles = numberBottles - 1;
    console.log(`${numberBottles} bottles of beer on the wall`);
    bottle++;
    console.log("");
  } while (numberBottles > 0);
}

countBottles(numberBottles);