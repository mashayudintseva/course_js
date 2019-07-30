let task1 = document.querySelector('#task1');
task1.innerHTML = task1.textContent.replace(/(функция | функции)/gi, `<strong> функция </strong>`);
let divText2 = document.querySelector('#task2');
divText2.innerHTML = divText2.innerHTML.replace(/\d{2}:\d{2}/g, (match) => `<b>${match}</b>`);
let body = document.querySelector('body').textContent;
let mark = task1.textContent.match(/«.+»/g);

for (let i = 0; i < mark.length; i++) {
    let semi = task1.innerHTML.replace(/«([^«»]+)»/gi, `<mark>«$1»</mark>`);
    task1.innerHTML = semi;
}
let mark2 = divText2.textContent.match(/".+"/g);
for (let i = 0; i < mark2.length; i++) {
    let semi = divText2.innerHTML.replace(/"([^"]+)"/gi, `<mark>"$1"</mark>`);
    divText2.innerHTML = semi;
}

const regExp2 = /http:\/\W.+[omru]/gi;

const arrayBodyContent = document.body.textContent.match(regExp2);
arrayBodyContent.forEach((item) => {
    const string = item.toString();
    let str = string.replace(/http:\/\/w?w?w?/, '');
    document.body.innerHTML = document.body.innerHTML.replace(string, `<a href="${string}">${str}</a>`);
});

let color = body.match(/\#\w+/gi);
console.log('color: ', color);
/* 

1.Написать скрипт, которые заменяет слово "функция" и его однокоренные слова в div с id=task1 на «<strong>функция</strong>». 

2. Написать скрипт который в div с id=task2 найдет время. Время имеет формат часы:минуты. И часы, и минуты состоят из двух цифр, пример: 09:00.
заключить найденное время в тег <b></b>

3. Создать запрос во всем документе найти текст в кавычках и заключить его в теги <mark></mark>

4. Замените в документе домены вида http://site.ru на <a href="http://site.ru">site.ru</a>, 

5. Напишите регулярное выражение для поиска цвета, заданного как #ABCDEF, вывести цвет в консоль

6. Не обязательное усложненное +1 балл
Ссылки такого вида http://site.ru/aaaa/bbbb.html заменить
на <a href="http://site.ru/aaaa/bbbb.html">site.ru</a>


Попрактикуйтесь на кроссвордах https://regexcrossword.com/
и на задачках https://habr.com/ru/post/167015/
 */