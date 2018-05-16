console.log('hello world');

// questions?

// how do we store data? using variables
// types of data that can be stored: data primitives (strings, numbers, booleans), array, object, function

var str;
var num = 1234;
var bool = true; // false
var arr = []; // empty array
var obj = {}; // empty object
// !function expression! because a variable with a name is assigned to a function
var func = function () {};
// !function declaration! they don't need ending semicolons
function funKEE () {
  console.log(str);
}

// execution context
console.log('Im calling FunKEE');
funKEE();