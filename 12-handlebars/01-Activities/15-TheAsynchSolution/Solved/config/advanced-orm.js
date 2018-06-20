var connection = require("../config/connection.js");

var orm = {
  // The last variable cb represents the anonymous function being passed from server.js
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    return new Promise(function(resolve, reject) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
          if (err) return reject(err);
          resolve(result);
        });
    })
  }
};

module.exports = orm;
