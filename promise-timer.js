var Promise = require('promise');

function myTimer(callback, timeout, v) {
   var p = new Promise(function(resolve, reject) {
     console.log("In the Promise function and starting the timeout.");
      setTimeout(function() {
         callback();
         resolve(v);
      }, timeout)
   });

   return p;
}

function myTimer1(v) {
   console.log("Creating timer 1.");
   v.push("Timer 1 complete.");
   return myTimer(function() {
      console.log("Timer 1 complete.");
   }, 2000, v);
}

function myTimer2(v) {
   console.log("Creating timer 2.");
   v.push("Timer 2 complete.");
   return myTimer(function() {
      console.log("Timer 2 complete.");
   }, 1000, v);
}

function printResults(v) {
   console.log("Number of results: " + v.length);
   for (var i=0; i<v.length; i++) {
      console.log("Result " + i + ": " + v[i]);
   }
}

console.log("Starting the first timer.");

myTimer1([])
   .then(myTimer2)
   .done(printResults);

console.log("You have reached the end of the script.");

