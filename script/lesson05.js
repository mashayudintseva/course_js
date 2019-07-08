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

let array = ['2134', '5234523', '42324', '432', '7875', '34896', '27564'];

array.forEach(em => {
  if (String(em).search(/(2|4)/) === 0) console.log(em);
})

let number = function(num){
  for(let i = 2; i <= num-1; i++){
  if(num % i === 0){
    return false;
  }
  }
  return true;
}
let number2 = function(){
  for(let i = 2; i <= 100; i++){
    if(number(i) === true){
      console.log(i + ' делители этого числа 1 и ' + i);
    }
  }
}
number2();
// console.log(number(1))

// let func = function(num1, num2){
//   const sumArr = [];
//   for(let i = num1; i <= num2; i++){
//     let sum = 0;
  
//   for(let j = 2; j <= i; j++){
//     if(i % j === 0){ 
//       sum += j;
//       return false;
//     }
//   }
//   return true;
// }

//   if(func() == true){
//     sumArr.push(sum);
//     console.log(sum, 'Делители этого числа 1 и ', i);
//   }
//   else{
//     console.log('Ошибка')
//   }
// }
// func(1, 100);