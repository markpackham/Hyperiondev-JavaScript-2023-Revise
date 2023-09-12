// Define an asynchronous function
async function apiFunction() {
  // Await to fetch data from the API
  let item = await fetch(
    "http://thecatapi.com/api/images/get?format=src&type=gif"
  );
  // Return results the console
  console.log(item);
}

apiFunction();
