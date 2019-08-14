export default function formValidate() {
    window.addEventListener('DOMContentLoaded', () => {
        const name = document.getElementById('banner-name'),
            phone = document.getElementById('phone'),
            popup1Form = document.getElementById('form1'),
            popup2Form = document.getElementById('form2'),
            footerPhone = document.getElementById('callback_footer_form-phone'),
            form1phone = document.getElementById('callback_form1-phone'),
            form1name = popup1Form.querySelector('input[name="name"]'),
            form2phone = document.getElementById('callback_form2-phone'),
            form2name = popup2Form.querySelector('input[name="name"]');
        const formPhoneReplace = () => {
            const target = event.target;
            target.value = target.value.replace(/[^0-9+]/g, '');
        }
        const formNameReplace = () => {
            const target = event.target;
            target.value = target.value.replace(/[^а-яА-я ]/g, '');
        }

        const setCursorPosition = (pos, elem) => {
            elem.focus();
            if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
            else if (elem.createTextRange) {
                const range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd("character", pos);
                range.moveStart("character", pos);
                range.select()
            }
        }

        const mask = (event) => {
            const target = event.target;

            let i = 0;
            const matrix = "+7 (___) ___ ____";
            let def = matrix.replace(/\D/g, "");
            let val = target.value.replace(/\D/g, "");

            if (def.length >= val.length) val = def;
            target.value = matrix.replace(/[_\d]/g, (a) => {
                return i < val.length ? val.charAt(i++) : a
            });
            i = target.value.indexOf("_");
            if (event.keyCode == 8) i = target.value.lastIndexOf(val.substr(-1)) + 1;
            if (i != -1) {
                i < 5 && (i = 3);
                target.value = target.value.slice(0, i);
            }
            if (event.type == "blur") {
                if (target.value.length < 5) target.value = ""
            } else setCursorPosition(target.value.length, target);

        };

        name.addEventListener('input', formNameReplace);
        form1phone.addEventListener('input', mask, false);
        form1name.addEventListener('input', formNameReplace);
        form2name.addEventListener('input', formNameReplace);
        phone.addEventListener("input", mask, false);
        phone.addEventListener("focus", mask, false);
        phone.addEventListener("blur", mask, false);
        phone.addEventListener("keydown", mask, false);
        form1phone.addEventListener("input", mask, false);
        form1phone.addEventListener("focus", mask, false);
        form1phone.addEventListener("blur", mask, false);
        form1phone.addEventListener("keydown", mask, false);
        form2phone.addEventListener("input", mask, false);
        form2phone.addEventListener("focus", mask, false);
        form2phone.addEventListener("blur", mask, false);
        form2phone.addEventListener("keydown", mask, false);
        footerPhone.addEventListener("input", mask, false);
        footerPhone.addEventListener("focus", mask, false);
        footerPhone.addEventListener("blur", mask, false);
        footerPhone.addEventListener("keydown", mask, false);

        if (window.location.pathname === '/mozaika.html' || window.location.pathname === '/schelkovo.html') {
            const mozaikaPhone = document.getElementById('callback_form-phone'),
                mozaikaName = document.getElementById('callback_form-name');

            mozaikaPhone.addEventListener("input", mask, false);
            mozaikaPhone.addEventListener("focus", mask, false);
            mozaikaPhone.addEventListener("blur", mask, false);
            mozaikaPhone.addEventListener("keydown", mask, false);
            mozaikaName.addEventListener('input', formNameReplace);
            mozaikaPhone.addEventListener('input', formPhoneReplace);
        }
    })
}