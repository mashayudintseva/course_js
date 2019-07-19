window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    let goodParagraph = document.createElement('p');
    let todayParagraph = document.createElement('p');
    let timeParagraph = document.createElement('p');
    let newYearParagraph = document.createElement('p');
    let body = document.querySelector('body');
    let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    body.appendChild(newYearParagraph);
    body.insertBefore(timeParagraph, newYearParagraph);
    body.insertBefore(todayParagraph, timeParagraph);
    body.insertBefore(goodParagraph, todayParagraph);
    timeParagraph.innerHTML = 'Текущее время: ';
    let date = new Date();
        function getTimeRemaining(deadline){
            let dateStop = new Date(deadline).getTime();
            let dateNow = new Date().getTime();
            let timeRemaining = (dateStop - dateNow) / 1000;
            let days = Math.floor(timeRemaining / 60 / 60 / 24); 
            return {days};
        }
        function getDaysNewYear(){
            let timer = getTimeRemaining('31 december 2019');
            let day = timer.days.toString();
            let last = day.slice(-1);
            for(let i = 0; i <= day.length; i++){
                if(last <= 4){
                    newYearParagraph.innerHTML = 'До нового года осталось ' + timer.days + ' дня';
                }
                else{
                    newYearParagraph.innerHTML = 'До нового года осталось ' + timer.days + ' дней';
                }
            }
        }
        function getTime(){
            let date = new Date();
            let time = date.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });
            timeParagraph.innerHTML = 'Текущее время: ' + time;
        }
        function getDate(){
            let day = date.getDay();
            let good = date.getHours();
            let today = week[day];
            todayParagraph.innerHTML = 'Сегодня: ' + today;
            if(good > 4){
                goodParagraph.textContent = 'Доброе утро';
            } else if(good <= 12){
                goodParagraph.textContent = 'Доброе утро';
                
            }
            if(good > 12){
                goodParagraph.textContent = 'Добрый день';
            } else if(good <= 15){
               goodParagraph.textContent = 'Добрый день';
                
            }
            if(good > 16){
                goodParagraph.textContent = 'Добрый вечер';
            }else if(good <= 20){
                goodParagraph.textContent = 'Добрый вечер';
                
            }
            if(good > 20){
                goodParagraph.textContent = 'Доброй ночи';
            }else if(good <= 4){
                goodParagraph.textContent = 'Доброй ночи';
                
            }
            
            // let minutes = Math.floor((timeRemaining / 60) % 60);
            // let hours = Math.floor(timeRemaining / 60 / 60);
            // return {timeRemaining, hours, minutes, seconds}
        }
    getDate();
    setInterval(getTime, 1000);
    getTimeRemaining('31 december 2019');
    getDaysNewYear();
});