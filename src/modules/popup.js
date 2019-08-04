export default function togglePopUp() {
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