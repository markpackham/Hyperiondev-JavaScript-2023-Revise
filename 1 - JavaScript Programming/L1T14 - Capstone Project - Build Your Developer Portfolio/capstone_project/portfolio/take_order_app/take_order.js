const mainIngredientFilter = "www.themealdb.com/api/json/v1/1/filter.php?i=";

let mainIngredient = prompt(
  "What is the main ingredient you would like to use eg(chicken, beef, salmon, pork, avocado)?"
);

let mainIngredientAnswer = mainIngredientFilter + mainIngredient;

let food = async () => {
  let response = await fetch(mainIngredientAnswer);
  let recipes = await response.json();
  console.log(recipes);
};

food();
