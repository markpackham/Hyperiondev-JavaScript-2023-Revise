const mainIngredientFilter =
  "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

let mainIngredient = "avocado";

// mainIngredient = prompt(
//   "What is the main ingredient you would like to use eg(chicken, beef, salmon, pork, avocado)?"
// );

let mainIngredientAnswer = mainIngredientFilter + mainIngredient;

const fetchMainIngredientMeals = async () => {
  try {
    const response = await fetch(mainIngredientAnswer);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

let meal = fetchMainIngredientMeals();
let mealsArr = [];

// Promise gets resolved
meal.then(function (result) {
  // Obtain the array of the object
  let mealsList = result.meals;

  // add to new array to just hold meal names
  const mealNames = mealsList.map((meal) => meal.strMeal);

  // Math.random() learned from
  // MDN Web Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomMeal = Math.floor(Math.random() * (mealNames.length - 1));
  console.log(mealNames[randomMeal]);
});
