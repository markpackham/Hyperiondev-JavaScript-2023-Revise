// Totally ignore the fact we are asking for a number to be entered
// treat it like it were a string or array so we can manipulate its position
let originalNum = prompt("Please enter a number that is at least 3 digits");

// just like arrays we start at zero to get the 2nd digit we go for 1
let secondDigit = originalNum[1];

// // String: length taken from Mozzila docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
let lastDigit = originalNum[originalNum.length - 1];

// make sure I've grabbed the correct digits
console.log(`2nd digit is ${secondDigit} and last digit is ${lastDigit}`);

let answer = "";

for (let i = 0; i < originalNum.length; i++) {
  // debugging (would remove if this were a production site)
  // need to remind myself how to use debugger in VS Code at some point
  //   console.log(`${originalNum[i]}`);

  // target the 2nd digit
  if (i === 1) {
    // swap 2nd for last
    answer += lastDigit;
    // target the last digit
  } else if (i === originalNum.length - 1) {
    // swap last digit for 2nd
    answer += secondDigit;
  } else {
    // do the default for all the other digits
    answer += originalNum[i];
  }
}

console.log(`Original number was ${originalNum} and new number is ${answer}`);
