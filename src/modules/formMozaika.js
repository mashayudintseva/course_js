const formMozaika = document.getElementById('mozaika-form'),
    mozaikaPhone = document.getElementById('callback_form-phone'),
    mozaikaName = formMozaika.querySelector('input[name="name"]'),
    mozaikaSubmit = formMozaika.querySelector('button'),
    mozaikaCheck = document.getElementById('card_check');

checkThis(mozaikaCheck, mozaikaSubmit);

mozaikaName.addEventListener('input', formNameReplace);
mozaikaPhone.addEventListener('input', formPhoneReplace);
formMozaika.addEventListener('submit', submitEvent);