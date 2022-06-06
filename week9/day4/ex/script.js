// 🌟 Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));

// Expected Output:

// output

const myFunction = async () => {
  let fetching = await fetch("https://www.swapi.tech/api/starships/9/");
  let jsonFetch = await fetching.json();
  console.log(jsonFetch.result);
};
myFunction();

// 🌟 Exercise 2: Analyze
// Instructions
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
// Analyse the code provided above before executing it - what will be the outcome?

// calling asyncCall would log "calling"
// awaiting the promise's result for 2 sec
// if resolved - it would log "resolved"
