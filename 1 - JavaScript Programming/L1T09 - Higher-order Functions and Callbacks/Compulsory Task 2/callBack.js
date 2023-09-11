// Code here for the callbacks task

// Setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

let startCounter = function () {
  console.log("Hello World");

  intervalID = setInterval(
    // Create the logic needed in the setInterval() function for
    //incrementing the counter and outputting to the console

    function () {
      console.log(counter++);
    },
    1000
  );
};

function stopCounter() {
  // add the logic required to stop the counter
  // using clearInterval()
}

// click test to help remind me about event listeners
// function click_test() {
//   console.log("Button has been clicked!");
// }

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let click_testButton = document.getElementById("click_test");

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
