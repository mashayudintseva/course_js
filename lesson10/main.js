'use strict';

let body = document.querySelector('body');
let division = document.createElement('div');
let paragraph = document.createElement('p');

const DomElelement = {
    selector: '',
    height: 100 + 'px',
    width: 100 + 'px',
    background: '#ccc',
    fontsize: 20 + 'px',
};

let create = function(){
    let method = Object.create(DomElelement);
    method.selector = '#p';
    let select = method.selector;

for(let i = 0; i < select.length; i++){
    if(select[0] == '.'){
        body.appendChild(division);
        division.style.cssText = "background: " + method.__proto__.background + ';' + "width: " + method.__proto__.width + ';' + "height:" + method.__proto__.height+ ';' + "font-size:" + method.__proto__.fontsize;
        division.textContent = 'Division - Hello World!';
    }
    if(select[0] == '#'){
        body.appendChild(paragraph);
        paragraph.style.cssText = "background: " + method.__proto__.background + ';' + "width: " + method.__proto__.width + ';' + "height:" + method.__proto__.height+ ';' + "font-size:" + method.__proto__.fontsize;
        paragraph.innerHTML = 'Paragraph - Hello World!';
    }
}
}
create();