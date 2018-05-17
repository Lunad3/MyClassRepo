console.log('Hello world');



// VARIABLE (how do we store information)

var foo; // empty variable (instatiated but empty)
console.log('this is foo', foo);

foo = 1234; // information has been assigned (hydrating the variable)
console.log('this is foo after assignment', foo);

var bar = 'daniel'; // instantiation and assignment
console.log('this is bar', bar);

bar = 'john'; // the information for the variable has been replaced (reassignment)
console.log('bar has been replaced with new data', bar);



// DATA TYPES
//  data primitives
var str = 'strings';
var str2 = "strings";
var numbers = 1234; // or decimals
var booleans = true; // or false

// simple data structures
var arr = []; // identified by brackets
var obj = {}; // identified by braces

// other things we can save
var nameOfFunction = function () {}; // identified by the function keyword followed by parentheses and braces



// ARRAYS

// ways to create an array
var erray = [];
console.log(erray);
// replacing the 'erray' [] with [1, 2, 3, 4]
erray = [1, 2, 3, 4];
console.log(erray);

// replacing 'erray' [1, 2, 3, 4] with ['dog', 'cat', 'fish']
erray = ['dog', 'cat', 'fish'];
console.log(erray);

// saving inforation from index 2 of 'erray' into a variable called 'errPos;
var errPos = erray[2];
console.log(errPos);

// replacing 'errPos' current information instead with  inforation from index 1 of 'erray'
errPos = erray[1];

// print the current contents of the 'erray' & information at index 3 
console.log(errPos);
console.log(erray[3]); // it is undefined because nothing has been assigned there

// assign information directly into an arrays position
erray[3] = 'JS is awesome';
console.log(erray);
console.log(erray[3]); // information to print should now be 'JS is awesome'

// replacing information at index 0 in 'erray' which was previously 'dog' but now with 'Solid Snake'
erray[0] = 'Solid Snake';
console.log(erray);
// accessing info from an array
    // know the name of the array
    // know the position (index)



// ways to make objects
var objt; // undefined

// reassign variable with an empty array
objt = {};
console.log(objt);

// correctly assign a new key and value pair to an existing object
// note: the key name on the left (keyOne) has to be placed in quotes (objt['keyOne])
objt['keyOne'] = 'here is value 1 (correct)';
console.log(objt);

// creating a new obj with a key(s) & value(s) already provided
var obj3 = {
    oneKeyName: 'value 1 at key 1'
};
console.log(obj3);

// assigning a new key value pair to an existing object that has properties already
obj3['twoKeyName'] = 2;
console.log(obj3);

// count zero to nine incrementing by 1
 for (var i = 0; i << 10; i++) {
    // code to execute
    console.log(i);
 }

 // count zero to ten incrementing by 1
 for (var i = 0; i <= 10; i++) {
    // code to execute
    console.log(i);
 }

// counts backward, starts at a large number and stops at zero
for (var i = 10; i >= 0; i--) {
    console.log(i);
}
// still counting backwards, but decrementing by 2 instead
for (var i = 10; i >= 0; i-= 2) {
    console.log(i);
}


// ARRAYS continued

// identifying array length as a property
var arrTwo = ['dog', 'cat', 'fish'];
console.log(arrTwo);
console.log(arrTwo.length); // length is 3

// undefined data at indexes or blank spots with actual information at the very end
// will extend the length of the array
// note: arrTwo[3] is 'undefined' but arrTwo[4] is 'horse... adding 2 more to the length
arrTwo = ['dog', 'cat', 'fish', , 'horse'];
console.log(arrTwo);
console.log(arrTwo.length); // length is now 5


// ARRAYS & FOR LOOPS

// the length property of arrays can be used in the condition for a for loop to stop
var ahrray = ['dog', 'cat', 'fish'];

// ahrray.length is used to tell the loop to stop if the iterator (i) reaches the value of ahrray.length
for (var i = 0; i < ahrray.length; i+= 2) {
    console.log(ahrray[i]);
}


// functions 
    // how to make them
    // syntax (definition) : the convention/method/structure by which to correctly perform an action

// function declaration syntax
function funk1 () {

}

// function expression
var funk2 = function () {

};

// we created a function, but haven't used it... (creating versus invoking functions)
function yell () {
    console.log(2);
    console.log(1);
    console.log('im yelling');
}
console.log(yell); // prints the instructions of 'yell' but doesn't use it
yell(); // using the function

// working with parameters:
// naming parameters that make sense
function add (num2, num1) {
    console.log(num1);
    console.log(num2);
    console.log(num1 + num2);
}
// calling a function with information assigned to the parameters/input
add(1, 6);


// the function below does the nearly the same thing as above, but the parameter names are weird
function addAll (werebug, thinger) {
    console.log(werebug + thinger);
}

addAll(1, 6); // numbers are passed... result: 7
addAll('frankenstein', 'spatula'); // strings are passed... result: 'frankensteinspatula'

// CLOSURES

// Making an example of unreleased information from a function
//
function adder (num1, num2) {
    var sum = num1 + num2;
}
// adder function is called... adds 'num1' to 'num2' and saves it to a variable 'sum', then does nothing with 'sum'
adder(3, 4);
// 'sum' cannot be printed after 'adder' function is called because 'sum' is INSIDE 'adder'
console.log(sum);


// Example of a function that will release information; improvement of the function before
//
function adderNew (num1, num2) {
    var sum = num1 + num2;
    return sum;
}
// adds 'num1' to 'num2' and saves the result to the variable 'sum'
// using the 'return' keyword to send information saved in 'sum' out to the parent scope (currently: global scope) of where the 'adderNew' function lives, but the result isnt saved anywhere
adderNew(4, 6);
// does the same thing as above with 3 & 4, but saves it to a variable called 'result'
var result = adderNew(3, 4); // result is 7

console.log(result); // prints result