export default function forms() {
    const thanks = document.querySelector('#thanks');
    const form = document.getElementById('banner-form'),
        submitBtn = form.querySelector('button'),
        check = document.getElementById('check1'),
        statusMessage = document.createElement('div'),
        formDownPage = document.getElementById('footer_form'),
        submitFooter = formDownPage.querySelector('button'),
        errorPopup = document.getElementById('error'),
        checks = formDownPage.querySelectorAll('input[name="club-name"]'),
        popup1Form = document.getElementById('form1'),
        popup2Form = document.getElementById('form2'),
        popup1Check = document.getElementById('check'),
        popup1Submit = popup1Form.querySelector('button'),
        popup2Check = document.getElementById('check2'),
        popup2Submit = popup2Form.querySelector('button');

    const checkThis = (check, btn) => {
        check.addEventListener('change', () => {
            if (check.checked) {
                btn.removeAttribute('disabled');
            }
        })
    }
    const popups = (popup) => {
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

    if (window.location.pathname === '/mozaika.html' || window.location.pathname === '/schelkovo.html') {
        const formMozaika = document.getElementById('card_order'),
            mozaikaSubmit = document.getElementById('callback_form-btn'),
            mozaikaCheck = document.getElementById('card_check');

        checkThis(mozaikaCheck, mozaikaSubmit);

        formMozaika.addEventListener('submit', submitEvent);
    }

}