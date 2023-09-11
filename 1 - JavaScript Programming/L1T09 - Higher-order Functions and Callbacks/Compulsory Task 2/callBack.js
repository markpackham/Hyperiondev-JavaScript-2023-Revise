// Code here for the callbacks task

// Setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

let startCounter = function () {
  // Used the Mozilla Developer Network to understand setInterval structure
  // https://developer.mozilla.org/en-US/docs/Web/API/setInterval
  intervalID = setInterval(
    // Create the logic needed in the setInterval() function for
    // incrementing the counter and outputting to the console

    // an anonymous function
    function () {
      // my own safety measure to stop memory leak,
      // counting to 200 should be enough for demo purposes
      // so we exit out of the function after that
      // you can't always count on a possibly distracted human to click the "Stop" button
      // "return" is also simpler than just calling stopCounter() after 200 seconds
      if (counter > 200) return;

      console.log(counter++);
    },
    // increments occur ever 1 second / 1000ms
    1000
  );
};

function stopCounter() {
  // add the logic required to stop the counter
  // using clearInterval()

  // Used the Mozilla Developer Network's reference to learn how to stop the counter from running
  // https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
  // target the intervalID so we can stop the startCounter from running
  clearInterval(intervalID);
}

// click button test to help remind me about event listeners
// function click_test() {
//   console.log("Button has been clicked!");
// }

// target elements in html that users will be clicking on
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
// let click_testButton = document.getElementById("click_test");

// The event listener below is missing a callback function argument;
// this button should start the outputting of the counter to the console

// add my startCounter function
startButton.addEventListener("click", startCounter);

// The event listener below is missing a callback function argument;
// this button should stop the counter from outputting to the console

// add my stopCounter function
stopButton.addEventListener("click", stopCounter);

// add my click test to make sure the event listener is working
// click_testButton.addEventListener("click", click_test);
