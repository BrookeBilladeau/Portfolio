/*Step 4 (Strict javaScript rules)*/
"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Brooke Billadeau
   Date:   January 15, 2020

*/
/*Step 6 (Call function) & 7 (run every second)*/
showClock();
setInterval("showClock()", 1000);

/*Step 5 (showClock function) a-g*/
function showClock() {
  /*Step a-b and step 10 (change to current local date)*/
  var thisDay = new Date ();
  var localDate = thisDay.toLocaleDateString();
  var localTime = thisDay.toLocaleTimeString();

  //
  document.getElementById("currentTime").innerHTML =
  localDate + "<br />" + localTime;

  /*step d & e (j4Date variable and 9pm)*/
  var j4Date = nextJuly4(thisDay);
  j4Date.setHours(21);

  /*step f (days/hrs/mins/secs variables)*/
  var days = (j4Date - thisDay)/(1000*60*60*24);
  var hrs = (days - Math.floor(days))*24;
  var mins = (hrs - Math.floor(hrs))*60;
  var secs = (mins - Math.floor(mins))*60;

  /*step g(lowest integers)*/
  document.getElementById("dLeft").textContent = Math.floor(days);
  document.getElementById("hLeft").textContent = Math.floor(hrs);
  document.getElementById("mLeft").textContent = Math.floor(mins);
  document.getElementById("sLeft").textContent = Math.floor(secs);

}

function nextJuly4(currentDate) {
    //
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   //
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);

   return jDate;
}
