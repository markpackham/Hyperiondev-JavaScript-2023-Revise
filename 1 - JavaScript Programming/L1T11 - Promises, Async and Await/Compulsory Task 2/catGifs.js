const getCatGif = async () => {
  // try / catch block learned from
  // Pavlutin, D. (2023) How to use fetch with Async/await, Dmitri Pavlutin Blog.
  // Available at: https://dmitripavlutin.com/javascript-fetch-async-await/
  // (Accessed: 12 September 2023).
  try {
    // fetch cat from api
    let response = await fetch(
      // // Had to learn about CORS issues reading Stack Overflow
      // Stranger B.Stranger 9 et al. (1961)
      // How to use CORS anywhere to reverse proxy and add cors headers, Stack Overflow.
      // Available at: https://stackoverflow.com/questions/29670703/how-to-use-cors-anywhere-to-reverse-proxy-and-add-cors-headers
      // (Accessed: 12 September 2023).

      // Have to use CORS-Anyware to temporarily bypass CORS issues
      // Rob--W (no date) PSA: Public demo server (cors-anywhere.herokuapp.com)
      // will be very limited by January 2021, 31st · issue #301 · Rob--W/CORS-Anywhere, GitHub.
      // Available at: https: github.com/Rob--W/cors-anywhere/issues/301 (Accessed: 12 September 2023).

      "https://cors-anywhere.herokuapp.com/http://thecatapi.com/api/images/get?format=src&type=gif"
    );

    // check for 200 http status
    if (response.ok) {
      let catGif = response;
      // output cat url
      console.log(catGif.url);
    } else {
      // show error if we don't get an ok
      console.log(`Error ${response.statusText}`);
    }

    // catch and show error if the fetch process itself fails
  } catch (error) {
    console.log(error);
  }
};

getCatGif();
