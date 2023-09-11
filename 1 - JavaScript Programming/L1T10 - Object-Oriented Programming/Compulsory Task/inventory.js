// Shoes constructor
// added default values as a safeguard to avoid user entering null values
function Shoes(
  name = "unnamed",
  productCode = 0,
  quantity = 1,
  valuePerItem = 1
) {
  // object properties/attributes
  this.name = name;
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
}

// create shoe instances
let runningShoes = new Shoes("Run Fast", 1, 1, 1000);
let tennisShoes = new Shoes("Tennis Ace", 2, 2, 2);
let footballShoes = new Shoes("Goal Champ", 3, 3, 3);
let rugbyShoes = new Shoes("Tackle Hard", 4, 4, 4);
let dancingShoes = new Shoes("Light Footwork", 5, 5, 5);

const shoesArray = [];
// add all my shoes to the array
shoesArray.push(
  runningShoes,
  tennisShoes,
  footballShoes,
  rugbyShoes,
  dancingShoes
);

// find a shoe by it's name in an array
// function shoeSearch(arr, name) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name === name) {
//       return arr[i];
//     }
//   }
// }

// Used the Mozilla Developer Network to use find method for arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// use find method instead of for loop
function shoeSearch(arr, name) {
  return arr.find((shoe) => shoe.name === name);
}

// Used the Mozilla Developer Network to use sort method for arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function showLowestValuePerItem(arr) {
  let = lowestValuePerItem = arr.sort(
    (a, b) => a.valuePerItem - b.valuePerItem
  );

  return lowestValuePerItem[0];
}

function showHighestValuePerItem(arr) {
  let = highestValuePerItem = arr.sort(
    // invert the logic of the lowestValuePerItem function
    (a, b) => b.valuePerItem - a.valuePerItem
  );

  // another solution would have been to replicate lowestValuePerItem function
  // but instead of returning the first array entry return the last using the array length - 1
  return highestValuePerItem[0];
}

// identical to showLowestValuePerItem, you just return the entire array
function showLowestToHighestValuePerItem(arr) {
  let = lowestValuePerItem = arr.sort(
    (a, b) => a.valuePerItem - b.valuePerItem
  );

  return lowestValuePerItem;
}

console.log("Search for 'Goal Champ' named shoes.");
console.table(shoeSearch(shoesArray, "Goal Champ"));

console.log("\nSearch for lowest value per item.");
console.table(showLowestValuePerItem(shoesArray));

console.log("\nSearch for hightest value per item.");
console.table(showHighestValuePerItem(shoesArray));

console.log("\nAll shows ordered from lowest to highest value per item");
console.table(showLowestToHighestValuePerItem(shoesArray));
