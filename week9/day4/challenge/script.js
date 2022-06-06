// 1st Challenge
// Instructions
// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Example

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// // expected output: Array [3, 42, "foo"]

// const arrPromises = [];
// const allPromises = (arrPromises) => {
//   return Promise.all(arrPromises)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
// };
// allPromises([
//   Promise.resolve(3),
//   42,
//   new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "foo");
//   }),
// ]);

// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for
// both cities ONLY when both promises are resolved
// Hint : Use Promise.all()

// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

const apiURL = "https://api.sunrise-sunset.org/json?";
const myForm = document.forms[0];
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const locationData = Object.fromEntries(formData);
  console.log(locationData);
  let firstFetchParam = `lat=${locationData.first_city_lat}&lng=${locationData.first_city_long}`;
  let secondFetchParam = `lat=${locationData.second_city_lat}&lng=${locationData.second_city_long}`;
  let twoItemArr = [apiURL + firstFetchParam, apiURL + secondFetchParam];
  console.log(twoItemArr);
  const getDataAwait = async function () {
    const [sunrise1, sunrise2] = await Promise.all(
      twoItemArr.map(async (url) => {
        let res = await fetch(url);
        let resJson = await res.json();
        return resJson;
      })
    );
    let resultParagraph = document.createElement("p");
    let resultText = document.createTextNode(sunrise1.results.sunrise);
    resultParagraph.appendChild(resultText);
    document.querySelector(".sunrise-data").appendChild(resultParagraph);
    let resultParagraph2 = document.createElement("p");
    let resultText2 = document.createTextNode(sunrise2.results.sunrise);
    resultParagraph2.appendChild(resultText2);
    document.querySelector(".sunrise-data").appendChild(resultParagraph2);
  };

  getDataAwait();
});
