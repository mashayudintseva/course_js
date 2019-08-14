export default function popup() {
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


    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        const formGift = document.getElementById('gift'),
            giftBtn = document.querySelector('.fixed-gift');

        popups(formGift, giftBtn);
    }

}