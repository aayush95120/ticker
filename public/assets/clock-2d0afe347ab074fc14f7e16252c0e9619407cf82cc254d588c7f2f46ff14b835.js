function getTimeRemaining(starttime) {
  var t = Date.parse(new Date()) - Date.parse(starttime);
  var seconds = Math.floor((t / 1000) % 60);
  return seconds;
}

function initializeClock(id, starttime) {
  var ticker = document.getElementById(id);
  function updateClock() {
    var t = getTimeRemaining(starttime);
    ticker.innerHTML = t;
        // (t).slice(-2);
  }
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var starttime = new Date(Date.parse('2016-12-31'));

$(initializeClock('ticker', starttime));
