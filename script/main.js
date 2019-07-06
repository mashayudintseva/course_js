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

let income, addExpenses, deposit, mission, period;
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
addExpenses = addExpenses.split(', ');
// console.log(addExpenses);
deposit = confirm('Есть ли у вас депозит в банке');
deposit = Boolean(deposit);
mission = 1000000;
income = 'freelance';

let showTypeof = function(item){
    console.log(item, typeof item);
}



showTypeof(money);
showTypeof(income);
showTypeof(deposit);

// console.log('money - ', typeof money);
// console.log('income - ', typeof income);
// console.log('deposit - ', typeof deposit);

let question1,
question2, question3, sum;

let expensesMonth = function(){
    let question1,
    question2, question3, sum = 0;
    

    for(let i = 0; i < 2; i++){
        if(i === 0){
            question1 = prompt('Какие обязательные ежемесячные расходы у вас есть? (одно слово)');
        }
        else if (i === 1){
            question2 = prompt('Какие обязательные ежемесячные расходы у вас есть? (одно слово)');
        }

        do{
            question3 = prompt('Во сколько это обойдется?', 100);
        } while (isNaN(question3) || question3 == '' || question3 == null || question3 == ' ')

        sum += question3;
        
    }

    return sum;
};
let expensesAmount = expensesMonth();

let accumulatedMonth = function getAccumulatedMonth(){
    return money - expensesAmount;
}
// console.log('Accumulated Month', AccumulatedMonth());
let tarMonth = function getTargetMonth(targetMonth){ 
    if (accumulatedMonth() > 0){
        return targetMonth =  Math.floor(mission / accumulatedMonth());
    }
    if (accumulatedMonth() < 0){
        return 'Цель не будет достигнута';
    }   
    return; 
}
console.log('tarMonth():', tarMonth());

let budgetMonth = money - expensesAmount;
// console.log('budget month = ', budgetMonth);

let month = mission / money;
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
function getStatusIncome(){
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
console.log('getStatusIncome()', getStatusIncome());



// console.log(getExpensesMonth());


