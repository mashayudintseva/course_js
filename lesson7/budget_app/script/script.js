const data = document.querySelector('.data');

const btn = document.getElementById('start');
const cancel = document.getElementById('cancel');

const firstPlus = document.getElementsByTagName('button')[0];
const secondPlus = document.getElementsByTagName('button')[1];

const checkbox = document.querySelector('#deposit-check');

const addIncome = document.querySelectorAll('.additional_income-item');

const resultBudgetDay = document.getElementsByClassName('budget_day-value')[0];
const resultExpensesMonth = document.getElementsByClassName('expenses_month-value')[0];
const resultAdditionalIncome = document.getElementsByClassName('additional_income-value')[0];
const resultAdditionalExpenses = document.getElementsByClassName('additional_expenses-value')[0];
const resultIncomePeriod = document.getElementsByClassName('income_period-value')[0];
const resultTargetMonth = document.getElementsByClassName('target_month-value')[0];

const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelectorAll('.income-title')[1];
let incomeItems = document.querySelectorAll('.income-items');
const incomeItem2 = document.getElementsByClassName('income-amount')[0];
const additionalIncomeItem = document.querySelector('.additional_income-item');
const additionalIncomeItem2 = document.querySelectorAll('.additional_income-item')[1];
const expensesTitle = document.querySelectorAll('.expenses-title')[1];
const expensesItem = document.querySelector('.expenses-amount');
let expensesItems = document.querySelectorAll('.expenses-items');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const depositCheck = document.querySelector('#deposit-check');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');
const budgetMonthValue = document.querySelector('.budget_month-value');
const depositBank = document.querySelector('.deposit-bank');

const periodAmount = document.querySelector('.period-amount');

salaryAmount.addEventListener('input', function() {
    btn.removeAttribute('disabled');
});

const validate = function() {
    const input = data.getElementsByTagName('input');
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('keyup', function() {
            if ((input[i].placeholder == "Сумма") || (input[i].placeholder == "Процент")) {
                const text = input[i].value;
                if (text * 1 + 0 != input[i].value) {
                    input[i].value = text.substring(0, text.length - 1);

                }
            }
        })

        input[i].addEventListener('input', function() {

            if (input[i].placeholder == "Наименование") {
                input[i].value = input[i].value.replace(/[^а-я]/, '');
            }

        })
    }
}
validate();
const reset = function() {
    const input = document.getElementsByTagName('input');
    for (let i = 0; i < input.length; i++) {
        input[i].value = "";
        periodSelect.value = 1;
        periodAmount.innerHTML = periodSelect.value;
        input[i].removeAttribute('disabled');
    }
    localStorage.clear();
};
const start = function() {

    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getInfoDeposit();
    this.getIncomeMonth();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget.budgetMonth();
    this.getBudget.budgetDay();
    this.calcSavedMoney();
    this.tarMonth();
    this.showResult();
    const input = data.getElementsByTagName('input');
    for (let i = 0; i < input.length; i++) {
        if (input[i].type == 'text') {
            input[i].setAttribute('disabled', 'disabled');
        }
    };
    btn.style.display = 'none';
    cancel.style.display = 'block';


};
const AppData = function() {
    this.budget = 0,
        this.income = {},
        this.addIncome = [],
        this.expenses = {},
        this.addExpenses = [],
        this.deposit = false,
        this.percentDeposit = 0,
        this.incomeMonth = 0,
        this.moneyDeposit = 0,
        this.expensesMonth = 0,
        this.budgetDay = 0,
        this.budgetMonth = 0,
        this.targetMonth = 0;

};
AppData.prototype.getSome = function(items, title, amount, where) {
    items.forEach((item) => {
        const it = item.querySelector(`.${title}`).value;
        const cash = item.querySelector(`.${amount}`).value;
        if (it !== '' && cash !== '') {
            where[it] = cash;
        }
    });
};

