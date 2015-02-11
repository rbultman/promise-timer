# promise-timer
An illustration of the use of promises using node.js and timers.

## Background

Promises kicked my butt until I came to the realization that a promise is
a unit of work that must be fully 'encapsulated' in order to use with then().
The thing you pass in then() must be a function name, not a function call with
parameters.

In other words, this doesn't really work:

```
someFuncReturningAPromise.then(console.log("Not what I expect."));
```

console.log get's called pretty much immediately, not when the promise is 
resolved as you probably want.  Instead, you have to do something like this:

```
someFuncReturningAPromise.then(console.log);
```

console.log will get called when the promise is resolved.  The resolution of the promise is
passed to console.log.

Since you can't include parameters along with the function name as a parameter to then(),
the function that is called needs to be self-contained or only depend on what is passed
to it when the preceding promise resolved.  This at first seemed limiting to me but then
I realized it enforces discipline and allows each "work package" to be independently tested.
It also mimics the Linux/Unix method of piping several commands together with the output
of one being fed to the next promise.
