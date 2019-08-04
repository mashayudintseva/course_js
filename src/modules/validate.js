export default function calcValidate() {
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