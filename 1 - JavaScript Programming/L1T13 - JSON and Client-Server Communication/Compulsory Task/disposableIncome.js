let incomesArr = [];
let expensesArr = [];

let iName = "";
let amount = 0;

let incomeOutput = "";
let expenseOutput = "";

let savings = 0;

// Constructors for Income and Expenses
function Income(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;

  incomesArr.push(this);
}

function Expenses(name, amount, recurring) {
  this.name = name;
  this.amount = amount;
  this.recurring = recurring;

  expensesArr.push(this);
}

// Add a new Income
// Prevent default page refresh behavior learned from MDN Webdocs
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
function addIncome() {
  iName = document.getElementById("iName").value;
  console.log(iName);
  // incomesArr = JSON.parse(sessionStorage.getItem("incomes"));
  // let newIncome = new Income(
  //   document.getElementById("iName").value,
  //   document.getElementById("amount").value
  //   // document.getElementById("recurring")
  // );
  // incomesArr.push(newIncome);
}

// Income
let janitor = new Income("salary", 100, true);
let cleaner = new Income("salary", 200, true);
let bouncer = new Income("salary", 300, true);
let sales = new Income("wage", 400, false);
let waiter = new Income("tips", 10, false);

// Expenses
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

// Show expenses - very simular to income function did consider refactoring both into 1 function
// and have it take arrays as a parameter but I want to keep the incomeOutput & expenseOutput seperate
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

// reduce method learned from MDN Web Docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
let totalIncome = () => {
  return incomesArr.reduce((total, income) => total + income.amount, 0);
};

let totalExpenses = () => {
  return expensesArr.reduce((total, expense) => total + expense.amount, 0);
};

displayIncome();
displayExpenses();

incomePrompt = prompt(
  incomeOutput + "\n Add new income seperated by commas eg 'tips,10,false'"
);
const incomePromptArray = incomePrompt.split(",");
// add new object to incomes array
let newIncome = new Income(
  incomePromptArray[0],
  Number(incomePromptArray[1]),
  incomePromptArray[2]
);

displayIncome();
displayExpenses();
console.log(incomeOutput);
console.log(expenseOutput);

// toFixed() learned from MDN Web Docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
let disposableIncome = Number(totalIncome() - totalExpenses()).toFixed(2);

console.log("Total income: £" + totalIncome());
console.log("Total expenses: £" + totalExpenses());
console.log("Disposable income: £" + disposableIncome);

// alert(
//   `Total disposable income after savings: £${(
//     disposableIncome - savings
//   ).toFixed(2)}`
// );
