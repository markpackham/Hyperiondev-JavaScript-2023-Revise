const numbers = [1, 2, 3];

// findSum
function findSum(numArray) {
  let sum = 0;
  for (let index = 0; index < numArray.length; index++) {
    sum += numArray[index];
  }
  return sum;
}

// subtractNumbers
// experimented with arrow function
// if this was a real site I'd stick with one function style or the other for consistency
// as well as whether or not I was using an old version of JS where hoisting was needed
// or if Block Scoping was 100% vital for safety reasons
let subtractNumbers = (num1, num2) => num1 - num2;

// multiplyNumbers
function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

// divideNumbers
function divideNumbers(num1, num2) {
  // make sure no division by zero is attempted
  if (num2 === 0) {
    return "YOU CANNOT DIVIDE BY ZERO!!!";
  } else {
    return num1 / num2;
  }
}

console.log(`findSum returns a total of ${findSum(numbers)}`);

console.log(
  `subtractNumbers returns ${subtractNumbers(numbers[0], numbers[1])}`
);

console.log(
  `multiplyNumbers returns ${multiplyNumbers(numbers[2], numbers[0])}`
);

// console.log(
//   `divideNumbers when dividing by ZERO returns ${divideNumbers(9999, 0)}`
// );

console.log(
  `divideNumbers returns ${divideNumbers(findSum(numbers), numbers[2])}`
);
