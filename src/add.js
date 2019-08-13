const formVisit = document.getElementById('free_visit_form'),
    visit = document.querySelector('.free-visit');


const popups = (popup, elem) => {
    if (elem) {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
        })
    }
    popup.addEventListener('click', () => {
        let target = event.target;
        if (target.closest('.overlay')) {
            popup.style.display = 'none';
        }
        if (target.closest('.close-form')) {
            popup.style.display = 'none';
        }
        if (target.closest('.close-btn')) {
            popup.style.display = 'none';
        }
    })
}

popups(formVisit, visit);


const callBtn = document.querySelector('.callback-btn'),
    callForm = document.getElementById('callback_form');

popups(callForm, callBtn);

// const html = document.querySelector('html#main');
// const formGift = html.getElementById('gift'),
//     giftBtn = html.querySelector('.fixed-gift');

// popups(formGift, giftBtn);
// const calculate = () => {
//     const calc = document.getElementById('card_order'),
//         time = calc.querySelector('.time'),
//         radio = time.querySelectorAll('input'),
//         club = calc.querySelectorAll('.club'),
//         price = calc.querySelector('.price'),
//         total = price.querySelector('#price-total'),
//         newPrice = price.querySelector('#new-price-total'),
//         promo = price.querySelector('input[placeholder="Промокод"]'),
//         clubName = calc.querySelectorAll('input[name="club-name"]');
//     const schelkovo = [1999, 9990, 13900, 19900];
//     const mozaika = [2999, 14990, 21990, 24990];
//     let priceValue,
//         priceTotal;
//     calc.addEventListener('input', (event) => {
//         let target = event.target;

//         for (var i = 0; i < clubName.length; i++) {
//             if (clubName[i].type == "radio" && clubName[i].checked) {
//                 let checked = clubName[i].value;
//                 if (checked === 'schelkovo') {
//                     priceValue = schelkovo;
//                 }
//                 if (checked === 'mozaika') {
//                     priceValue = mozaika;
//                 }
//             }
//         }
//         if (radio[0].checked) {
//             priceTotal = priceValue[0];
//         } else if (radio[1].checked) {
//             priceTotal = priceValue[1];
//         } else if (radio[2].checked) {
//             priceTotal = priceValue[2];
//         } else if (radio[3].checked) {
//             priceTotal = priceValue[3];
//         }

//         total.innerHTML = priceTotal + '&#x20bd';
//         let value = promo.value;
//         if (value === 'ТЕЛО2019') {
//             total.innerHTML = `<del>${priceTotal} </del>`;
//             let newPriceTotal = priceTotal / 100 * 30;
//             newPriceTotal = Math.round(newPriceTotal);
//             newPrice.innerHTML = ' ' + newPriceTotal + '&#x20bd';
//         }


//     })


// };

// calculate();
const sliderService = () => {
    const slider = document.querySelector('.services-slider'),
        slide = slider.querySelectorAll('.slide-group'),
        allSlides = slider.querySelector('.all-slides');
    let currentSlide = 0;
    let left = 0;
    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        if (!target.matches('#arrow-left2, #arrow-right2')) {
            return;
        }
        if (target.matches('#arrow-right2')) {

            if (left <= -1125) {
                left = 0;
            } else {
                left = left - 225;
            }
            allSlides.style.left = left + 'px';

        }
        if (target.matches('#arrow-left2')) {
            if (left < 0) {
                left = left + 225;
            } else {
                left = -1125;
            }
            allSlides.style.left = left + 'px';


        }
    })


}
sliderService();
const clubSelect = document.querySelector('.clubs-list'),
    clubList = clubSelect.querySelector('.club-list'),
    clubBlock = document.querySelector('.club-select'),
    clubP = clubSelect.querySelector('.club-select-p');
document.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.clubs-list') && !clubList.classList.contains('active-list')) {
        clubList.classList.add('active-list');
        clubP.classList.add('active-menu');
    } else if (!(target.closest('.active-list') && !(target.classList.contains('active-list') || target.closest('.active-menu'))) && clubList.classList.contains('active-list')) {
        clubList.classList.remove('active-list');
        clubP.classList.remove('active-menu');
    }
    //if(target.closest(''))
})
const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
}

const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
}

