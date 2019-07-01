'use strict';

let money, income, addExpenses, deposit, mission, period;
money = prompt('Ваш месячный доход');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
addExpenses = addExpenses.split(', ');
console.log(addExpenses);
deposit = prompt('Есть ли у вас депозит в банке');
deposit = Boolean(deposit);
mission = 1000000;


console.log('money - ', typeof money);
console.log('income - ', typeof income);
console.log('deposit - ', typeof deposit);

let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть? (одно слово)');
let question2 = prompt('Какие обязательные ежемесячные расходы у вас есть? (одно слово)');
let question3 = +prompt('Во сколько это обойдется?', question1);
let question4 = +prompt('Во сколько это обойдется?', question2);


let budgetMonth = money - question3 - question4;
console.log('budget month = ', budgetMonth);

let month = mission / money;
console.log('Mission month', Math.ceil(month));

// console.log('Income length', income.length);
// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split(', '));

// console.log('Период: ', period, 'месяцев');
// console.log('Цель заработать: ', mission, 'гривен');

let budgetDay = budgetMonth / 30;
console.log('budget day: ', Math.floor(budgetDay))

if (budgetDay>=800){
    console.log('Высокий уровень дохода');
}
else if((budgetDay>=300) && (budgetDay<=800)){
    console.log('Средний уровень дохода');
}
else if((budgetDay>=0) && (budgetDay<=300)){
    console.log('Низкий уровень дохода');
}
else{
    console.log('Что то пошло не так');
}