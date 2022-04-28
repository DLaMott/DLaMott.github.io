"use strict";
/* Execute clock */
runClock();
setInterval("runClock()", 1000);
/* Function to create and run a clock countdown */
function runClock() {
  // YYYY (M-1) D H m s ms (start time and date from DB)
  var startDateTime = new Date(2020,6,11,16,30,0,0);
  var startStamp = startDateTime.getTime();

  var newDate = new Date();
  var newStamp = newDate.getTime();

  var timer; // for storing the interval (to stop or pause later if needed)

  newDate = new Date();
  newStamp = newDate.getTime();
  var diff = Math.round((newStamp-startStamp)/1000);

  var d = Math.floor(diff/(24*60*60));
  diff = diff-(d*24*60*60);
  var h = Math.floor(diff/(60*60));
  diff = diff-(h*60*60);
  var m = Math.floor(diff/(60));
  diff = diff-(m*60);
  var s = diff;
// Set days in browser
  document.getElementById("days").textContent = Math.floor(d);
  document.getElementById("hrs").textContent = Math.floor(h);
  document.getElementById("mins").textContent = Math.floor(m);
  document.getElementById("secs").textContent = Math.floor(s);
}
