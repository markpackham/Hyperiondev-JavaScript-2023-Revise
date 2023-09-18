const mainIngredientFilter =
  "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

let mainIngredient = prompt(
  "What is the main ingredient you would like to use eg(chicken, beef, salmon, pork, avocado)?"
);

let mainIngredientAnswer = mainIngredientFilter + mainIngredient;

const fetchMainIngredientMeals = async () => {
  try {
    const response = await fetch(mainIngredientAnswer);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchMainIngredientMeals();
