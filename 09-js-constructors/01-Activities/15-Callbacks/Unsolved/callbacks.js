var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

// Write a function that runs a function argument if
// its other argument is truthy.

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?

var fs = require("fs");

var toRun = function(run){
    console.log("toRun::about to execute function");
    run();
};

var ifTruthy = function (truthy ,run){
    if (typeof(truthy)){
        run();
    }
};

var returnIfTruthy = function (truthy ,run){
    if (typeof(truthy)){
        return run();
    }
};

fs.writeFile('log.txt', 'Hello content!', function (err) {//<- callback function called here
    if (err) throw err;
    console.log('Loged!');
  });