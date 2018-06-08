var fs = require("fs");

function logBefore(func, message) {
  console.log(message);

  func();
}

logBefore(function () {
  console.log('this is a function that is a callback.')
}, 'this is just a parameter to the original function');

function runIf(func, bool) {
  if (bool) {
    func();
  }
}

runIf(function () {
  console.log('a');
}, false);

runIf(function () {
  console.log('b');
}, true);

function wrap(func, value) {
  return function() {
    return func(value);
  };
}

var resultFunc = wrap(function (a) {
  console.log('this is inside my wrap');
  return a + 5;
}, 7);
console.log('this is outside my wrap');
resultFunc();

// Callbacks appear in familiar places, like fs.writeFile.
fs.writeFile("log.txt", "Log message!", function(err) {

  if (err) {
    console.log(err);
  }

  console.log("File saved!");

});

// Alternatively, we can assign our function to a variable,
// and pass it by name.
var writeFileCallback = function(err) {

  if (err) {
    console.log(err);
  }

  console.log("File saved!");

};

fs.writeFile("log.txt", "Log message!", writeFileCallback);
