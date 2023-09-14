// prompt user to input data
const userName = prompt("Please enter your name:");
// display a greeting using the alert function if the data is valid
if (userName !== null && userName !== "") {
  const greeting = "Hello, " + userName + "!";
  alert(greeting);
}
// Display an appropriate response if the user dismisses the dialogue box without entering valid data
else {
  alert("You did not provide a valid name.");
}
