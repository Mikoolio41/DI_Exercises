// ex 1 //
let language = prompt('What language do you speak?');


switch (language.toLowerCase()) {
    case "french":
        console.log('Bonjour');
        break;
    case "english":
        console.log('Hello');
        break;
    case "hebrew":
        console.log('Shalom');
        break;
    default:
        console.log('01110011 01101111 01110010 01110010 01111001');
}

// ex 2 //
let grade = prompt('What is your grade?');

if (grade > 90) {
    console.log('A');
} else if (grade >= 80) {
    console.log('B');
} else if (grade >= 70) {
    console.log('C');
}  else if (grade < 70){
    console.log('D');
}
  

// ex 3 //
let verb = prompt('please write a verb');

if (verb.length >= 3 && verb.slice(verb.length - 3, verb.length) !=='ing') {
    console.log(verb + 'ing');
} else if (verb.length >= 3 && verb.slice(verb.length - 3, verb.length) ==='ing') {
    console.log(verb + 'ly')
} else if (verb.length < 3) {
    console.log(verb);
}