function clock() {
    function displayTime() {
        let date = new Date;
        let time = date.toLocaleTimeString();
        document.querySelector('.clock__time').textContent = time;
    }
    const createClock = setInterval(displayTime, 1000);
}
clock();