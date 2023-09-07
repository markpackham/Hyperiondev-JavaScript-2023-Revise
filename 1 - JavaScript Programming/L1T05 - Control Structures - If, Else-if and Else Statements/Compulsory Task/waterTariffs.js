let litres = prompt("Enter the number of litres of water you have used: ");

let kiloLitres = litres / 1000;

let answer = 0;

// Max values for user levels
// const is used instead of let since the max numbers don't change

// max amount of kilo litres a user can use
const lowLevel = 6;
const mediumLevel = 10.5;
const heavyLevel = 35;
const superLevel = lowLevel + mediumLevel + heavyLevel;

// max amount of water a user can pay for levels
const lowUser = 6 * 15.73;
const mediumUser = 10.5 * 22.38;
const heavyUser = 35 * 31.77;

if (kiloLitres <= 6) {
  answer = kiloLitres * 15.73;
} else if (kiloLitres > 6 && kiloLitres <= 10.5) {
  answer = lowUser + (kiloLitres - 6) * 22.38;
} else if (kiloLitres > 10.5 && kiloLitres <= 35) {
  answer = lowUser + mediumUser + (kiloLitres - 16.5) * 31.77;
} else {
  // Else is used for anyone at super user level since that in theory has no limits
  answer = lowUser + mediumUser + heavyUser + (kiloLitres - superLevel) * 69.76;
}

console.log(`You must pay ${answer} Rands`);
