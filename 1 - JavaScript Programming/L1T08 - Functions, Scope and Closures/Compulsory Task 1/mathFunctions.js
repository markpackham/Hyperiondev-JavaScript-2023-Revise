const numbers = [1, 2, 3];

function findSum(numArray) {
  let sum = 0;
  for (let index = 0; index < numArray.length; index++) {
    sum += numArray[index];
  }
  return sum;
}

console.log(`findSum returns a total of ${findSum(numbers)}`);