depositCheck.addEventListener('change', function() {
    if (depositCheck.checked) {
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        appData.deposit = true;
        depositBank.addEventListener('change', function() {
            const selectIndex = this.options[this.selectedIndex].value;
            if (selectIndex === 'other') {
                depositPercent.style.display = 'inline-block';
                depositPercent.value = "";
                depositPercent.removeAttribute('disabled');
            } else {
                depositPercent.style.display = 'none';
                depositPercent.value = selectIndex;
            }
        });
    } else {
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositAmount.value = "";
        appData.deposit = false;
    }
});
AppData.prototype.AddIt = function(block, button, check) {
    let cloneItem = block[0].cloneNode(true);
    block[0].parentNode.insertBefore(cloneItem, button);
    block = document.querySelectorAll(check);
    console.log('block: ', block);
    if (block.length === 3) {
        button.style.display = 'none';
    };
};
AppData.prototype.addExpensesBlock = function() {
    appData.AddIt(expensesItems, secondPlus, '.expenses-items')
}
AppData.prototype.addIncomeBlock = function() {
    appData.AddIt(incomeItems, firstPlus, '.income-items')
};


AppData.prototype.getExpenses = function() {
    this.getSome(expensesItems, 'expenses-title', 'expenses-amount', this.expenses)
};
AppData.prototype.getIncome = function() {
    this.getSome(incomeItems, 'income-title', 'income-amount', this.income)
};
AppData.prototype.getInfoDeposit = function() {
    if (this.deposit) {
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
    }
};

AppData.prototype.getAddExpenses = function() {
        let addExpenses = additionalExpensesItem.value.split(',');

        addExpenses.forEach((item) => {
            item = item.trim();
            if (item !== '') {
                this.addExpenses.push(item)
            }
        });


    },
    AppData.prototype.getAddIncome = function() {
        addIncome.forEach((item) => {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                this.addIncome.push(itemValue);
            }
        })
    },

    AppData.prototype.showResult = function() {
        budgetMonthValue.value = this.budgetMonth;
        resultBudgetDay.value = this.budgetDay;
        resultExpensesMonth.value = this.expensesMonth;
        resultAdditionalExpenses.value = this.addExpenses.join(', ');
        resultAdditionalIncome.value = this.addIncome.join(', ');
        resultTargetMonth.value = this.tarMonth();
        resultIncomePeriod.value = this.calcSavedMoney();
        periodSelect.addEventListener('input', function() {
            const text = periodAmount.innerHTML;
            const num = parseInt(text, 10);
            resultIncomePeriod.value = appData.budgetMonth * num;
        });
    };
AppData.prototype.rangeChange = function() {
    periodAmount.innerHTML = periodSelect.value;
};
AppData.prototype.getExpensesMonth = function() {
    for (let key in this.expenses) {

        this.expensesMonth += +this.expenses[key];


    }

};
AppData.prototype.getIncomeMonth = function() {
    for (let key in this.income) {

        this.incomeMonth += +this.income[key];


    }

};
AppData.prototype.getBudget = {
    budgetMonth: function() {
        if (localStorage.getItem('salaryAmountValue') !== null) {
            salaryAmount.value = localStorage.getItem('salaryAmountValue');
        }
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth + (appData.moneyDeposit * appData.percentDeposit) / 12;
    },
    budgetDay: function() {
        let budgetOnDay = appData.budgetMonth / 30;
        budgetOnDay = Math.round(budgetOnDay);
        appData.budgetDay = budgetOnDay;
    }

};
AppData.prototype.tarMonth = function() {
    if (this.budgetMonth > 0) {
        this.targetMonth = targetAmount.value / this.budgetMonth;
        this.targetMonth = Math.ceil(this.targetMonth);
        return this.targetMonth;
    } else {
        return 'Цель не будет достигнута';
    }
};
AppData.prototype.calcSavedMoney = function() {
    return this.budgetMonth * periodSelect.value;
}
const appData = new AppData();

AppData.prototype.eventsListeners = function() {
    periodSelect.addEventListener('input', appData.rangeChange);
    secondPlus.addEventListener('click', appData.addExpensesBlock);
    firstPlus.addEventListener('click', appData.addIncomeBlock);
    btn.addEventListener('click', start.bind(appData));
    cancel.addEventListener('click', reset);
}
AppData.prototype.eventsListeners();