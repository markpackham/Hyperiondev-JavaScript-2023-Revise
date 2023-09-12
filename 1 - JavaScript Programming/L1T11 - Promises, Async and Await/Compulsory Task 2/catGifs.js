// Define an asynchronous function
async function getCatGif() {
  // try / catch block learned from
  // Pavlutin, D. (2023) How to use fetch with Async/await, Dmitri Pavlutin Blog.
  // Available at: https://dmitripavlutin.com/javascript-fetch-async-await/
  // (Accessed: 12 September 2023).
  try {
    // fetch cat from api
    let cat = await fetch(
      "http://thecatapi.com/api/images/get?format=src&type=gif"
    );
    //return cat
    console.log(cat);
  } catch (error) {
    console.log(error);
  }
}

getCatGif();
