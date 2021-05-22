//
//
const balanceEl = document.querySelector('.balance .value');
const incomeTotalEl = document.querySelector('.income-total');

const outcomeTotalEl = document.querySelector('.outcome-total');
const incomeEl = document.querySelector('#income-tracker');

const expenseEl = document.querySelector('#expense-tracker');
const allEl = document.querySelector('#all');

const incomeList = document.querySelector('#income-tracker .list');
const expenseList = document.querySelector('#expense-tracker .list');

const allList = document.querySelector('#all .list');
const lists = document.querySelectorAll('.list');

// Tabs
const expenseBtn = document.querySelector('.tab1');
const incomeBtn = document.querySelector('.tab2');
const allBtn = document.querySelector('.tab3');

// Input Buttons
const addExpense = document.querySelector('.add-expense');
const expenseTitle = document.querySelector('#expense-title-input');
const expenseAmount = document.querySelector('#expense-amount-input');

const addIncome = document.querySelector('.add-income');
const incomeTitle = document.querySelector('#income-title-input');
const incomeAmount = document.querySelector('#income-amount-input');

let ENTRY_LIST = [];
let [balance, income, outcome] = [0, 0, 0];
let [deleteIcon, editIcon] = ['fas fa-trash', 'far fa-edit'];

// Expense Button event listener
expenseBtn.addEventListener('click', function () {
  show(expenseEl);
  hide([incomeEl, allList]);
  active(expenseBtn);
  inactive([incomeBtn, allBtn]);
});

// Income Button event listener
incomeBtn.addEventListener('click', function () {
  show(incomeEl);
  hide([expenseEl, allList]);
  active(incomeBtn);
  inactive([expenseBtn, allBtn]);
});

// All Button event listener
allBtn.addEventListener('click', function () {
  show(allList);
  hide([expenseEl, incomeEl]);
  active(allBtn);
  inactive([expenseBtn, incomeBtn]);
});

// addExpense Event Listener
addExpense.addEventListener('click', budgetOut);

// addIncome Event Listener
addIncome.addEventListener('click', budgetIn);

// addExpense/addIncome Enter key Event Listener
document.addEventListener('keypress', function (e) {
  if (e.key !== 'Enter') {
    return;
  }

  budgetOut(e);
  budgetIn(e);
});

// Budget Out Function
function budgetOut(e) {
  e.preventDefault();
  if (!expenseTitle.value || !expenseAmount.value) {
    return;
  }

  let expense = {
    type: 'expense',
    title: expenseTitle.value,
    amount: parseInt(expenseAmount.value),
  };

  ENTRY_LIST.push(expense);

  updateUI();
  clearInput([expenseTitle, expenseAmount]);
}

// Budget In Function
function budgetIn(e) {
  e.preventDefault();
  if (!incomeTitle.value || !incomeAmount.value) {
    return;
  }

  let income = {
    type: 'income',
    title: incomeTitle.value,
    amount: +incomeAmount.value,
  };

  ENTRY_LIST.push(income);

  updateUI();
  clearInput([incomeTitle, incomeAmount]);
}

// updateUI function
function updateUI() {
  income = calculateTotal('income', ENTRY_LIST);
  outcome = calculateTotal('expense', ENTRY_LIST);
  balance = calculateBalance(income, outcome);

  console.log([balance, income, outcome]);
}

// clearInput function
function clearInput(inputs) {
  inputs.forEach((input) => {
    input.value = '';
  });
}

// calculateTotal Function
function calculateTotal(type, list) {
  let sum = 0;
  list.forEach(function (entry) {
    if (entry.type === type) {
      sum += entry.amount;
    }
  });
  return sum;
}

// calculateBalance Function
function calculateBalance(income, outcome) {
  return income - outcome;
}

// Show Function
function show(element) {
  element.classList.remove('hide');
}

// Hide Function
function hide(elements) {
  elements.forEach(function (element) {
    element.classList.add('hide');
  });
}

// Active Function
function active(element) {
  element.classList.add('active');
}

// Inactive Function
function inactive(elements) {
  elements.forEach(function (element) {
    element.classList.remove('active');
  });
}
