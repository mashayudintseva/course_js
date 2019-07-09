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
  let question = new Date();
  let today = question.getDay();

  if((week[i] === week[today]) && (week[i] === week[0]) && (week[i] === week[6])){
    str = '<b><i>' + week[i] + '</i></b>';
    let del = week.slice[i];

  }
  else if((week[i] === week[0]) && (week[i] === week[6])){
    str = '<i>' + week[i] + '</i>';
    let del = week.slice[i];
  } 
  else if(week[i] === week[today]){
    str = '<b>' + week[i] + '</b>';
    let del = week.slice[i];
  } else{
    str = week[i];
  }

  let div = document.createElement('div');
  div.innerHTML = str;
  document.body.appendChild(div);
}
