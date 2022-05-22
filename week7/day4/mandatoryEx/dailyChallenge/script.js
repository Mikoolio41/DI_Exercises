// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch = () =>
    console.log(
      `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    );
}

const random = new Video("How to bake cupcakes", "Mika", 320);
random.watch();
const random2 = new Video("How to binge Breaking Bad", "Mika", 5465465465465);
random2.watch();

const arrayData = [
  ["friends season 1", "Ross", 456],
  ["friends season 2", "Rachel", 123],
  ["friends season 3", "Chandler", 789],
  ["friends season 4", "Joey", 345],
  ["friends season 5", "Monica", 234],
];

const newArray = [];
for (i in arrayData) {
  newArray[i] = new Video(arrayData[i][0], arrayData[i][1], arrayData[i][2]);
  newArray[i].watch();
}

console.log(newArray);
