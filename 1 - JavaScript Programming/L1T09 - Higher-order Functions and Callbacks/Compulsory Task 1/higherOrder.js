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

  return sixLetterWords;
};

const allSixLetterWords = myFilterFunction(wordsArray)((item) => item);
console.log("Six letter words: " + allSixLetterWords);
