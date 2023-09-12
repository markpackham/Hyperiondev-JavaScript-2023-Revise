// Define an asynchronous function
async function apiFunction() {
  // Await to fetch data from the API
  let item = await fetch("apiLink");
  // Return results the console
  console.log(item);
}
