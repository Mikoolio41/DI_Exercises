// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, send the data as JSON.
// The output should be:
const formSubmit = document.forms[0];

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(JSON.stringify(Object.fromEntries(formData)));
});
