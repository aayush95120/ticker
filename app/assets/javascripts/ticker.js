$(function() {
  
    initializeClock();
  // $( "#ticker" ).fadeIn({duration:1000, queue:false});
  // $( "div#header" ).slideDown({duration:600, queue:false}, function() {
  //   // Animation complete.
  // });
});


function initializeClock() {
  function updateClock() {
    // ---------------------repeated secondly----------------------
    // alert("js is working!");
    

    $.get("/loans.json", function (data) { //pull loan data
      var sumTotal = 0;

      $.each(data, function(index, loan) { //for each loan loop
        p = loan.principal; // principal for the loan
        var i = (loan.interest / 100); // annual interest for the loan
        var t0 = Date.parse(loan.startTime); //time when loan was taken
        var dt = Math.floor((Date.now()-t0)/1000); //seconds since loan was taken
        var netAnnual = p*i; // how much per year
        var netPerSec = netAnnual/(365*24*60*60); //how much per second
        sumTotal = sumTotal + (netPerSec*dt); //how much interest accumulated/sec
        
      });
      sumTotal = sumTotal.toFixed(2);
      $("#ticker").html("$" + sumTotal);

    }, "json");

    // ---------------------repeated secondly----------------------
  }
  
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
