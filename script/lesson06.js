// function myFunction(argumentFunc){
//     if (typeof(argumentFunc) === "string"){
//         console.log(arguments);
//         let arg = argumentFunc.trim();
//         console.log(arg);
//         if (argumentFunc.length >= 30){
//             let str = argumentFunc.substr(0, 30).concat("...");
//             console.log(str);
//         }
//         return 'string';
//     }
//     else{
//         alert('Передана не строка');
//         return('Передана не строка');
//     }
// }
// console.log('Function', myFunction('    Lorem ipsum dolor sit amet, consectetur adipiscing elit.   '));



let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
console.log(week);
for (let i = 0; i < week.length; i++){
  
  //console.log(week[i]);
    // console.log(item)
  let slice = week.slice(1, 6);
  slice = slice.join('<br>');
  let question = new Date();
  let today = question.getDay();
  let string = slice.slice(week[today]);
  let bold =  week[today].bold();
  
  str = string +'<br>'+ bold;
  let p = document.querySelector('#week').innerHTML = str;
};
for(let item of week){
  
  if((item === 'Суббота') || (item === 'Воскресенье')){
    let weekend = ['Суббота', 'Воскресенье'];
    weekend = weekend.join('<br>');
    document.querySelector('#weekends').innerHTML = weekend.italics() + '<br>';
  }

}
