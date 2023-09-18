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
// Handle entries like Bicarbonate Of Soda so they become bicarbonate_of_soda
let mainIngredient = mainIngredientPrompt.toLowerCase().split(" ").join("_");

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

  if (mealsList === null) {
    console.log("ERRRORR!!!!!");
  } else {
    // Add to new array to just hold meal names
    const mealNames = mealsList.map((meal) => meal.strMeal);

    // Math.random() learned from
    // MDN Web Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    randomMeal = Math.floor(Math.random() * (mealNames.length - 1));
    console.log(`Your meal will be ${mealNames[randomMeal]}`);
  }
});
