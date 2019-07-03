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