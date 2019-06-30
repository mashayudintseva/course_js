let money, income, addExpenses, deposit, mission, period;
money = 350000;
income = 'freelance';
addExpenses = 'Food, Technics, Housing';
deposit = true;
mission = 1000000;
period = 11;



console.log('money - ', typeof money);
console.log('deposit - ', typeof deposit);
console.log('income - ', typeof income);
console.log('Income length', income.length);
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

console.log('Период: ', period, 'месяцев');
console.log('Цель заработать: ', mission, 'гривен');

let budgetDay = money / 30;
let percent = money % 30;
console.log('Дневной бюджет', budgetDay,'Oстаток от деления', percent);