function slider(slider, slide, dots, btn, dotsDiv) {

    dotsDiv.classList.add('slider-dots')
    dots.appendChild(btn);
    btn.classList.add('dot');
    for (let i = 0; i < slide.length; i++) {
        let manyDots = dots.cloneNode(true);
        dotsDiv.appendChild(manyDots);
    }
    slider.appendChild(dotsDiv);
    const btns = slider.querySelectorAll('.dot');
    btns[0].classList.add('dot-active');
    let currentSlide = 0;
    let interval;
    const autoPlay = () => {
        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(btns, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(btns, currentSlide, 'dot-active');
    }

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlay, time);
    }

    const stopSlide = () => {
        clearInterval(interval);
    }
    startSlide(5000);
    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;

        if (!target.matches('#arrow-left, #arrow-right, .dot')) {
            return;
        }
        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(btns, currentSlide, 'dot-active');
        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            btns.forEach((elem, index) => {
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
        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(btns, currentSlide, 'dot-active');

    })

    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.dot') || event.target.matches('.slider-arrow')) {
            stopSlide();
        }
    })
    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.dot') || event.target.matches('.slider-arrow')) {
            startSlide();
        }
    })
};
const sliderTop = document.querySelector('.main-slider'),
    slideTop = sliderTop.querySelectorAll('.slide'),
    dotsTop = document.createElement('li'),
    btnTop = document.createElement('button'),
    dotsDivTop = document.createElement('div');
slider(sliderTop, slideTop, dotsTop, btnTop, dotsDivTop);
const sliderGal = document.querySelector('.gallery-slider'),
    slide = sliderGal.querySelectorAll('.slide'),
    dots = document.createElement('li'),
    btn = document.createElement('button'),
    dotsDiv = document.createElement('div');
slider(sliderGal, slide, dots, btn, dotsDiv);
const thanks = document.querySelector('#thanks');
const form = document.getElementById('banner-form'),
    name = document.getElementById('banner-name'),
    phone = document.getElementById('phone'),
    submitBtn = form.querySelector('button'),
    check = document.getElementById('check1'),
    statusMessage = document.createElement('div'),
    formDownPage = document.getElementById('footer_form'),
    footerPhone = document.getElementById('callback_footer_form-phone'),
    submitFooter = formDownPage.querySelector('button'),
    errorPopup = document.getElementById('error'),
    checks = formDownPage.querySelectorAll('input[name="club-name"]'),
    popup1Form = document.getElementById('form1'),
    popup2Form = document.getElementById('form2'),
    form1phone = document.getElementById('callback_form1-phone'),
    form1name = popup1Form.querySelector('input[name="name"]'),
    popup1Check = document.getElementById('check'),
    popup1Submit = popup1Form.querySelector('button'),
    form2phone = document.getElementById('callback_form2-phone'),
    form2name = popup2Form.querySelector('input[name="name"]'),
    popup2Check = document.getElementById('check2'),
    popup2Submit = popup2Form.querySelector('button');
console.log('formMozaika: ', formMozaika);

function checkThis(check, btn) {
    check.addEventListener('change', () => {
        if (check.checked) {
            btn.removeAttribute('disabled');
        }
    })
}
checkThis(check, submitBtn);
checkThis(popup1Check, popup1Submit);
checkThis(popup2Check, popup2Submit);
for (let i = 0; i < checks.length; i++) {
    checks[i].addEventListener('change', () => {
        if (checks[i].checked) {
            submitFooter.removeAttribute('disabled');
        }
    })
}

const formPhoneReplace = () => {
    const target = event.target;
    target.value = target.value.replace(/[^0-9+]/g, '');
}
const formNameReplace = () => {
    const target = event.target;
    target.value = target.value.replace(/[^а-яА-я ]/g, '');
}
phone.addEventListener('input', formPhoneReplace);
name.addEventListener('input', formNameReplace);
form1phone.addEventListener('input', formPhoneReplace);
form1name.addEventListener('input', formNameReplace);
form2phone.addEventListener('input', formPhoneReplace);
form2name.addEventListener('input', formNameReplace);
footerPhone.addEventListener('input', formPhoneReplace);
const postData = (body) => {
    return fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })

};
const submitForm = (form) => {
    form.appendChild(statusMessage);
    statusMessage.textContent = 'Идёт отправка...';
    const formData = new FormData(form);
    let body = {};
    formData.forEach((val, key) => {
        body[key] = val;
    });
    postData(body)
        .then((response) => {

            if (response.status !== 200) {
                throw new Error('Status network not 200')
            }
            thanks.style.display = 'block';
            popups(thanks);
            statusMessage.textContent = 'Спасибо за заявку!';
            let inputs = form.querySelectorAll('input');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }
        })
        .catch(error => {
            errorPopup.style.display = 'block';
            popups(errorPopup);
            statusMessage.textContent = 'Ошибка';
        });
}
const submitEvent = () => {
    const target = event.target;
    event.preventDefault(event);
    submitForm(target);
}
form.addEventListener('submit', submitEvent);
formDownPage.addEventListener('submit', submitEvent);
popup1Form.addEventListener('submit', submitEvent);
popup2Form.addEventListener('submit', submitEvent);