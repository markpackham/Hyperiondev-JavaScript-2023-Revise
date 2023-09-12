// Create an empty array to store quotes
let items = [];
// Fetch random quotes from the API
fetch("https://api.quotable.io/random")
  //Fetch returns an object which is called res by default
  //Parse the response as a JSON object
  .then((res) => res.json())
  // Callback used to parse the data
  .then(
    (result) => {
      // Assign and store the data in the items array
      items = result;
      // Return the data in the console
      console.log(items);
    } //end arrow function
  ), // end .then
  // Error handling is executed if fetch fails
  (error) => {
    // Return an error in the console
    console.log(error);
  };
