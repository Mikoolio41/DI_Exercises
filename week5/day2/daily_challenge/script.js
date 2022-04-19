let gameArray = new Array();
let myButton = document.querySelector("button");

myButton.addEventListener("click", makeStory);

function makeStory() {
  let noun = document.getElementById("noun").value;
  let adjective = document.getElementById("adjective").value;
  let person = document.getElementById("person").value;
  let verb = document.getElementById("verb").value;
  let place = document.getElementById("place").value;
  
  gameArray.push([person, verb, "the " + noun, adjective, "in " + place]);
  gameArray.push(["the " + noun, adjective, person, verb, "in " + place]);
  gameArray.push([person, "the " + noun, adjective, verb, "in " + place]);
  gameArray.push(["the " + noun, person, adjective, verb, "in " + place]);
  gameArray.push([verb, adjective, person, "the " + noun, "in " + place]);
  gameArray.push(["in " + place, "the " + noun, adjective, person, verb]);
  if (
    noun === "" ||
    adjective === "" ||
    person === "" ||
    verb === "" ||
    place === ""
  ) {
    alert("The data is not complete");
  } else {
    let storyText = document.createTextNode(gameArray[0].join(" "));
    document.querySelector("span").appendChild(storyText);
  }
}

let shuffle = document.createElement("button");
let shuffleText = document.createTextNode("Shuffle");
document.querySelector("p").appendChild(shuffle);
shuffle.appendChild(shuffleText);

shuffle.addEventListener("click", NewStory);
let counter = 1;

function NewStory() {
  if (counter < 6) {
    let storyText = gameArray[counter].join(" ");
    document.querySelector("span").textContent = storyText;
    counter += 1;
  } else {
    alert(`Enough with the games`);
  }
}