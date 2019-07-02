'use strict';

let money, income, addExpenses, deposit, mission, period;
money = +prompt('Ваш месячный доход');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
addExpenses = addExpenses.split(', ');
// console.log(addExpenses);
deposit = prompt('Есть ли у вас депозит в банке');
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

let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть? (одно слово)');
let question2 = prompt('Какие обязательные ежемесячные расходы у вас есть? (одно слово)');
let question3 = +prompt('Во сколько это обойдется?', question1);
let question4 = +prompt('Во сколько это обойдется?', question2);


let budgetMonth = money - question3 - question4;
// console.log('budget month = ', budgetMonth);

let month = mission / money;
month = Math.ceil(month);
// console.log('Mission month', month);

// console.log('Income length', income.length);
// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split(', '));

// console.log('Период: ', period, 'месяцев');
// console.log('Цель заработать: ', mission, 'гривен');

let budgetDay = budgetMonth / 30;
budgetDay = Math.floor(budgetDay);
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
function getExpensesMonth(){
    return question3 + question4;
}
// console.log(getExpensesMonth());

let AccumulatedMonth = function getAccumulatedMonth(){
    return money - getExpensesMonth();
}
// console.log('Accumulated Month', AccumulatedMonth());

function getTargetMonth(){
    let TargetMonth =  mission / AccumulatedMonth();
    return Math.floor(TargetMonth);
}
console.log('Target Month', getTargetMonth(), month);
