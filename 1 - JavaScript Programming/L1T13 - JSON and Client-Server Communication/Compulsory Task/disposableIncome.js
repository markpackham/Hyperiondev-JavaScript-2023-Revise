const incomesArr = [];
const expensesArr = [];

let incomeOutput = "";
let expenseOutput = "";

let totalIncome = 0;
let totalExpenses = 0;

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
      "   recurring:" +
      expensesArr[i].recurring +
      "\n";
  }
};

// Show Total Income
let getTotalIncome = () => {
  for (let i = 0; i < incomesArr.length; i++) {
    totalIncome += incomesArr[i].amount;
  }
};

let getTotalExpenses = () => {
  for (let i = 0; i < expensesArr.length; i++) {
    totalExpenses += expensesArr[i].amount;
  }
};

getTotalIncome();
getTotalExpenses();

displayIncome();
displayExpenses();
console.log(incomeOutput);
console.log(expenseOutput);

console.log("Total income: £" + totalIncome);
console.log("Total expenses: £" + totalExpenses);
console.log("Disposable income: £" + Number(totalIncome - totalExpenses));
