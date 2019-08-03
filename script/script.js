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
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            }
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
    countTimer('7 august 2019');
    setInterval(countTimer, 1000, '7 august 2019');

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
                        {
                            transform: 'translateY(-300px)'
                        }, {
                            transform: 'translateY(0px)'
                        }
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
    const calcValidate = () => {
        const calc1 = document.querySelectorAll('.calc-item')[1];
        const calc2 = document.querySelectorAll('.calc-item')[2];
        const calc3 = document.querySelectorAll('.calc-item')[3];
        calc2.addEventListener('input', () => {
            calc2.value = calc2.value.replace(/\D/g, '');
        })
        calc1.addEventListener('input', () => {
            calc1.value = calc1.value.replace(/\D/g, '');
        })
        calc3.addEventListener('input', () => {
            calc3.value = calc3.value.replace(/\D/g, '');
        })
    }
    calcValidate();
    const attr = () => {
        const img = document.querySelectorAll('.command__photo');
        for (let i = 0; i < img.length; i++) {
            const src = img[i].getAttribute('src');
            img[i].addEventListener('mouseout', (event) => {

                event.target.src = src;

            })
            img[i].addEventListener('mouseover', (event) => {
                event.target.src = event.target.dataset.img;

            })


        }
    }
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcDay = document.querySelector('.calc-day'),
            calcSquare = document.querySelector('.calc-square'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            } else {
                dayValue *= 1;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
                let zero = 0,
                    plus = 10,
                    res = 0;
                let int = setInterval(() => {

                    res += zero + plus;
                    if (res === total || res >= total) {
                        res = total;
                        clearInterval(int);
                    }
                    if (res >= 15000) {
                        res = total;
                    }
                    totalValue.textContent = Math.round(res);
                }, 5);

            }


            //totalValue.textContent = Math.round(total);
        }

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;


            if (target === calcType || target === calcSquare || target === calcDay || target === calcCount) {
                countSum();
            }

        })

    }

    calc(100);

    const sendForm = () => {
        const form = document.getElementById('form1');
        const formPopUp = document.getElementById('form3');
        const formDownPage = document.getElementById('form2');
        const formName = document.getElementById('form1-name'),
            formEmail = document.getElementById('form1-email'),
            formPhone = document.getElementById('form1-phone'),
            form2Name = document.getElementById('form2-name'),
            form2Email = document.getElementById('form2-email'),
            form2Phone = document.getElementById('form2-phone'),
            formText = document.getElementById('form2-message'),
            form3Name = document.getElementById('form3-name'),
            form3Email = document.getElementById('form3-email'),
            form3Phone = document.getElementById('form3-phone');

        const statusMessage = document.createElement('div');
        const img = document.createElement('img');
        statusMessage.appendChild(img);
        statusMessage.style.cssText = 'font-size: 2rem';
        const formPhoneReplace = () => {
            const target = event.target;
            target.value = target.value.replace(/[^0-9+]/g, '');
        }
        const formNameReplace = () => {
            const target = event.target;
            target.value = target.value.replace(/[^а-яА-я ]/g, '');
        }
        formPhone.addEventListener('input', formPhoneReplace);
        form2Phone.addEventListener('input', formPhoneReplace);
        form3Phone.addEventListener('input', formPhoneReplace);
        formName.addEventListener('input', formNameReplace);
        form2Name.addEventListener('input', formNameReplace);
        form3Name.addEventListener('input', formNameReplace);
        formText.addEventListener('input', formNameReplace);
        form.addEventListener('submit', (event) => {
            event.preventDefault(event);
            form.appendChild(statusMessage);
            img.setAttribute('src', 'more.png');
            const formData = new FormData(form);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            })
            postData(body)
                .then(() => {
                    img.setAttribute('src', 'ok.png');
                    formName.value = '';
                    formPhone.value = '';
                    formEmail.value = '';
                })
                .catch(error => {
                    img.setAttribute('src', 'er.png');
                    console.error(error);
                });


        });
        const postData = (body) => {
            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.addEventListener('readystatechange', () => {

                    if (request.readyState !== 4) {
                        return;
                    }
                    if (request.status === 200) {
                        resolve();
                    } else {
                        reject(request.status)
                    }
                })
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json');


                request.send(JSON.stringify(body));
            })
        }

        formDownPage.addEventListener('submit', (event) => {
            event.preventDefault(event);
            formDownPage.appendChild(statusMessage);
            img.setAttribute('src', 'more.png');
            const formData = new FormData(formDownPage);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            })
            postData2(body)
                .then(() => {
                    img.setAttribute('src', 'ok.png');
                    form2Name.value = '';
                    form2Phone.value = '';
                    form2Email.value = '';
                    formText.value = '';
                })
                .catch(error => {
                    img.setAttribute('src', 'er.png');
                    console.error(error);
                });


        });
        const postData2 = (body) => {
            return new Promise((resolve, reject) => {
                const request2 = new XMLHttpRequest();
                request2.addEventListener('readystatechange', () => {

                    if (request2.readyState !== 4) {
                        return;
                    }
                    if (request2.status === 200) {
                        resolve();
                    } else {
                        reject(request2.status)
                    }
                })
                request2.open('POST', 'server.php');
                request2.setRequestHeader('Content-Type', 'application/json');


                request2.send(JSON.stringify(body));
            });
        }
        formPopUp.addEventListener('submit', (event) => {
            event.preventDefault(event);
            formPopUp.appendChild(statusMessage);
            img.setAttribute('src', 'more.png');
            const formData = new FormData(formPopUp);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            })
            postData3(body)
                .then(() => {
                    img.setAttribute('src', 'ok.png');
                    form3Name.value = '';
                    form3Phone.value = '';
                    form3Email.value = '';
                })
                .catch(error => {
                    img.setAttribute('src', 'er.png');
                    console.error(error);
                });


        });
        const postData3 = (body) => {
            return new Promise((resolve, reject) => {
                const request3 = new XMLHttpRequest();
                request3.addEventListener('readystatechange', () => {

                    if (request3.readyState !== 4) {
                        return;
                    }
                    if (request3.status === 200) {
                        resolve();
                    } else {
                        reject(request3.status)
                    }
                })
                request3.open('POST', 'server.php');
                request3.setRequestHeader('Content-Type', 'application/json');


                request3.send(JSON.stringify(body));
            });
        };
    }
    sendForm();

    attr();







})