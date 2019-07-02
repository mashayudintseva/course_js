let lang = prompt('Введите язык (en/ru)');
if (lang === 'en'){
    console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday')
}
else if(lang === 'ru'){
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье')
}
switch(lang){
    case 'en': console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday'); break;
    case 'ru': console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'); break;
}

// let en = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let language = [
    ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
];
// let language = [en, ru];

let array = (lang === 'ru') ? language[0] :
(lang === 'en') ? language[1] :
'Error';

console.log(array);

let namePerson = prompt('Введите имя');
let message = (namePerson === 'Артём') ? 'Директор' :
  (namePerson === 'Максим') ? 'Преподаватель' :
  (namePerson === 'Кирилл') ? 'Куратор' :
  'Студент';

console.log(message);