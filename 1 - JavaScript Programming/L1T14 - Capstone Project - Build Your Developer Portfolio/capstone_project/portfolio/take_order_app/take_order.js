const ordersArr = [];
let orderNumber = 0;

let meal_description = "";

// Order Class
class Order {
  constructor(meal_description, order_number, completion_status = false) {
    this.meal_description = meal_description;
    this.order_number = order_number;
    this.completion_status = completion_status;
    ordersArr.push(this);

    sessionStorage.setItem("orders", JSON.stringify(ordersArr));
  }
}

const mainIngredientFilter =
  "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

let mainIngredientPrompt = prompt(
  "What is the main ingredient you would like to use eg(chicken, beef, salmon, pork, avocado)?"
);

// Adding underscores for spaces learned from
/*
  (1955) Replacing spaces with underscores in JavaScript?, Stack Overflow. 
  Available at: https://stackoverflow.com/questions/441018/replacing-spaces-with-underscores-in-javascript (Accessed: 18 September 2023). 
  */
// Handle entries like "Bicarbonate Of Soda" so it becomes bicarbonate_of_soda
let mainIngredient = mainIngredientPrompt.toLowerCase().split(" ").join("_");

let mainIngredientAnswer = mainIngredientFilter + mainIngredient;

const fetchMainIngredientMeals = async () => {
  try {
    let response = await fetch(mainIngredientAnswer);
    let data = await response.json();

    // Implement recursion safety check for Ingredients that don't exist later if there is time
    if (data.meals === null) {
      alert("That Ingredient does not exist!");

      mainIngredientPrompt = prompt(
        "What is the main ingredient you would like to use eg(chicken, beef, salmon, pork, avocado)?"
      );
      mainIngredient = mainIngredientPrompt.toLowerCase().split(" ").join("_");
      mainIngredientAnswer = mainIngredientFilter + mainIngredient;

      response = await fetch(mainIngredientAnswer);
      data = await response.json();
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};

let meal = fetchMainIngredientMeals();

// Promise gets resolved
meal.then(function (result) {
  // Obtain the array of the object
  const mealsList = result.meals;

  const mealNames = mealsList.map((meal) => meal.strMeal);

  // Math.random() learned from
  // MDN Web Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomMeal = Math.floor(Math.random() * (mealNames.length - 1));
  // console.log(`Your meal will be ${mealNames[randomMeal]}`);

  orderNumber = ordersArr.length + 1;

  // Create Order
  let order = new Order(mealNames[randomMeal], orderNumber, false);
});

console.log(ordersArr);
