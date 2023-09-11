function doubleAllValues() {
  // Define the first array to store the single values
  const firstArray = [1, 2, 3, 4];
  /* Arrow function takes the argument "item". Each item is an element in the
    first array that is multiplied by 2 */
  const multiplyByTwo = (item) => item * 2;
  /* Map each element in the first array by applying the multiplyByTwo
function. Define the second array to store the doubled values. */
  const secondArray = firstArray.map(multiplyByTwo);
  // Return the new array
  return secondArray;
}
// Call the function and log the results in the console
console.log(doubleAllValues());
// Output: [ 2, 4, 6, 8 ]
