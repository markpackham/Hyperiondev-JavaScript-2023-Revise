const wordsArray = [
  "cat",
  "dog",
  "rat",
  "hat",
  "sat",
  "mat",
  "bat",
  "filter",
  "higher",
  "letter",
];

// function returns only words that are 6 letters long
// arr is our parameter for the array we want to use
// fn is our anonymous function
let myFilterFunction = (arr) => (fn) => {
  const sixLetterWords = [];
  // callback function is applied to each item in the array
  // to check if they contain six letters
  // if they do they get added to the sixLetterWords array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 6) {
      sixLetterWords.push(fn(arr[i]));
    }
  }

  // we only care about six letter words so an array holding only them
  // get returned
  return sixLetterWords;
};

const allSixLetterWords = myFilterFunction(wordsArray)((item) => item);
console.log(
  "ALL six letter words shown using myFilterFunction: " + allSixLetterWords
);

// Check to see if output is identical to inbuilt filter function
// const result = wordsArray.filter((word) => word.length === 6);
// console.log("ALL six letter words shown using inbuilt filter function: " + result);
