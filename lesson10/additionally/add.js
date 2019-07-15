'use strict';
document.addEventListener('DOMContentLoaded', function(){
    let body = document.querySelector('body');
    let division = document.createElement('div');

    const DomElelement = {
        selector: '',
        height: 100 + 'px',
        width: 100 + 'px',
        background: '#ccc',
        fontsize: 20 + 'px',
        position: 'absolute',
        left: 0,
        top: 0
    };

    body.appendChild(division);
    division.style.cssText = "background: " + DomElelement.background + ';' + "width: " + DomElelement.width + ';' + "height:" + DomElelement.height+ ';' + "font-size:" + DomElelement.fontsize + ';' + "position: " + DomElelement.position;
    function keys(e){
        event = window.event ? window.event : e;
        switch (e.keyCode) {
            case 37:
                DomElelement.left = DomElelement.left - 10;
                division.style.left = DomElelement.left + 'px';
                break; 
            case 38:
                DomElelement.top = DomElelement.top + 10;
                division.style.top = DomElelement.top + 'px';
                break;
            case 39:
                DomElelement.left = DomElelement.left + 10;
                division.style.left = DomElelement.left + 'px';
                break;
            case 40:
                DomElelement.top = DomElelement.top - 10;
                division.style.top = DomElelement.top + 'px';
                break;
        }
    }
    document.addEventListener("keydown", keys);
})