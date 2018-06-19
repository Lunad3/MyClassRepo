var orm = require("./config/advanced-orm.js");

// Call orm method, passing in the anonymous function (with "res") as the callback.
orm.selectWhere("parties", "party_type", "grown-up").then(function(result) {
  var data = result;
  console.log(data);
});
