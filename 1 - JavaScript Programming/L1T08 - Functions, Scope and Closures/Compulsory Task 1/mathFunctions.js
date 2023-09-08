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
function subtractNumbers(num1, num2) {
  return num1 - num2;
}

console.log(`findSum returns a total of ${findSum(numbers)}`);

console.log(
  `subtractNumbers returns ${subtractNumbers(numbers[0], numbers[1])}`
);
