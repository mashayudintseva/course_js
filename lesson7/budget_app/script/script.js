let btn = document.getElementById('start');

let firstPlus = document.getElementsByTagName('button')[0];
let secondPlus = document.getElementsByTagName('button')[1];

let checkbox = document.querySelector('#deposit-check');

let addIncome = document.querySelectorAll('.additional_income-item');

let resultBudgetDay = document.getElementsByClassName('result-budget_day');
let resultExpensesMonth = document.getElementsByClassName('result-expenses_month');
let resultAdditionalIncome = document.getElementsByClassName('result-additional_income');
let resultAdditionalExpenses = document.getElementsByClassName('result-additional_expenses');
let resultIncomePeriod = document.getElementsByClassName('result-income_period');
let resultTargetMonth = document.getElementsByClassName('result-target_month');

let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let additionalIncomeItem = document.querySelector('.additional_income-item');
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositCheck = document.querySelector('#deposit-check');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let budgetMonthValue = document.querySelector('.budget_month-value');
