'use strict';

let money = 0,
    start = function(){
        do{
            money = prompt('Ваш месячный доход');
            console.log(money);
        }
        while (isNaN(money) || money == '' || money == null || money == ' '){
            let inCorrect = money;
        };
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 1000000,
    period: 12,
    budget: money,
    budgetMonth: 0,
    budgetDay: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        // console.log(addExpenses);
        appData.deposit = confirm('Есть ли у вас депозит в банке');
        appData.deposit = Boolean(deposit);
    },
    getAccumulatedMonth: function (){
        return money - expensesAmount;
    },
    // console.log('Accumulated Month', AccumulatedMonth());
    getTargetMonth: function(targetMonth){ 
        if (accumulatedMonth() > 0){
            return targetMonth =  Math.floor(appData.mission / accumulatedMonth());
        }
        if (accumulatedMonth() < 0){
            return 'Цель не будет достигнута';
        }   
        return; 
    },
    getStatusIncome: function(){
        if (budgetMonth>=800){
            return('Высокий уровень дохода');
        }
        else if((budgetMonth>=300) && (budgetMonth<=800)){
            return('Средний уровень дохода');
        }
        else if((budgetMonth>=0) && (budgetMonth<=300)){
            return('Низкий уровень дохода');
        }
        else{
            return('Что то пошло не так');
        }
    }
}

let showTypeof = function(item){
    console.log(item, typeof item);
}




// console.log('money - ', typeof money);
// console.log('income - ', typeof income);
// console.log('deposit - ', typeof deposit);

let question1,
question2, question3, sum;

let expensesMonth = function(){
    let sum = 0; 
    

    for(let i = 0; i < 2; i++){
        if(i === 0){
            do{
                question1 = prompt('Какие обязательные ежемесячные расходы у вас есть? (одно слово)');
            } while (question1 == '' || question1 == ' ')
        }
        else{
            do{
                question2 = prompt('Какие обязательные ежемесячные расходы у вас есть? (одно слово)');
            } while (question2 == '' || question2 == ' ')
        }

        do{
            question3 = prompt('Во сколько это обойдется?', 100);
        } while (question3 == '' || question3 == ' ')

        sum += question3;
        
    }

    return sum;
};
let expensesAmount = expensesMonth();
let correct = function(){
    while (isNaN(expensesAmount) || expensesAmount == '' || expensesAmount == null || expensesAmount == ' '){
        expensesAmount = prompt('Во сколько это обойдется?', 100);
    }
    while (isNaN(sum) || sum == '' || sum == null || sum == ' '){
        sum = prompt('Во сколько это обойдется?', 100);
    }
}
correct();

let accumulatedMonth = function getAccumulatedMonth(){
    return money - expensesAmount;
}
// // console.log('Accumulated Month', AccumulatedMonth());
// let tarMonth = function getTargetMonth(targetMonth){ 
//     if (accumulatedMonth() > 0){
//         return targetMonth =  Math.floor(mission / accumulatedMonth());
//     }
//     if (accumulatedMonth() < 0){
//         return 'Цель не будет достигнута';
//     }   
//     return; 
// }
// console.log('tarMonth():', tarMonth());

let budgetMonth = money - expensesAmount;
// console.log('budget month = ', budgetMonth);

let month = appData.mission / money;
month = Math.ceil(month);
// console.log('Mission month', month);

// console.log('Income length', income.length);
// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split(', '));

// console.log('Период: ', period, 'месяцев');
// console.log('Цель заработать: ', mission, 'гривен');


let minusBudgetDay = function minus(){
    let budgetDay = budgetMonth / 30;
    budgetDay = Math.floor(budgetDay);
    if(budgetDay > 0){
        return 'budgetDay: ', budgetDay;
    }
    if(budgetDay < 0){
        return 'Error';
    }
}
console.log('BudgetDay():', minusBudgetDay());
// console.log('budget day: ', budgetDay);

// if (budgetMonth>=800){
//     console.log('Высокий уровень дохода');
// }
// else if((budgetMonth>=300) && (budgetMonth<=800)){
//     console.log('Средний уровень дохода');
// }
// else if((budgetMonth>=0) && (budgetMonth<=300)){
//     console.log('Низкий уровень дохода');
// }
// else{
//     console.log('Что то пошло не так');
// }


//lesson04

console.log('getStatusIncome()', appData.getStatusIncome)



// console.log(getExpensesMonth());


