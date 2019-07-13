let data = document.querySelector('.data');

let btn = document.getElementById('start');
let cancel = document.getElementById('cancel');

let firstPlus = document.getElementsByTagName('button')[0];
let secondPlus = document.getElementsByTagName('button')[1];

let checkbox = document.querySelector('#deposit-check');

let addIncome = document.querySelectorAll('.additional_income-item');

let resultBudgetDay = document.getElementsByClassName('budget_day-value')[0];
let resultExpensesMonth = document.getElementsByClassName('expenses_month-value')[0];
let resultAdditionalIncome = document.getElementsByClassName('additional_income-value')[0];
let resultAdditionalExpenses = document.getElementsByClassName('additional_expenses-value')[0];
let resultIncomePeriod = document.getElementsByClassName('income_period-value')[0];
let resultTargetMonth = document.getElementsByClassName('target_month-value')[0];

let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeItems = document.querySelectorAll('.income-items');
let additionalIncomeItem = document.querySelector('.additional_income-item');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let depositCheck = document.querySelector('#deposit-check');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let budgetMonthValue = document.querySelector('.budget_month-value');

let periodAmount = document.querySelector('.period-amount');

let disabled = btn.setAttribute('disabled', 'disabled');
salaryAmount.addEventListener('input', function() {
    btn.removeAttribute('disabled');
});

let validate = function(){
    let input = data.getElementsByTagName('input');
    for (let i = 0; i < input.length; i++) {
        input[i].addEventListener('keyup', function(){
            if(input[i].placeholder == "Сумма"){
                let text = input[i].value;
                if(text*1 + 0  !=  input[i].value){
                    input[i].value = text.substring(0, text.length - 1);
            
                }
            }
        })
        
        input[i].addEventListener('input', function(){
            
            if(input[i].placeholder == "Наименование"){
                input[i].value = input[i].value.replace(/[^а-я]/,'');
        }
        
})
}
}
validate();
let reset = function(){
    let input = document.getElementsByTagName('input');
    for (let i = 0; i < input.length; i++) {
        input[i].value = "";
        periodSelect.value = 1;
        periodAmount.innerHTML = periodSelect.value;
    }
};
let start =  function(){
        
    console.log('this: ', this);
    
    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getIncomeMonth();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget.budgetMonth();
    this.getBudget.budgetDay();
    this.calcSavedMoney();
    this.tarMonth();

    this.showResult();

    // let inputs = data.querySelectorAll('input');
    // if(inputs.type === "text"){
    //     let text = inputs;
    //     text.disabled = true;
    // }
    let input = data.getElementsByTagName('input');
    for (let i = 0; i < input.length; i++) {   
        if (input[i].type == 'text') {
            input[i].setAttribute('disabled', 'disabled');
            //alert(childNodes[i].type);

        }
    };


    btn.style.display = 'none';
    cancel.style.display = 'block';
    // appData.getStatusIncome();
    // appData.tarMonth();
    // appData.getInfoDeposit();
}

