let select = document.getElementById("genres");
let value = select.options[select.selectedIndex];

console.log(value);

let newOption = document.createElement("option");
newOption.textContent = "Classic";
newOption.setAttribute("value", "classic");
select.append(newOption);

newOption.setAttribute("selected", "");

let button = document.forms[0].elements[1];
console.log(button);

function removecolor() {
  let selectColorList = document.getElementById("colorSelect");
  let valueSelectColor = selectColorList.options[selectColorList.selectedIndex];
  valueSelectColor.remove();
}

button.addEventListener("click", removecolor);
