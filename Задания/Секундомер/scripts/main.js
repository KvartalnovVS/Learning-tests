function stopwatch() {
    const time = document.querySelector('.stopwatch__time');
    const startBtn = document.querySelector('.startBtn');
    const stopBtn = document.querySelector('.stopBtn');
    const resetBtn = document.querySelector('.resetBtn');
    let t;
    let hr = 0;
    let min = 0;
    let sec = 0;

    function displayTime() {
        sec++;
        if (sec > 59) {
            sec = 0;
            min++;
        };
        if (min > 59) {
            min = 0;
            hr++;
        };
        time.textContent = (hr > 9 ? hr : "0" + hr)
            + " : " + (min > 9 ? min : "0" + min)
            + " : " + (sec > 9 ? sec : "0" + sec);

        startBtn.onclick = 0;
    };

    function timeInterval() {
        t = setInterval(displayTime, 1000);
    };

    startBtn.onclick = timeInterval;

    stopBtn.onclick = function () {
        clearInterval(t);
        startBtn.onclick = timeInterval;
    };

    resetBtn.onclick = function () {
        clearInterval(t);
        time.textContent = "00 : 00 : 00";
        hr = 0;
        min = 0;
        sec = 0;
        startBtn.onclick = timeInterval;
    };

}

stopwatch();