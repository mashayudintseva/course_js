'use strict';
let money = 0,
    start = function(){
        do{
            money = prompt('Ваш месячный доход');
            console.log(money);
        }
        while (isNaN(money) || money == '' || money == null || money == ' ')
    };

start();

let income, addExpenses, deposit, mission, period;
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
addExpenses = addExpenses.split(', ');
// console.log(addExpenses);
deposit = confirm('Есть ли у вас депозит в банке');
deposit = Boolean(deposit);

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
            question3 = +prompt('Во сколько это обойдется?', 100);
        } while (isNaN(question3) || question3 == '' || question3 == null || question3 == ' ')

        sum += question3;
        
    }

    return sum;
};
let expensesAmount = expensesMonth();
console.log('Expenses Amount: ', expensesAmount);
let accumulatedMonth = money - expensesAmount;
console.log('Accumulated Month: ', accumulatedMonth);
// console.log('Accumulated Month', AccumulatedMonth());

let targetMonth = 0;

let tarMonth = function(){ 
    if (accumulatedMonth > 0){
        mission = 1000000;
        targetMonth =  mission / accumulatedMonth;
        targetMonth = Math.floor(targetMonth);
        console.log('targetMonth: ', targetMonth);
    } else {
        console.log('Цель не будет достигнута');
    }   
}

// console.log('budget month = ', budgetMonth);

let month = mission / money;
month = Math.ceil(month);
// console.log('Mission month', month);

// console.log('Income length', income.length);
// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split(', '));

// console.log('Период: ', period, 'месяцев');
// console.log('Цель заработать: ', mission, 'гривен');


let getBudgetDay = function(){
    let budgetDay = accumulatedMonth / 30;
    budgetDay = Math.floor(budgetDay);
    if(budgetDay > 0){
        return 'budgetDay: ', budgetDay;
    }
    if(budgetDay < 0){
        return 'Error';
    }
}
console.log('Budget Day:', getBudgetDay());
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
    if (accumulatedMonth >= 800){
        return('Высокий уровень дохода');
    }
    else if((accumulatedMonth >= 300) && (accumulatedMonth <= 800)){
        return('Средний уровень дохода');
    }
    else if((accumulatedMonth >= 0) && (accumulatedMonth <= 300)){
        return('Низкий уровень дохода');
    }
    else{
        return('Что то пошло не так');
    }
}
console.log('Status Income', getStatusIncome());



// console.log(getExpensesMonth());


