function getTimeRemaining(starttime) {
  var t = Date.parse(new Date()) - Date.parse(starttime);
  var seconds = Math.floor((t / 1000) % 60);
  // var minutes = Math.floor((t / 1000 / 60) % 60);
  // var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  // var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return seconds;
  // {
  //   // 'total': t,
  //   // 'days': days,
  //   // 'hours': hours,
  //   // 'minutes': minutes,
  //   'seconds': seconds
  // };
}

function initializeClock(id, starttime) {
  var ticker = document.getElementById(id);
  
  // var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(starttime);

    ticker.innerHTML = (t).slice(-2);

    // if (t.total <= 0) {
    //   clearInterval(timeinterval);
    // }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var starttime = new Date(Date.parse('2016-12-31'));
initializeClock('ticker', starttime);
