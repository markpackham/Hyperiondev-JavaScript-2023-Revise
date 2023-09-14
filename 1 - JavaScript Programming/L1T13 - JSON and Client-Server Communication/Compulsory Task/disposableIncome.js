const incomesArr = [];
const expensesArr = [];

let incomeOutput = "";
let expenseOutput = "";

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
function addIncome() {
  incomesArr = JSON.parse(sessionStorage.getItem("incomes"));
  let newIncome = new Income(
    document.getElementById("iName").value,
    document.getElementById("amount").value,
    document.getElementsByName("recurring").value
  );
  incomesArr.push(newIncome);
  console.log(incomesArr);
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
  for (let index = 0; index < incomesArr.length; index++) {
    incomeOutput +=
      incomesArr[index].name +
      "   £" +
      incomesArr[index].amount +
      "   recurring:" +
      incomesArr[index].recurring +
      "\n";
  }
};

// Show expenses - very simular to income function did consider refactoring both into 1 function
// and have it take arrays as a parameter but I want to keep the incomeOutput & expenseOutput seperate
const displayExpenses = () => {
  for (let index = 0; index < expensesArr.length; index++) {
    expenseOutput +=
      expensesArr[index].name +
      "   £" +
      expensesArr[index].amount +
      "   recurring:" +
      expensesArr[index].recurring +
      "\n";
  }
};

displayIncome();
displayExpenses();
console.log(incomeOutput);
console.log(expenseOutput);
