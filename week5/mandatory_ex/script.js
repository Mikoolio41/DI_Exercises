// ex 1 //
let h1 = document.querySelector("h1");
console.log(h1);

let article = document.querySelector("article");
article.removeChild(article.lastElementChild);

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = document.querySelector("h2");

h2.addEventListener("click", function(){
    h2.style.backgroundColor = "red";
})

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

let h3 = document.querySelector("h3");

h3.addEventListener("click", function(){
    h3.style.display = "none";
})

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let articleBtn = document.querySelector("article");
let btn = document.createElement("button");
btn.textContent = "click me";
articleBtn.appendChild(btn);
// let p = document.querySelectorAll("p");

btn.addEventListener("click", function(){
    let p_elements = Array.from(document.getElementsByTagName('p'));
p_elements.map(p_element => {
  p_element.style.fontWeight = "bold";
})
})
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.
h1.addEventListener("mouseover", function() {
    let fontRandom = Math.floor(Math.random() * (100 - 0) + 0);
    this.style.fontSize = `${fontRandom}px`;
  });


// ex 2 //
// Retrieve the form and console.log it.
console.log(document.forms[0].innerHTML);

// Retrieve the inputs by their id and console.log them.

console.log(document.getElementById('fname'));
console.log(document.getElementById('lname'));
console.log(document.getElementById('submit'));

// Retrieve the inputs by their name attribute and console.log them.
console.log(document.getElementById('fname').name);
console.log(document.getElementById('lname').name);

// When the user submits the form (ie. submit event listener)
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

let form = document.querySelector('form');
let input = document.querySelectorAll('input');
let ul = document.querySelector('ul');
let submit = document.getElementById('submit');

form.addEventListener('submit', ((e) => {
    e.preventDefault();
    for (let i = 0; i < 2; i++) {
        const createLi = document.createElement('li');
        const textNode = document.createTextNode(input[i].value);
        createLi.appendChild(textNode);
        ul.appendChild(createLi);
    }
}));

// ex 3 //

// Create a function called getBold_items() that takes no parameter. 
// This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

let allBoldItems;

function getBold_items() {
  allBoldItems = document.querySelectorAll("strong");
}
getBold_items();

// Create a function called highlight() that changes the color of all the bold text to blue.

function highlight() {
  allBoldItems.forEach((item) => (item.style.color = "blue"));
}

// Create a function called return_normal() that changes the color of all the bold text back to black.

function return_normal() {
  allBoldItems.forEach((item) => (item.style.color = "black"));
}

// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), 

document.querySelector("p").addEventListener("mouseover", function () {
  highlight();
});

// and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph).

document.querySelector("p").addEventListener("mouseout", function () {
  return_normal();
});
