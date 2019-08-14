export default function sliders() {
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    }

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    }

    const slider = (slider, slide, dots, btn, dotsDiv) => {

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
}