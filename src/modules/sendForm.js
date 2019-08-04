export default function sendForm() {
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
        img.setAttribute('src', 'more.png');
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

                img.setAttribute('src', 'ok.png');
                let inputs = form.querySelectorAll('input');
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = "";
                }
            })
            .catch(error => {
                img.setAttribute('src', 'er.png');
                console.error(error);
            });
    }
    const submitEvent = () => {
        const target = event.target;
        event.preventDefault(event);
        submitForm(target);
    }
    form.addEventListener('submit', submitEvent);

    formDownPage.addEventListener('submit', submitEvent);
    formPopUp.addEventListener('submit', submitEvent);
}