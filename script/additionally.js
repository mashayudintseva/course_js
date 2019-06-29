let num = '2,6,6,2,1,9';
// let src = num.split(',');


let array = num.split(',');
for(var i = 0, len = array.length; i < len; i++) {
    if(typeof array[i] == 'number') {
        num = array[1] * array[2]
    } else if(typeof array[i] == 'string') {
        num = array[1] * array[2] * array[3] * array[4] * array[5] * array[0]
    }
}
console.log(num);
let result = num ** 3;
console.log(result);
let res = result.toString();
document.write(res.substring(0,2))
