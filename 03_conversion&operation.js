"use strict"; // treat all JS code as newer version

let a = undefined;

console.log(typeof(a)); // This will print "undefined" because a is of type undefined.

let n = Number(a);
console.log(typeof(n)); // This will print "number" because Number(undefined) results in NaN, which is a numeric data type.
