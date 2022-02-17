let dd = document.querySelector('#day');
let hh = document.querySelector('#hour');
let mm = document.querySelector('#minute');
let ss = document.querySelector('#second');

let input = document.querySelector('input');
let startBtn = document.querySelector('#start');
let resetBtn = document.querySelector('#reset');

let countDown;

let timeCount = function (val) {

    let eventTime = new Date(val).getTime();
    let curntTime = Date.now();

    let totalTime = (eventTime - curntTime) / 1000; // total seconds

    let dayConst = 86400;
    let hourConst = 3600;
    let minuteConst = 60;

    // distribute total seconts to days, hours, minutes and seconds
    let days = Math.floor(totalTime / dayConst);
    totalTime = totalTime % dayConst;

    let hours = Math.floor(totalTime / hourConst);
    totalTime = totalTime % hourConst;

    let minutes = Math.floor(totalTime / minuteConst);
    totalTime = totalTime % minuteConst;

    let seconds = Math.floor(totalTime);

    if (days < 10) {
        days = '0' + days;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (totalTime < 0) {
        clearInterval(countDown);
    }

    dd.innerHTML = days;
    hh.innerHTML = hours;
    mm.innerHTML = minutes;
    ss.innerHTML = seconds;

}

startBtn.onclick = () => {

    let val = input.value;

    console.log(val);

    if (val !== '') {
        countDown = setInterval(timeCount, 1000, val);
        resetBtn.removeAttribute('disabled');
    }

}

resetBtn.onclick = () => {
    clearInterval(countDown);
    resetBtn.setAttribute('disabled', 'true');

    input.value = '';

    dd.innerHTML = '00';
    hh.innerHTML = '00';
    mm.innerHTML = '00';
    ss.innerHTML = '00';
}