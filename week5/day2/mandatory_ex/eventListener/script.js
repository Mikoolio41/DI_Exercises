const h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
  h1.style.backgroundColor = "lightblue";
});

h1.addEventListener("mouseover", changeSize);
h1.addEventListener("mouseleave", resetSize);
h1.addEventListener("mouseout", fadeEffect);
h1.addEventListener("mousemove", resetEffect);

function fadeEffect() {
  h1.style.opacity = "30%";
  h1.style.transition = "opacity 2 ms";
}

function resetEffect() {
  h1.style.opacity = "100%";
}

let defaultSize = h1.style.fontSize;

function changeSize() {
  let size = Math.round(Math.random() * 100);
  h1.style.fontSize = String(size) + "px";
}

function resetSize() {
  h1.style.fontSize = defaultSize;
}