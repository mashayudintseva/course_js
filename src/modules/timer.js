export default function countTimer(deadline) {
    let timerHours = document.querySelector('#timer-hours');
    let timerMinutes = document.querySelector('#timer-minutes');
    let timerSeconds = document.querySelector('#timer-seconds');


    function getTimeRemaining() {
        // let date = new Date();
        // date = deadline;
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let utc = new Date().getUTCHours();


        let timeRemaining = (dateStop - dateNow) / 1000;
        let seconds = Math.floor(timeRemaining % 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let hours = Math.floor(timeRemaining / 60 / 60);
        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        }
    }

    function updateClock() {
        let timer = getTimeRemaining();

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;

        if (timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000)
        }
        if (timer.hours < 10) {
            timerHours.innerHTML = '0' + timer.hours;
        }
        if (timer.minutes < 10) {
            timerMinutes.innerHTML = '0' + timer.minutes;
        }
        if (timer.seconds < 10) {
            timerSeconds.innerHTML = '0' + timer.seconds;
        }

    }

    function zero() {
        let timer = getTimeRemaining();
        if (timer.hours <= 0) {
            timerHours.innerHTML = '00';
        }
        if (timer.minutes <= 0) {
            timerMinutes.textContent = '00';
        }
        if (timer.seconds <= 0) {
            timerSeconds.textContent = '00';
        }
    }
    setTimeout(zero, 1);
    updateClock();
}