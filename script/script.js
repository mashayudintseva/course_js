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
    countTimer('27 july 2019');
    setInterval(countTimer, 1000, '27 july 2019');

    //Menu
    const toggleMenu = () => {
        const menu = document.querySelector('menu');
        document.addEventListener('click', (event) => {
            let target = event.target;
            if (target.closest('.menu') && !menu.classList.contains('active-menu')) {
                menu.classList.add('active-menu');
            } else if (!(target.closest('.active-menu') && !(target.closest('.close-btn') ||
                    target.closest('.active-menu a'))) && menu.classList.contains('active-menu')) {
                menu.classList.remove('active-menu');
            }
        });
    };
    toggleMenu();

    const togglePopUp = () => {
        const main = document.querySelector('main');
        const a = main.querySelector('a');
        a.style.cursor = 'pointer';
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
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
            });
        });
        popup.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');

                if (!target) {
                    popup.style.display = 'none';
                }
            }


        })
    };
    togglePopUp();
    //табы 
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header');
        const tab = tabHeader.querySelectorAll('.service-header-tab');
        const tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        }

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        })

    }
    tabs();
    //слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content'),
            dots = document.querySelector('.portfolio-dots');
        let dotLi = document.createElement('li');
        dotLi.classList.add('dot');
        let countDot = slide.length;
        for (let i = 0; i < countDot; i++) {
            let addDot = dotLi.cloneNode();
            dots.appendChild(addDot);

        }

        let currentSlide = 0;
        let interval;
        const dot = document.querySelectorAll('.dot');
        dot[0].classList.add('dot-active');
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
                event.preventDefault();

                let target = event.target;
                if (!target.matches('.portfolio-btn, .dot')) {
                    return;
                }
                prevSlide(slide, currentSlide, 'portfolio-item-active');
                prevSlide(dot, currentSlide, 'dot-active');
                if (target.matches('#arrow-right')) {
                    currentSlide++;
                } else if (target.matches('#arrow-left')) {
                    currentSlide--;
                } else if (target.matches('.dot')) {
                    dot.forEach((elem, index) => {
                        if (elem === target) {
                            currentSlide = index;
                        }
                    })
                }

                if (currentSlide >= slide.length) {
                    currentSlide = 0;
                }

                if (currentSlide < 0) {
                    currentSlide = slide.length - 1;
                }

                nextSlide(slide, currentSlide, 'portfolio-item-active');
                nextSlide(dot, currentSlide, 'dot-active');
            })
            //startSlide(1500);
        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.dot') || event.target.matches('.portfolio-btn')) {
                stopSlide();
            }

        })
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.dot') || event.target.matches('.portfolio-btn')) {
                startSlide();
            }

        })

    };
    slider();














})