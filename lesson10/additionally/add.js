'use strict';
document.addEventListener('DOMContentLoaded', function(){
    let body = document.querySelector('body');
    let division = document.createElement('div');

    const DomElelement = function(selector, height, width, background, fontsize, position, left, top){
        this.selector = selector; //'',
        this.height =  height;//100 + 'px',
        this.width =  width;//100 + 'px',
        this.background = background; //'#ccc',
        this.fontsize =  fontsize;//20 + 'px',
        this.position =  position;//'absolute',
        this.left =  left;//0,
        this.top = top //0
    };
    body.appendChild(division);
    let domElelement = new DomElelement('', 100 + 'px', 100 + 'px', '#ccc', 20 + 'px', 'absolute', 0, 0)
    division.style.cssText = "background: " + domElelement.background + ';' + "width: " + domElelement.width + ';' + "height:" + domElelement.height+ ';' + "font-size:" + domElelement.fontsize + ';' + "position: " + domElelement.position;
    function keys(e){
        event = window.event ? window.event : e;
        switch (e.keyCode) {
            case 37:
                domElelement.left = domElelement.left - 10;
                division.style.left = domElelement.left + 'px';
                break; 
            case 38:
                domElelement.top = domElelement.top + 10;
                division.style.top = domElelement.top + 'px';
                break;
            case 39:
                domElelement.left = domElelement.left + 10;
                division.style.left = domElelement.left + 'px';
                break;
            case 40:
                domElelement.top = domElelement.top - 10;
                division.style.top = domElelement.top + 'px';
                break;
        }
    }
    document.addEventListener("keydown", keys);
})