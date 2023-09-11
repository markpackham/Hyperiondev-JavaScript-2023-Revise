function doubleAllValues() {
  // Define the first array to store the single values
  const firstArray = [1, 2, 3, 4];
  // Define the second array (empty array) to store the doubled values
  const secondArray = [];
  // Loop through the length of the first array
  for (let i = 0; i < firstArray.length; i++) {
    /* Multiply each value in the first array by 2 and push it into the
    second array */
    secondArray.push(firstArray[i] * 2);
  }
  // Return the doubled values stored in the second array
  return secondArray;
}
// Call the function and log the results in the console
console.log(doubleAllValues());
// Output: [ 2, 4, 6, 8 ]
