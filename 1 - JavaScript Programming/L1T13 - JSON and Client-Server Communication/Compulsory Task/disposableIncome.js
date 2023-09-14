const incomesArr = [];
const expensesArr = [];

function myLoad() {
  let incomeList = document.getElementById("incomeList");
  let expensesList = document.getElementById("expensesList");

  if (sessionStorage.getItem("hasCodeRunBefore") === null) {
    sessionStorage.setItem("incomes", JSON.stringify(incomesArr));
    sessionStorage.setItem("hasCodeRunBefore", true);
  } else {
    //Get the array of person objects from sessionStorage and assign it to the array 'pers'
    incomesArr = JSON.parse(sessionStorage.getItem("incomes"));

    let i = 0;

    //Loop through each person (p) in the pers array
    /*For each person in the array create an option element that displays 
      that person's name and add it to the select (dropdown) element on the HTML page */

    incomesArr.forEach(function (inc) {
      let optItem = document.createElement("option");
      optItem.innerHTML = inco.name;
      optItem.value = i;
      i = i + 1;
      htmlSelect.appendChild(optItem);
    });
  }
}

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
  sessionStorage.setItem("incomes", JSON.stringify(incomesArr));
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
