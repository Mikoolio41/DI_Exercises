//div//
console.log(document.getElementsByTagName("div"));
const body = document.body
console.log(body.firstElementChild);

//ul//
console.log(document.getElementsByTagName("ul"));
console.log(body.children[1]);

//2nd li//
const li = document.getElementsByTagName("li");
console.log(li.nextElementSibling);