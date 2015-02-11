var Promise = require('promise');

function myTimer(callback, timeout, v) {
   var p = new Promise(function(resolve, reject) {
      setTimeout(function() {
         callback();
         resolve(v);
      }, timeout)
   });

   return p;
}

function myTimer1(v) {
   v.push("Timer 1 complete.");
   return myTimer(function() {
      console.log("Timer 1 complete.");
   }, 2000, v);
}

function myTimer2(v) {
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

myTimer1([])
   .then(myTimer2)
   .done(printResults);
