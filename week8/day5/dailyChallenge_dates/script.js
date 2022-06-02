// Instructions :
// Create a function that takes a date object and return string in the following format: YYYYMMDDHHmmSS.

// The format should contain a 4 digit year, 2 digit month, 2 digit day, 2 digit hour(00-23), 2 digit minute and 2 digit second.
// If any of the value has only single digit, you must use zero prefix, so that the result string length is always the same.

// Examples

// formatDate(new Date(2020, 6, 4, 8, 0, 0)) ➞ "20200704080000"

// formatDate(new Date(2019, 11, 31, 23, 59, 59)) ➞ "20191231235959"

// formatDate(new Date(2020, 6, 4)) ➞ "20200704000000"

// Notes
// Assume Date year input will always be greater than 1970.

// Try not to rely on the default Date.toString() output in your implementation.

// Be aware that the Date's month field is zero based (0 is January and 11 is December).

const formatDate = (item) => {
  let year = item.getFullYear();
  let month = item.getMonth();
  let date = item.getDate();
  let hours = item.getHours();
  let minutes = item.getMinutes();
  let seconds = item.getSeconds();
  item.getMonth() < 10
    ? (month = `0${item.getMonth() + 1}`)
    : (month = `${item.getMonth() + 1}`);
  item.getDate() < 10 ? (date = `0${item.getDate()}`) : null;
  item.getHours() < 10 ? (hours = `0${item.getHours()}`) : null;
  item.getMinutes() < 10 ? (minutes = `0${item.getMinutes()}`) : null;
  item.getSeconds() < 10 ? (seconds = `0${item.getSeconds()}`) : null;
  console.log(`${year}${month}${date}${hours}${minutes}${seconds}`);
};
formatDate(new Date(2019, 11, 31, 23, 59, 59));
formatDate(new Date(2020, 6, 4, 8, 0, 0));
formatDate(new Date(2020, 6, 4));
