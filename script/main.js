'use strict';

let money = 0,
    start = function(){
        do{
            money = prompt('Ваш месячный доход');
        }
        while (isNaN(money) || money == '' || money == null || money == ' ')
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 1000000,
    period: 7,
    expensesMonth: 0,
    asking: function(){
        appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = appData.addExpenses.toLowerCase().split(', ');
        // console.log(addExpenses);
        appData.deposit = confirm('Есть ли у вас депозит в банке');
        appData.deposit = Boolean(appData.deposit);
            for (let i = 0; i < 2; i++) {
                let question1 = '', question3 = 0;
                do {
                    question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
                } while (question1 == '' || question1 == ' ');
                do {
                    question3 = +prompt('Во сколько это обойдется?', 100);
                } while (isNaN(question3) || question3 == '' || question3 == null || question3 == ' ');
                appData.expenses[question1] = question3;
            }
            
    },
    
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    targetMonth: 0,
    getExpensesMonth: function(){
        for(let key in appData.expenses){
            
            appData.expensesMonth += appData.expenses[key];
            
            
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
            return money - appData.expensesMonth;
        },
        budgetDay: function(){
            let budgetOnDay = appData.getBudget.budgetMonth() / 30;
            budgetOnDay = Math.floor(budgetOnDay);
            return budgetOnDay;
        }
        
    },
    tarMonth: function(){ 
        if (appData.getBudget.budgetMonth() > 0){
            let mission = 1000000;
            appData.targetMonth =  mission / appData.getBudget.budgetMonth();
            appData.targetMonth = Math.floor(appData.targetMonth);
            return appData.targetMonth;
        } else {
            return 'Цель не будет достигнута';
        }   
    },
    getStatusIncome: function(){
        if (appData.getBudget.budgetMonth() >= 800){
            return('Высокий уровень дохода');
        }
        else if((appData.getBudget.budgetMonth() >= 300) && (appData.getBudget.budgetMonth() <= 800)){
            return('Средний уровень дохода');
        }
        else if((appData.getBudget.budgetMonth() >= 0) && (appData.getBudget.budgetMonth() <= 300)){
            return('Низкий уровень дохода');
        }
        else{
            return('Что то пошло не так');
        }
    }
};
appData.asking();
appData.getExpensesMonth();
appData.getStatusIncome();
appData.tarMonth();
appData.getBudget.budgetDay();
appData.getBudget.budgetMonth();
console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('За какой период будет достигнута цель (в месяцах): ', appData.tarMonth());
console.log('Уровень дохода: ', appData.getStatusIncome());

// console.log('money - ', typeof money);
// console.log('income - ', typeof income);
// console.log('deposit - ', typeof deposit);

// let question1,
// question2, question3, sum;

// let expensesMonth = function(){
//     let question1,
//     question2, question3, sum = 0;
    

//     for(let i = 0; i < 2; i++){
//         if(i === 0){
//             question1 = prompt('Какие обязательные ежемесячные расходы у вас есть? (одно слово)');
//         }
//         else if (i === 1){
//             question2 = prompt('Какие обязательные ежемесячные расходы у вас есть? (одно слово)');
//         }

//         do{
//             question3 = +prompt('Во сколько это обойдется?', 100);
//         } while (isNaN(question3) || question3 == '' || question3 == null || question3 == ' ')

//         sum += question3;
        
//     }

//     return sum;
// };
// let expensesAmount = expensesMonth();
// console.log('Expenses Amount: ', expensesAmount);
// let accumulatedMonth = money - expensesAmount;
// console.log('Accumulated Month: ', accumulatedMonth);
// // console.log('Accumulated Month', AccumulatedMonth());

// let targetMonth = 0;

// let tarMonth = function(){ 
//     if (accumulatedMonth > 0){
//         mission = 1000000;
//         targetMonth =  mission / accumulatedMonth;
//         targetMonth = Math.floor(targetMonth);
//         console.log('targetMonth: ', targetMonth);
//     } else {
//         console.log('Цель не будет достигнута');
//     }   
// }

// // console.log('budget month = ', budgetMonth);

// let month = mission / money;
// month = Math.ceil(month);
// // console.log('Mission month', month);

// // console.log('Income length', income.length);
// // console.log(addExpenses.toLowerCase());
// // console.log(addExpenses.split(', '));

// // console.log('Период: ', period, 'месяцев');
// // console.log('Цель заработать: ', mission, 'гривен');


// let getBudgetDay = function(){
//     let budgetDay = accumulatedMonth / 30;
//     budgetDay = Math.floor(budgetDay);
//     if(budgetDay > 0){
//         return 'budgetDay: ', budgetDay;
//     }
//     if(budgetDay < 0){
//         return 'Error';
//     }
// }
// console.log('Budget Day:', getBudgetDay());
// // console.log('budget day: ', budgetDay);

// // if (budgetMonth>=800){
// //     console.log('Высокий уровень дохода');
// // }
// // else if((budgetMonth>=300) && (budgetMonth<=800)){
// //     console.log('Средний уровень дохода');
// // }
// // else if((budgetMonth>=0) && (budgetMonth<=300)){
// //     console.log('Низкий уровень дохода');
// // }
// // else{
// //     console.log('Что то пошло не так');
// // }


// //lesson04
// function getStatusIncome(){
//     if (accumulatedMonth >= 800){
//         return('Высокий уровень дохода');
//     }
//     else if((accumulatedMonth >= 300) && (accumulatedMonth <= 800)){
//         return('Средний уровень дохода');
//     }
//     else if((accumulatedMonth >= 0) && (accumulatedMonth <= 300)){
//         return('Низкий уровень дохода');
//     }
//     else{
//         return('Что то пошло не так');
//     }
// }
// console.log('Status Income', getStatusIncome());



// // console.log(getExpensesMonth());



// let showTypeof = function(item){
//     console.log(item, typeof item);
// }




// console.log('money - ', typeof money);
// console.log('income - ', typeof income);
// console.log('deposit - ', typeof deposit);



