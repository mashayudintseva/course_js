import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);


import popups from './modules/popup';
import forms from './modules/forms';
import carousel from './modules/carousel';
import clubSelect from './modules/clublist';
import sliders from './modules/sliders';
import calc from './modules/calc';
import formValidate from './modules/formValidate';



popups();
carousel();
clubSelect();
sliders();
forms();
calc();
formValidate();