var promise1 = new Promise(function(resolve, reject) {
  console.log("Starting timer and waiting to resolve.");
  setTimeout(function() {
    console.log('Resolving promise1');
    resolve('foo');
  }, 2000);
});

// a promise factory
function newPromise(m) {
  if(!m) m = 'Resolving something else';
  console.log('newPromise: Waiting to print the message.');
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Message: ' + m);
      resolve('foo');
    }, 2000);
  });
}

// a promise using resolve
function newPromiseFromResolve()
{
  console.log('Creating another promise from resolve.');
  return Promise.resolve()
    .then(() => console.log("Creating promise via resolve"))
    .then(() => console.log('Waiting to print "Hello World"'))
    .then(() => newPromise("Hello world."))
    .then(() => '42');
}

function chainOfTimers()
{
  console.log('Creating chain of timers');
  return Promise.resolve()
    .then(() => newPromise("Chain timer 1 expired."))
    .then(() => newPromise("Chain timer 2 expired."))
    .then(() => newPromise("Chain timer 3 expired."))
    .then(() => '77');
}

// a promise taking an argument
function printit(x) {
  return Promise.resolve()
    .then(() => console.log('The answer: ' + x));
}

function doItSecond() {console.log('Second promise that is not async');}
function doItThird() {console.log('Third promise that is not async');}

promise1.then(function(value) {
  console.log('promise1 returned and the value is: ' + value);
  // expected output: "foo"
})
  .then(() => doItSecond())
  .then(() => newPromise())
  .then(() => newPromiseFromResolve())
  .then((v) => printit(v))
  .then(() => chainOfTimers())
  .then((v) => printit(v))
  .then(() => console.log('done'));

  console.log('Promise: ' + promise1);
  // expected output: [object Promise]

