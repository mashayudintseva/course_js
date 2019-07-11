let books = document.querySelector('.books');
let book = document.querySelectorAll('.book');
let headline = book[4].querySelector('h2');
let newHeadline = document.createElement('h2');
let adv = document.querySelector('.adv');
let doc = document.querySelector('body');
let li = document.querySelectorAll('li');
let ul = document.querySelectorAll('ul');
let newLi = document.createElement('li');
let fUlLi = ul[0].querySelectorAll('li');
let sUlLi = ul[2].querySelectorAll('li');
let fwUlLi = ul[5].querySelectorAll('li');
let sandA = document.createElement('a');

books.insertBefore(book[1], book[0]);
books.insertBefore(book[4], book[3]);
books.insertBefore(book[2], book[6]);

sandA.href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/async%20%26%20performance/README.md#you-dont-know-js-async--performance";
sandA.target="_blank";              
sandA.textContent = 'Книга 3. this и Прототипы Объектов';
newLi.textContent = 'Глава 8: За пределами ES6';
console.log('newHeadline: ', newHeadline);
newHeadline.appendChild(sandA);
console.log('sandA: ', sandA);
book[4].replaceChild(newHeadline, headline);
doc.removeChild(adv);


// ul[2].insertBefore(li[2], li[10]);

let bg = document.querySelector('body');
bg.style.background = 'url(./image/you-dont-know-js.jpg)';

ul[0].insertBefore(fUlLi[6], fUlLi[4]);
ul[0].insertBefore(fUlLi[8], fUlLi[4]);
ul[0].insertBefore(fUlLi[2], fUlLi[10]);
ul[2].appendChild(newLi);
ul[2].insertBefore(newLi, sUlLi[9]);
ul[5].insertBefore(fwUlLi[9], fwUlLi[2]);
ul[5].insertBefore(fwUlLi[2], fwUlLi[5]);
ul[5].insertBefore(fwUlLi[5], fwUlLi[8]);