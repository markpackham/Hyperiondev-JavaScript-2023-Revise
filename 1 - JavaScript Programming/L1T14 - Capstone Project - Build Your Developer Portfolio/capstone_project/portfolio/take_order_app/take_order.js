const mainIngredientFilter =
  "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

let mainIngredient = prompt(
  "What is the main ingredient you would like to use eg(chicken, beef, salmon, pork, avocado)?"
);

let mainIngredientAnswer = mainIngredientFilter + mainIngredient;

function fetchMainIngredientMeals() {
  return fetch(mainIngredientAnswer)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

fetchMainIngredientMeals();
