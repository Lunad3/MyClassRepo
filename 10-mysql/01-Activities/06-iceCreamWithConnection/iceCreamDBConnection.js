var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "Luna",

  // Your password
<<<<<<< HEAD
  password: "Papaya321",
=======
  password: "ChangeMe123",
>>>>>>> origin/master
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});
