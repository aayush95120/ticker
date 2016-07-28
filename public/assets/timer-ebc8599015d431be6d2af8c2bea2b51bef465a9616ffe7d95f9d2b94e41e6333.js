var timerID = null;
    var timerRunning = false;

    function stopclock(){
        if(timerRunning)
            clearTimeout(timerID);
        timerRunning = false;
    }

    function startclock(){
        stopclock();
        showtime();
    }

    function showtime(){
      var currentSec = Math.floor(Date.now() / 1000);
      var startSec1 = 1462086000;
      var startSec2 = 1462172400;
      var startSec3 = 1462258800;
      var ai1 = (0.05/(365*24*60*60))*500000*(currentSec - startSec1);
      var ai2 = (0.1/(365*24*60*60))*1000000*(currentSec - startSec2);
      var ai3 = (0.15/(365*24*60*60))*850000*(currentSec - startSec3);
      
      document.getElementById("AINetTotal").innerHTML = "$".concat((ai1+ai2+ai3).toFixed(2));
      timerID = setTimeout("showtime()",1000);
      timerRunning = true;
    }
;
