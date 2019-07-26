let start = document.querySelectorAll('button')[0];
let stop = document.querySelectorAll('button')[1];
let circle = document.querySelector('.circle');
let animate = 0;

function eventListener() {
    start.addEventListener('click', circleAnimate);
    stop.addEventListener('click', cancelAnimation);

    function circleAnimate() {
        animate = requestAnimationFrame(circleAnimate);
        circle.style.borderRadius = 50 + '%' + 50 + '%' + 50 + '%' + 50 + '%';
        circle.style.opacity = 0.2;
    }

    function cancelAnimation() {
        animate = requestAnimationFrame(circleAnimate);
        cancelAnimationFrame(animate);
    }
}
eventListener();