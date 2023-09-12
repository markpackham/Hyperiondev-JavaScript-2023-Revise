const getCatGif = async () => {
  // try / catch block learned from
  // Pavlutin, D. (2023) How to use fetch with Async/await, Dmitri Pavlutin Blog.
  // Available at: https://dmitripavlutin.com/javascript-fetch-async-await/
  // (Accessed: 12 September 2023).
  try {
    // fetch cat gif from api
    let response = await fetch(
      // // Had to learn about CORS issues reading Stack Overflow
      // Stranger B.Stranger 9 et al. (1961)
      // How to use CORS anywhere to reverse proxy and add cors headers, Stack Overflow.
      // Available at: https://stackoverflow.com/questions/29670703/how-to-use-cors-anywhere-to-reverse-proxy-and-add-cors-headers
      // (Accessed: 12 September 2023).

      // Attempted to use CORS Anywhere Proxy with no luck
      // "https://cors-anywhere.herokuapp.com/http://thecatapi.com/api/images/get?format=src&type=gif"
      // If I was using Express as my server I'd just use the cors node module, https://www.npmjs.com/package/cors
      // But installing Express would have been overkill for this project

      // Had to install browser plugin to bypass CORS using vanilla Microsoft Edge
      // (made sure it had many reviews & users given it's a security risk)
      // Previously attempted using Brave Browser but I had too many security plugins & features
      // https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/
      // Learned about plugin from
      // Cors unblock - browser extension review (2020) YouTube.
      // Available at: https://www.youtube.com/watch?v=8berLeTjKDM
      // (Accessed: 12 September 2023).

      "http://thecatapi.com/api/images/get?format=src&type=gif"
    );

    // check for 200 http status
    if (response.ok) {
      let catGif = response;
      // output cat gif url
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
