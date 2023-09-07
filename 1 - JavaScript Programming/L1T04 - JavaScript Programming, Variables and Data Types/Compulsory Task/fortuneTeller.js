// var not used since doing things in a block scoped manner rather than function scoped is safer and more modern
let mother = prompt("Enter your mother's first name: ");
let street = prompt("Enter the street you grew up on: ");
let color = prompt("Enter your fav color as a kid: ");

// convert strings to numbers
// use of Number() taken from "Number - javascript: MDN"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
let age = Number(prompt("Enter your current age: "));
let num = Number(prompt("Enter a number between 1 and 10: "));

console.log(
  // use of line break \n for multi line spacing
  `In ${num} years you are going to meet your best friend named ${mother} ${street}.\n
  You will get married in ${age + num} years and have ${age % num} children.\n
  In ${Math.round(age / num)} years you are going to dye your hair ${color}.`
);
