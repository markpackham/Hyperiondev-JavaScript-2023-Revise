// Shoes constructor
// added default values as a safeguard to avoid user entering null values
function Shoes(
  name = "Generic Shoe",
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

// allow user to edit 1 specific shoe with specific changes
function shoeEditor(
  arr,
  name,
  newName,
  newProductCode,
  newQuantity,
  newValuePerItem
) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      arr[i].name = newName;
      arr[i].productCode = newProductCode;
      arr[i].quantity = newQuantity;
      arr[i].valuePerItem = newValuePerItem;
      return arr[i];
    }
  }
}

// mass edit all 4 properties off all 5 shoes so they all become the same
function shoeEditAll(
  arr,
  newName,
  newProductCode,
  newQuantity,
  newValuePerItem
) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].name = newName;
    arr[i].productCode = newProductCode;
    arr[i].quantity = newQuantity;
    arr[i].valuePerItem = newValuePerItem;
  }
  return arr;
}

console.log("Search for 'Goal Champ' named shoes.");
console.table(shoeSearch(shoesArray, "Goal Champ"));

console.log("\nSearch for lowest value per item.");
console.table(showLowestValuePerItem(shoesArray));

console.log("\nSearch for hightest value per item.");
console.table(showHighestValuePerItem(shoesArray));

console.log("\nAll shows ordered from lowest to highest value per item");
console.table(showLowestToHighestValuePerItem(shoesArray));

console.log("\nEdit on specific shoe instance");
console.table(
  shoeEditor(shoesArray, "Run Fast", "Run Fast Edited", 10, 11, 12)
);

console.log("\nEdit applied to all instances");
console.table(shoeEditAll(shoesArray, "Name Edited", 0, 0, 0, 0));