let appData = {
    budget: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    incomeMonth: 0,
    moneyDeposit: 0,
    expensesMonth: 0,
    
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);     
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, secondPlus);
        cloneExpensesItem.childNodes[1].value = "";
        cloneExpensesItem.childNodes[3].value = "";
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            secondPlus.style.display = 'none';
        }

        
    },
    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, firstPlus);
        cloneIncomeItem.childNodes[1].value = "";
        cloneIncomeItem.childNodes[3].value = "";
        incomeItems = document.querySelectorAll('.income-items');
        
        if(incomeItems.length === 3){
            firstPlus.style.display = 'none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExenses = item.querySelector('.expenses-title').value;
            let cashExepenses = item.querySelector('.expenses-amount').value;
            if(itemExenses !== '' && cashExepenses !== ''){
                appData.expenses[itemExenses] = cashExepenses;
            }
        });
    },
    getIncome: function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = cashIncome;
            }
        });
    },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item)
            }
        });
        
        
    },
    getAddIncome: function(){
        addIncome.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        })
    },
    showResult: function(){
        budgetMonthValue.value = this.budgetMonth;
        resultBudgetDay.value = this.budgetDay;
        resultExpensesMonth.value = this.expensesMonth;
        resultAdditionalExpenses.value = this.addExpenses.join(', ');
        resultAdditionalIncome.value = this.addIncome.join(', ');
        resultTargetMonth.value = this.tarMonth();
        resultIncomePeriod.value = this.calcSavedMoney();
        periodSelect.addEventListener('input', function(){
            let text = periodAmount.innerHTML;
            let num = parseInt(text, 10);
            resultIncomePeriod.value = appData.budgetMonth * num;
        });
    },
    rangeChange: function(){
        periodAmount.innerHTML = periodSelect.value;
    },
    budgetDay: 0,
    budgetMonth: 0,
    targetMonth: 0,
    getExpensesMonth: function(){
        for(let key in this.expenses){
            
            this.expensesMonth += +this.expenses[key];
            
            
        }     
        
    }, 
    getIncomeMonth: function(){
        for(let key in this.income){
            
            this.incomeMonth += +this.income[key];
            
            
        }     
        
    }, 
    // 
    //     let question1, question2, question3, sum = 0;
    //     
    //         if (i === 0) {
    //             question1 = prompt('Какие обязательные ежемесячные расходы у вас есть? (одно слово)');
    //         }
    //         else if (i === 1) {
    //             question2 = prompt('Какие обязательные ежемесячные расходы у вас есть? (одно слово)');
    //         }
    //         do {
    //             question3 = +prompt('Во сколько это обойдется?', 100);
    //         } while (isNaN(question3) || question3 == '' || question3 == null || question3 == ' ');
    //         sum += question3;
    //     }
    //     return sum;
    // },
    getBudget: {
        budgetMonth: function(){
            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        },
        budgetDay: function(){
            let budgetOnDay = appData.budgetMonth / 30;
            budgetOnDay = Math.round(budgetOnDay);
            appData.budgetDay =  budgetOnDay;
        }
        
    },
    tarMonth: function(){ 
        if (this.budgetMonth > 0){
            this.targetMonth =  targetAmount.value / this.budgetMonth;
            this.targetMonth = Math.ceil(this.targetMonth);
            return this.targetMonth;
        } else {
            return 'Цель не будет достигнута';
        }   
    },
    // getStatusIncome: function(){
    //     if (appData.getBudget.budgetMonth() >= 800){
    //         return('Высокий уровень дохода');
    //     }
    //     else if((appData.getBudget.budgetMonth() >= 300) && (appData.getBudget.budgetMonth() <= 800)){
    //         return('Средний уровень дохода');
    //     }
    //     else if((appData.getBudget.budgetMonth() >= 0) && (appData.getBudget.budgetMonth() <= 300)){
    //         return('Низкий уровень дохода');
    //     }
    //     else{
    //         return('Что то пошло не так');
    //     }
    // },
    // getInfoDeposit: function(){
    //     if(appData.deposit){
    //         do {
    //             appData.percentDeposit = prompt('Какой годовой процент?', 10);
    //         } while (isNaN(appData.percentDeposit) || appData.percentDeposit == '' || appData.percentDeposit == null || appData.percentDeposit == ' ');
    //         do{
    //             appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
    //         } while (isNaN(appData.moneyDeposit) || appData.moneyDeposit == '' || appData.moneyDeposit == null || appData.moneyDeposit == ' ');
    //     }
    // },
    calcSavedMoney: function(){
        return this.budgetMonth * periodSelect.value;
    }
    // upAddEx: []
};
periodSelect.addEventListener('input', appData.rangeChange);
secondPlus.addEventListener('click', appData.addExpensesBlock);
firstPlus.addEventListener('click', appData.addIncomeBlock);
btn.addEventListener('click', start.bind(appData));
cancel.addEventListener('click', reset);


// appData.budgetDay = appData.getBudget.budgetDay(); 
// appData.budgetMonth = appData.getBudget.budgetMonth();
// let consol = function(){
//     for(let key in appData){
//         console.log('Наша программа включает в себя данные: ' + key)
//     }
// }
// console.log('addExpenses: ', appData.addExpenses);

// console.log('Расходы за месяц: ', appData.expensesMonth);
// console.log('За какой период будет достигнута цель (в месяцах): ', appData.tarMonth());
// console.log('Уровень дохода: ', appData.getStatusIncome());
// consol();
// console.log('appData.income: ', appData.income);
// function ucFirst() {
//     for(let i = 0; i < appData.addExpenses.length; i++){
//         appData.upAddEx[i] = appData.addExpenses[i][0].toUpperCase() + appData.addExpenses[i].slice(1);
//     }
//     appData.upAddEx.join(', ');
//   }
  
// ucFirst();
// console.log('appData.upAddEx: ', appData.upAddEx);