export default function carousel() {
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
}