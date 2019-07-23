window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours');
        let timerMinutes = document.querySelector('#timer-minutes');
        let timerSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaining() {
            // let date = new Date();
            // date = deadline;
            let dateStop = new Date(deadline).getTime();
            let dateNow = new Date().getTime();
            let utc = new Date().getUTCHours();


            let timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = Math.floor(timeRemaining % 60);
            let minutes = Math.floor((timeRemaining / 60) % 60);
            let hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds }
        }

        function updateClock() {
            let timer = getTimeRemaining();

            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if (timer.timeRemaining > 0) {
                setTimeout(updateClock, 1000)
            }
            if (timer.hours < 10) {
                timerHours.innerHTML = '0' + timer.hours;
            }
            if (timer.minutes < 10) {
                timerMinutes.innerHTML = '0' + timer.minutes;
            }
            if (timer.seconds < 10) {
                timerSeconds.innerHTML = '0' + timer.seconds;
            }

        }

        function zero() {
            let timer = getTimeRemaining();
            if (timer.hours <= 0) {
                timerHours.innerHTML = '00';
            }
            if (timer.minutes <= 0) {
                timerMinutes.textContent = '00';
            }
            if (timer.seconds <= 0) {
                timerSeconds.textContent = '00';
            }
        }
        setTimeout(zero, 1);
        updateClock();
    }
    countTimer('25 july 2019');
    setInterval(countTimer, 1000, '25 july 2019');

    //Menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu');
        const closeBtn = document.querySelector('.close-btn');
        const menuItems = menu.querySelectorAll('ul>li');
        const first = menu.querySelectorAll('ul>li')[0];
        const second = menu.querySelectorAll('ul>li')[1];
        const third = menu.querySelectorAll('ul>li')[2];
        const fourth = menu.querySelectorAll('ul>li')[3];
        const fifth = menu.querySelectorAll('ul>li')[4];
        let timer;
        let scrolled;
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        }

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => {
            elem.addEventListener('click', handlerMenu)
        })
        first.addEventListener('click', function() {
            scrolled = 0;
            scrollToTopF();
        })

        function scrollToTopF() {
            if (scrolled < 870) {
                window.scrollTo(0, scrolled);
                scrolled = scrolled + 20;
                timer = setTimeout(scrollToTopF, 5)
            } else {
                clearTimeout(timer);
            }
        }
        second.addEventListener('click', function() {
            scrolled = 0;
            scrollToTopS();
        })

        function scrollToTopS() {
            if (scrolled < 2040) {
                window.scrollTo(0, scrolled);
                scrolled = scrolled + 20;
                timer = setTimeout(scrollToTopS, 5)
            } else {
                clearTimeout(timer);
            }
        }
        third.addEventListener('click', function() {
            scrolled = 0;
            scrollToTopT();
        })

        function scrollToTopT() {
            if (scrolled < 3030) {
                window.scrollTo(0, scrolled);
                scrolled = scrolled + 20;
                timer = setTimeout(scrollToTopT, 5)
            } else {
                clearTimeout(timer);
            }
        }
        fourth.addEventListener('click', function() {
            scrolled = 0;
            scrollToTopFh();
        })

        function scrollToTopFh() {
            if (scrolled < 4100) {
                window.scrollTo(0, scrolled);
                scrolled = scrolled + 20;
                timer = setTimeout(scrollToTopFh, 5)
            } else {
                clearTimeout(timer);
            }
        }
        fifth.addEventListener('click', function() {
            scrolled = 0;
            scrollToTopFf();
        })

        function scrollToTopFf() {
            if (scrolled < 5170) {
                window.scrollTo(0, scrolled);
                scrolled = scrolled + 20;
                timer = setTimeout(scrollToTopFf, 5)
            } else {
                clearTimeout(timer);
            }
        }
    }

    toggleMenu();

    //popup 

    const togglePopUp = () => {
        const main = document.querySelector('main');
        const a = main.querySelector('a');
        a.style.cursor = 'pointer';
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
        const popupClose = document.querySelector('.popup-close');
        const popupContent = document.querySelector('.popup-content');
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {

                popup.style.display = 'block';
                //window.visualViewport.pageTop = 0;
                if (window.screen.width > 450) {
                    popupContent.animate([
                        // keyframes
                        { transform: 'translateY(-300px)' },
                        { transform: 'translateY(0px)' }
                    ], {
                        // timing options
                        duration: 1000,

                    });
                }
            })
        })
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        })

    }
    togglePopUp();

















})