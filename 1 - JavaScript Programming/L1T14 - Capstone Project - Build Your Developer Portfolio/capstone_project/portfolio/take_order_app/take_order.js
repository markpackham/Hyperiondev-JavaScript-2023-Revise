const mainIngredientFilter =
  "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

// replace later with promot()
let mainIngredient = "avocado";

// mainIngredient = prompt(
//   "What is the main ingredient you would like to use eg(chicken, beef, salmon, pork, avocado)?"
// );

const mainIngredientAnswer = mainIngredientFilter + mainIngredient;

const fetchMainIngredientMeals = async () => {
  try {
    const response = await fetch(mainIngredientAnswer);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const meal = fetchMainIngredientMeals();

// Promise gets resolved
meal.then(function (result) {
  // Obtain the array of the object
  const mealsList = result.meals;

  // Add to new array to just hold meal names
  const mealNames = mealsList.map((meal) => meal.strMeal);

  // Math.random() learned from
  // MDN Web Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomMeal = Math.floor(Math.random() * (mealNames.length - 1));
  console.log(mealNames[randomMeal]);
});
