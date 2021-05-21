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
function inctive(elements) {
  elements.forEach(function (element) {
    element.classList.remove('active');
  });
}
