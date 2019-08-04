'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/timer';
import calc from './modules/calc';
import attr from './modules/hoverImg';
import toggleMenu from './modules/menu';
import togglePopUp from './modules/popup';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
import calcValidate from './modules/validate';


// Timer
countTimer('7 august 2019');
setInterval(countTimer, 1000, '7 august 2019');
//Menu
toggleMenu();
togglePopUp();
//табы 
tabs();
//слайдер
slider();
calcValidate();
calc(100);
sendForm();
attr();