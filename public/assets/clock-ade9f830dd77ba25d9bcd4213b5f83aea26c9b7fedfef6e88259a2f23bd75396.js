function getTimeRemaining2(starttime) {
  var t = Date.parse(new Date()) - Date.parse(starttime);
  var seconds = Math.floor(t / 1000);
  return seconds;
}

function initializeClock2(id, starttime) {
  var ticker = document.getElementById(id);

  function updateClock2() {
    var t = getTimeRemaining2(starttime);
    ticker.innerHTML = "Internal Time: " + t + " seconds";
  }
  updateClock2();
  var timeinterval2 = setInterval(updateClock2, 1000);
}

var starttime = new Date(Date.parse('2016-5-8'));

// $(document).ready(initializeClock2('ticker', starttime));
$(function() {
    initializeClock2("loan-test",starttime);
});
