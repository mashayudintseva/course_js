let num = 266219;
// let src = num.split(',');
let str = num.toString();

num = str[1] * str[2] * str[3] * str[4] * str[5] * str[0];

console.log(num);
let result = num ** 3;
console.log(result);
let res = result.toString();
document.write(res.substring(0,2))
