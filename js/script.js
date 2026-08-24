function updateClock() {
    const clockworkpls = new Date();
    document.getElementById("time").innerHTML = clockworkpls.toLocaleTimeString();
}
updateClock();
setInterval(updateClock, 1000);