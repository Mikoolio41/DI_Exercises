// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. This input is
// used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search
// of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the
// URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

const apiURL =
  "https://api.giphy.com/v1/gifs/search?offset=2&rating=g&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const myForm = document.forms[0];

myForm.querySelector("#findGif").addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  let category = myForm.querySelector("#gifName").value;

  xhr.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${category}`
  );
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    if (xhr.status !== 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      let newDiv = document.querySelector("div");
      let newGif = document.createElement("img");
      let newButton = document.createElement("input");
      newButton.type = "button";
      newButton.value = "delete";
      newGif.src = xhr.response.data[0].images.original.url;
      newDiv.appendChild(newGif);
      newDiv.appendChild(newButton);
      newButton.addEventListener("click", (event) => {
        event.target.previousElementSibling.remove();
        event.target.remove();
      });
    }
  };
  xhr.onerror = () => {
    alert("Request failed");
  };
});
