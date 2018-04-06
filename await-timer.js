function timer1() {
   var p = new Promise(function(resolve, reject) {
     console.log("Starting timer 1");
      setTimeout(function() {
         resolve("Timer 1 complete.");
      }, 1500)
   });
   return p;
}

function timer2() {
   var p = new Promise(function(resolve, reject) {
     console.log("Starting timer 2");
      setTimeout(function() {
         resolve("Timer 2 complete.");
      }, 1000)
   });
   return p;
}

async function doTimers() {
  var m1 = await timer1();
  var m2 = await timer2();

  console.log(m1);
  console.log(m2);
}

doTimers();

