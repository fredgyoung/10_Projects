const d = document.getElementById("days");
const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

function countdown() {
     // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((distance % (1000 * 60)) / 1000);

    // console.log(days, hours, mins, secs);

    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = mins;
    s.innerHTML = secs;
}

countdown();

setInterval(countdown, 1000);

