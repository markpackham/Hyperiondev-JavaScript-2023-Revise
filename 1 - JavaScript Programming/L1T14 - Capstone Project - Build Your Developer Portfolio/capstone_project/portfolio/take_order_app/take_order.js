// placeholder Ingredient list array till fetch request for all ingredients can be made to work
const fullIngredientList = [
  "chicken",
  "salmon",
  "beef",
  "pork",
  "avocado",
  "apple_cider_vinegar",
  "asparagus",
  "aubergine",
  "baby_plum_tomatoes",
  "bacon",
  "baking_powder",
  "balsamic_vinegar",
  "basil",
  "basil_leaves",
  "basmati_rice",
  "bay_leaf",
  "bay_leaves",
  "beef_brisket",
  "beef_fillet",
  "beef_gravy",
  "beef_stock",
  "bicarbonate_of_soda",
  "biryani_masala",
  "black_pepper",
  "black_treacle",
  "borlotti_beans",
  "bowtie_pasta",
  "bramley_apples",
  "brandy",
  "bread",
  "breadcrumbs",
  "broccoli",
  "brown_lentils",
  "brown_rice",
  "brown_sugar",
  "butter",
  "cacao",
  "cajun",
  "canned_tomatoes",
  "cannellini_beans",
  "cardamom",
  "carrots",
  "cashew_nuts",
  "cashews",
  "caster_sugar",
  "cayenne_pepper",
  "celeriac",
  "celery",
  "celery_salt",
  "challots",
  "charlotte_potatoes",
  "cheddar_cheese",
  "cheese",
  "cheese_curds",
  "cherry_tomatoes",
  "chestnut_mushroom",
  "chicken_breast",
];

// Variables
let ordersArr = [];
let ordersStatusArr = [];
let completeOrdersArray = [];
let incompleteOrdersArray = [];
let orderNumber = 0;
let lastOrderNumber = 0;
let meal_description = "";
let final_message = "";

// Order Class
class Order {
  constructor(meal_description, order_number, completion_status = false) {
    this.meal_description = meal_description;
    this.order_number = order_number;
    this.completion_status = completion_status;
    ordersArr.push(this);

    sessionStorage.setItem("orders", JSON.stringify(ordersArr));
    // Store last order number
    sessionStorage.setItem(
      "last_order_number",
      (lastOrderNumber = ordersArr.length + 1)
    );
  }
}

// Generate test data
const avocado1 = new Order("Chocolate Avocado Mousse", 1, true);
const avocado2 = new Order("Crock Pot Chicken Baked Tacos", 2, true);
const salmon1 = new Order("Salmon Avocado Salad", 3, false);
const salmon2 = new Order("Honey Teriyaki Salmon", 4, false);
const salmon3 = new Order("Salmon Prawn Risotto", 5, false);

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

// Call user to re-enter their order due to an error
const callForIngredientAgain = () => {
  mainIngredientPrompt = prompt(
    "Please enter a valid ingredient eg(chicken, beef, salmon, pork, avocado)?"
  );
  mainIngredient = mainIngredientPrompt.toLowerCase().split(" ").join("_");
};

// Call if user enter wrong number for order
const callForOrderNumberAgainIncomplete = () => {
  incompleteOrders = prompt(
    `Incomplete orders are ${incompleteOrdersArray} \n please enter an order you wish to mark as "Complete"`
  );
};

const callForOrderNumberAgainComplete = () => {
  completeOrders = prompt(
    `Complete orders are ${completeOrdersArray} \n please enter an order you wish to mark as "Incomplete"`
  );
};

while (true) {
  // Recursive function if user enters an ingredient that doesn't exist eg a null entry
  if (!fullIngredientList.includes(mainIngredient)) {
    callForIngredientAgain();
  } else {
    break;
  }
}

// Url we are searching for
let mainIngredientAnswer = mainIngredientFilter + mainIngredient;

// Use for of loop to iterate through our array and add incomplete orders
// Learned from MDN Web Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
const iterateIncompleteOrders = (ordersStatusArr) => {
  for (let order of ordersStatusArr) {
    if (order.completion_status === false) {
      incompleteOrdersArray.push(
        "\n" + order.order_number + " " + order.meal_description
      );
    }
  }
};

const iterateCompleteOrders = (ordersStatusArr) => {
  for (let order of ordersStatusArr) {
    if (order.completion_status === true) {
      completeOrdersArray.push(
        "\n" + order.order_number + " " + order.meal_description
      );
    }
  }
};

const fetchMainIngredientMeals = async () => {
  try {
    let response = await fetch(mainIngredientAnswer);
    let data = await response.json();

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

  // Create new Order
  let order = new Order(mealNames[randomMeal], orderNumber, false);

  ordersStatusArr = JSON.parse(sessionStorage.getItem("orders"));

  iterateIncompleteOrders(ordersStatusArr);

  incompleteOrders = prompt(
    `Incomplete orders are ${incompleteOrdersArray} \n please enter an order you wish to mark as "Complete" or 0 to skip`
  );

  while (true) {
    if (
      Number(incompleteOrders) > -1 &&
      Number(incompleteOrders) < lastOrderNumber
    ) {
      break;
    } else {
      alert("Sorry that order number was wrong please try again.");
      callForOrderNumberAgainIncomplete();
    }
  }

  ordersArr = JSON.parse(sessionStorage.getItem("orders"));

  for (order of ordersArr) {
    if (Number(incompleteOrders) === order.order_number) {
      order.completion_status = true;
    }
  }

  ordersStatusArr = JSON.parse(sessionStorage.getItem("orders"));

  iterateCompleteOrders(ordersStatusArr);

  completeOrders = prompt(
    `Complete orders are ${completeOrdersArray} \n please enter an order you wish to mark as "Incomplete or 0 to skip"`
  );

  while (true) {
    if (
      Number(completeOrders) > -1 &&
      Number(completeOrders) < lastOrderNumber
    ) {
      break;
    } else {
      alert("Sorry that order number was wrong please try again.");
      callForOrderNumberAgainComplete();
    }
  }

  for (order of ordersArr) {
    if (Number(completeOrders) === order.order_number) {
      order.completion_status = false;
    }
  }

  sessionStorage.setItem("orders", JSON.stringify(ordersArr));
  ordersArr = JSON.parse(sessionStorage.getItem("orders"));

  for (order of orderArr) {
    final_message +=
      order.order_number +
      " " +
      order.meal_description +
      " " +
      order.completion_status +
      "\n";
  }

  console.log(final_message);
});
