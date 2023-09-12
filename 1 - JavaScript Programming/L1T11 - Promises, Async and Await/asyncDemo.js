// Define an asynchronous function (shorter than the Promise demo version)
async function myAsyncFunction() {
  // Store random number in a variable
  let randNumber = Math.floor(Math.random() * 10);
  // Create a condition to check if the random number is greater than or equal to 5
  if (randNumber >= 5) {
    return "Number was greater than or equal to 5 [RESOLVED]";
  } else {
    return "The number was less than 5 [REJECTED]";
  }
}
// Return the result in the console
console.log(myAsyncFunction());
