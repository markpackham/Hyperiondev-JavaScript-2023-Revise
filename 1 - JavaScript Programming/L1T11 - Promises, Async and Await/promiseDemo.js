// Create a new Promise object taking in the resolve and reject parameters
let myPromise = new Promise(function (resolve, reject) {
  // Store random number in a variable
  let randNumber = Math.floor(Math.random() * 10);
  // Promise is resolved if the random number is greater than or equal to 5.
  // Else it will be rejected
  if (randNumber >= 5) {
    resolve("Number was greater than or equal to 5 [RESOLVED]");
  } else {
    reject(Error("The number was less than 5 [REJECTED]"));
  }
});
// Return the resolved or rejected results
myPromise.then(
  function (result) {
    console.log(result);
  },
  function (error) {
    console.log(error);
  }
);
// Return message to indicate the code is still
