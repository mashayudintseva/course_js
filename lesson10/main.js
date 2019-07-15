let body = document.querySelector('body');

let fz = document.createElement('input');
fz.setAttribute('placeholder', 'Font-Size Here');
body.appendChild(fz);
fz.setAttribute('type', 'number');

let array = ["-- Background --", "Red","Green","Blue","Black"];

//Create and append select list
let bg = document.createElement("select");
bg.id = "mySelect";
body.appendChild(bg);

//Create and append the options
for (let i = 0; i < array.length; i++) {
    let option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    bg.appendChild(option);
}
let height = document.createElement('input');
height.setAttribute('placeholder', 'Height Here');
height.setAttribute('type', 'number');
body.insertBefore(height, fz);
body.insertBefore(bg, fz);
let width = document.createElement('input');
width.setAttribute('placeholder', 'Width Here');
width.setAttribute('type', 'number');
body.insertBefore(width, bg);
let selector = document.createElement('input');
selector.setAttribute('placeholder', 'Selector Here');
body.insertBefore(selector, height);

let btn = document.createElement('button');
btn.innerHTML = 'Готово';
body.appendChild(btn);
let addElem = function(){
    let selectorValue = selector.value;
    let heightValue = height.value;
    let widthValue = width.value;
    let fzValue = fz.value;
    let optionValue = bg.value;
    console.log(selectorValue, heightValue, widthValue, fzValue, optionValue)
}

let DomElement = {
    select: 
}




btn.addEventListener('click', addElem);