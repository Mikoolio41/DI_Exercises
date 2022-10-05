let shoppingList = [];

let div = document.getElementById("root");
let form = document.createElement("form");
let input = document.createElement("input");
input.setAttribute("type", "text");
let button = document.createElement("button");
button.textContent = "Add Item";
let clearBtn = document.createElement("button");
clearBtn.textContent = "Clear List";

form.append(input);
form.append(button);
form.append(clearBtn);
div.append(form);

function addItem(e) {
  e.preventDefault();
  let value = form.elements[0].value;
  shoppingList.push(value);
  console.log(shoppingList);
  return shoppingList;
}

function clearAll() {
  shoppingList.textContent = "";
  console.log(shoppingList);
  return shoppingList;
}

button.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearAll);
