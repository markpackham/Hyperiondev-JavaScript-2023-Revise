const wordsArray = ["Express", "JavaScript", "React", "Next"];
/* myMapper(HOF) takes an array (arr) and hypothetical function (fn) as
arguments */
let myMapper = (arr) => (fn) => {
  const arrayAfterMapping = [];
  for (let i = 0; i < arr.length; i++) {
    // The callback function fn() is applied to each element
    arrayAfterMapping.push(fn(arr[i]));
  }
  return arrayAfterMapping; // Return a new array
};

/* myMapper(HOF) is used with an anonymous function to return the length of
each word followed by a space */
const outputArray = myMapper(wordsArray)((item) => item.length + " ");
// Output the result to the console
console.log("Length of words: " + outputArray);
// Output: Length of words: 7, 10, 5, 4
