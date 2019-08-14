export default function calc() {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        const calculate = () => {
            const calc = document.getElementById('card_order'),
                time = calc.querySelector('.time'),
                radio = time.querySelectorAll('input'),
                club = calc.querySelectorAll('.club'),
                price = calc.querySelector('.price'),
                total = price.querySelector('#price-total'),
                newPrice = price.querySelector('#new-price-total'),
                promo = price.querySelector('input[placeholder="Промокод"]'),
                clubName = calc.querySelectorAll('input[name="club-name"]');
            const schelkovo = [1999, 9990, 13900, 19900];
            const mozaika = [2999, 14990, 21990, 24990];
            let priceValue,
                priceTotal;
            calc.addEventListener('input', (event) => {
                let target = event.target;

                for (var i = 0; i < clubName.length; i++) {
                    if (clubName[i].type == "radio" && clubName[i].checked) {
                        let checked = clubName[i].value;
                        if (checked === 'schelkovo') {
                            priceValue = schelkovo;
                        }
                        if (checked === 'mozaika') {
                            priceValue = mozaika;
                        }
                    }
                }
                if (radio[0].checked) {
                    priceTotal = priceValue[0];
                } else if (radio[1].checked) {
                    priceTotal = priceValue[1];
                } else if (radio[2].checked) {
                    priceTotal = priceValue[2];
                } else if (radio[3].checked) {
                    priceTotal = priceValue[3];
                }

                total.innerHTML = priceTotal + '&#x20bd';
                let value = promo.value;
                if (value === 'ТЕЛО2019') {
                    total.innerHTML = `<del>${priceTotal} </del>`;
                    let newPriceTotal = priceTotal / 100 * 30;
                    newPriceTotal = Math.round(newPriceTotal);
                    newPrice.innerHTML = ' ' + newPriceTotal + '&#x20bd';
                }


            })


        };

        calculate();
    }
}