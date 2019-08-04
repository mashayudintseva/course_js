export default function slider() {
    const slide = document.querySelectorAll('.portfolio-item'),
        btn = document.querySelectorAll('.portfolio-btn'),
        slider = document.querySelector('.portfolio-content'),
        dots = document.querySelector('.portfolio-dots');
    let dotLi = document.createElement('li');
    dotLi.classList.add('dot');
    let countDot = slide.length;
    for (let i = 0; i < countDot; i++) {
        let addDot = dotLi.cloneNode();
        dots.appendChild(addDot);

    }

    let currentSlide = 0;
    let interval;
    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;
            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
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

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        })
        //startSlide(1500);
    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.dot') || event.target.matches('.portfolio-btn')) {
            stopSlide();
        }

    })
    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.dot') || event.target.matches('.portfolio-btn')) {
            startSlide();
        }

    })

};