let incomesArr = [];
let expensesArr = [];

// use 2 seperate outputs or they wind up getting concatenated
let incomeOutput = "";
let expenseOutput = "";

// Constructor for Income
function Income(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;

  incomesArr.push(this);
}

// Constructor for Expenses
function Expenses(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;

  expensesArr.push(this);
}

// Income objects
let janitor = new Income("salary", 100, true);
let cleaner = new Income("salary", 200, true);
let bouncer = new Income("salary", 300, true);
let sales = new Income("wage", 400, false);
let waiter = new Income("tips", 10, false);

// Expenses objects
let food = new Expenses("food", 10, true);
let water = new Expenses("water", 10, true);
let electricity = new Expenses("electricity", 20, true);
let fuel = new Expenses("fuel", 20, true);
let wedding = new Expenses("wedding", 100, false);

// Show income
const displayIncome = () => {
  for (let i = 0; i < incomesArr.length; i++) {
    incomeOutput +=
      incomesArr[i].name +
      "   £" +
      incomesArr[i].amount +
      "   recurring:" +
      incomesArr[i].recurring +
      "\n";
  }
};

// Show expenses
const displayExpenses = () => {
  for (let i = 0; i < expensesArr.length; i++) {
    expenseOutput +=
      expensesArr[i].name +
      "   £" +
      expensesArr[i].amount +
      "   recurring: " +
      expensesArr[i].recurring +
      "\n";
  }
};

// reduce method learned from MDN Web Docs to sum the incomes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
let totalIncome = () => {
  return incomesArr.reduce((total, income) => total + income.amount, 0);
};

let totalExpenses = () => {
  return expensesArr.reduce((total, expense) => total + expense.amount, 0);
};

// update the incomeOutput
displayIncome();

incomePrompt = prompt(
  incomeOutput + "\n Add new income seperated by commas eg 'tips,10,false'"
);
const incomePromptArray = incomePrompt.split(",");

// handle null entires via Nullish coalescing operator learned from Web Docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
incomePromptArray[0] = null ?? "Unpaid";
incomePromptArray[1] = null ?? 0;
incomePromptArray[2] = null ?? false;

// add new object to incomes array
let newIncome = new Income(
  incomePromptArray[0],
  Number(incomePromptArray[1]),
  incomePromptArray[2]
);

// update the expensesOutput
displayExpenses();

expensePrompt = prompt(
  expenseOutput + "\n Add new expense seperated by commas eg 'shoes,10,true'"
);
const expensePromptArray = expensePrompt.split(",");

expensePromptArray[0] = null ?? "No Fee";
expensePromptArray[1] = null ?? 0;
expensePromptArray[2] = null ?? false;

let newExpense = new Expenses(
  expensePromptArray[0],
  Number(expensePromptArray[1]),
  expensePromptArray[2]
);

// toFixed() learned from MDN Web Docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
let disposableIncome = Number(totalIncome() - totalExpenses()).toFixed(2);

// loop until user enters a savings number that won't render them bankrupt
while (true) {
  savingsPrompt = prompt(
    `You disposable income is ${disposableIncome} how much would you like to put in savings?`
  );

  if (Number(savingsPrompt) > disposableIncome && savingsPrompt !== "quit") {
    alert(
      "You won't have any money please enter a lower savings number. Or enter 'quit'."
    );
  } else {
    break;
  }
}

alert(
  `Total disposable income after savings: £${Number(
    disposableIncome - savingsPrompt
  ).toFixed(2)}`
);
