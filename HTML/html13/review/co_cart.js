"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Review Assigment

   Shopping Cart Form Script

   Author: Brooke Billadeau
   Date:   March 3, 2020

   Filename: co_cart.js

   Function List
   =============

   calcCart()
      Calculates the cost of the customer order

   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals

   formatUSACurrency(val)
      Formats val as U.S.A. currency

*/
// Step 4-Event Listener
window.addEventListener("load", function() {
  var cartForm = document.forms.cart; /*Does this belong?*/

calcCart();

cartForm.elements.modelQty.onchange = calcCart;

var shipOptions = document.querySelectorAll('input[name= "shipping"]');
for (var i = 0; i < shipOptions.length; i++) {
  shipOptions[i].onclick = calcCart;
}
});

// Step 5-calcCart function
function calcCart() {
  var cartForm = document.forms.cart;

  var modCost = cartForm.elements.modelCost.value;

  var qIndex = cartForm.elements.modelQty.selectedIndex;
  var quant = cartForm.elements.modelQty[qIndex].value;

  var orderCost = modCost*quant;
  cartForm.elements.orderCost.value = formatUSCurrency(orderCost);

  var shipCost = document.querySelector('input[name="shipping"]:checked').value*quant;
  cartForm.elements.shippingCost.value = formatNumber(shipCost, 2);

  cartForm.elements.subTotal.value = formatNumber(orderCost + shipCost, 2);

  var salesTax = 0.05*(orderCost + shipCost);
  cartForm.elements.salesTax.value = formatNumber(salesTax, 2);

  var cartTotal = orderCost + shipCost + salesTax;
  cartForm.elements.cartTotal.value = formatUSCurrency(cartTotal);

  cartForm.elements.shippingType.value =
    document.querySelector('input[name="shipping"]:checked').nextSibling.nodeValue;
}





function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals,
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
