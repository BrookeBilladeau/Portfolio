/* North Dakota State College of Science, CIS 180:HTML and CSS
Final Exam: Personal Website
Site: Wordpress
Topic: Portugal Trip
Author: Brooke Billadeau
Date: April 25, 2019
Filename: Forms.js
*/

window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
      return false;
   }
}
