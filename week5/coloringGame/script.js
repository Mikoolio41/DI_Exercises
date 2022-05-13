let currentColor = "";
document.querySelectorAll(".paletteColor").forEach((item) =>
    item.addEventListener("click", () => {
        currentColor = item.getAttribute("style");
        console.log(currentColor);
    })
);

document.querySelectorAll(".rightGrid > div").forEach((item) => {
    item.addEventListener("mouseover", function (e) {
        if (e.buttons == 1 || e.buttons == 3) {
            item.setAttribute("style", currentColor);
        }
    });
});
document.querySelector("button").addEventListener("click", () =>
    document.querySelectorAll(".rightGrid > div").forEach((item) => {
        item.setAttribute("style", "background-color: rgb(255, 255, 255)");
    })
);