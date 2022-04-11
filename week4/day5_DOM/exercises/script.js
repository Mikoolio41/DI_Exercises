// ex 1 //
document.getElementById('navBar').setAttribute('id', "socialNetworkNavigation");

const list = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.textContent = "Logout";
list.appendChild(newLi);

console.log(list.firstElementChild.textContent);
console.log(list.lastElementChild.textContent);

// ex 2 //
document.querySelector(".list > li:nth-child(2)").textContent = "Richard";

document.querySelectorAll(".list > li:first-Child").forEach((item) => {
    item.textContent = "Mika";
});

document.querySelectorAll(".list").forEach((item) => {
    item.append((document.createElement("li").textContent = "Hey students"));
  });

document.querySelector(".list:last-of-type li:nth-child(2)").remove();

document.querySelectorAll(".list").forEach((item) => {
    item.classList.add("student_list");
  });
  
document.querySelector(".list").classList.add("university", "attendance");

// ex 3 //

document.querySelector("div.color").style.backgroundColor = "lightblue";
document.querySelector("div.color").style.padding = "10px";

document.querySelector("ul.color li:first-child").style.display = "none";
document.querySelector("ul.color li:last-child").style.border = "2px solid black";

document.body.style.fontSize = "17px";
