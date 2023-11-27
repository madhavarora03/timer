let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let endDate = '01/01/2024 00:00:00';
// Date format: mm/dd/yyyy hh:mm:ss

let = setInterval(() => {
  let now = new Date().getTime();
  let countDownDate = new Date(endDate).getTime();
  let distance = countDownDate - now;

  // time calculations for days, hours, minutes and seconds
  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / 1000);

  // display the result in the element
  days.innerHTML = d + '<br><span>Days</span>';
  hours.innerHTML = h + '<br><span>Hours</span>';
  minutes.innerHTML = m + '<br><span>Minutes</span>';
  seconds.innerHTML = s + '<br><span>Seconds</span>';

  // Animate the circle
  // 365 days in a yr
  dd.style.strokeDashoffset = 440 - (d * 440) / 365;
  // 24 hrs in a day
  hh.style.strokeDashoffset = 440 - (h * 440) / 24;
  // 60 mins in an hr
  mm.style.strokeDashoffset = 440 - (m * 440) / 60;
  // 60 secs in a min
  ss.style.strokeDashoffset = 440 - (s * 440) / 60;

  // if the count down is finished, write the message
  if (distance < 0) {
    clearInterval();
    document.getElementById('time').style.display = 'none';
    document.querySelector('.message').style.display = 'block';
  }
});
