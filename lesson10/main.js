'use strict';

let body = document.querySelector('body');
let division = document.createElement('div');
let paragraph = document.createElement('p');

const DomElelement = function(selector, height, width, background, fontsize){
    this.selector = selector; //'',
    this.height =  height;//100 + 'px',
    this.width = width; //100 + 'px',
    this.background = background; //'#ccc',
    this.fontsize =  fontsize;//20 + 'px',
};

let create = function(){
    let method = new DomElelement('', 100 + 'px', 100 + 'px', '#ccc', 20 +'px');
    method.selector = '#p';
    let select = method.selector;

for(let i = 0; i < select.length; i++){
    if(select[0] == '.'){
        body.appendChild(division);
        division.style.cssText = "background: " + method.background + ';' + "width: " + method.width + ';' + "height:" + method.height+ ';' + "font-size:" + method.fontsize;
        division.textContent = 'Division - Hello World!';
    }
    if(select[0] == '#'){
        body.appendChild(paragraph);
        paragraph.style.cssText = "background: " + method.background + ';' + "width: " + method.width + ';' + "height:" + method.height+ ';' + "font-size:" + method.fontsize;
        paragraph.innerHTML = 'Paragraph - Hello World!';
    }
}
}
create();